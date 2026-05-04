/**

- wiki-claude.js
- Drop-in Claude query widget for a static GitHub Pages wiki.
- 
- USAGE: Add to your wiki's HTML:
- <script src="wiki-claude.js" data-endpoint="https://your-app.railway.app/query"></script>
- 
- STRATEGY:
- This module is entirely self-contained — styles, markup, and logic in one file.
- It uses a module pattern (IIFE) so nothing leaks into global scope except a
- single `WikiClaude` object, which you can use to programmatically open the panel.
- 
- Password is stored in sessionStorage so users re-enter on new tabs but aren't
- nagged within a session. You can swap to localStorage if you prefer persistence.
  */

(function () {
"use strict";

// ─── Configuration ────────────────────────────────────────────────────────
// Read endpoint from the script tag's data-endpoint attribute.
// Omit data-endpoint (or set it to "stub") to run entirely in-browser with
// no backend — password modal and query flow work fully; responses echo back
// what you asked plus a snippet of page context. Good for UI dev before
// the Railway service exists.
// To go live: data-endpoint="https://your-app.railway.app/query"
const scriptTag = document.currentScript;
const ENDPOINT = scriptTag?.dataset?.endpoint || "stub";
const STUB_MODE = ENDPOINT === "stub";
const STUB_PASSWORD = "wiki";   // accepted password in stub mode — change to taste
const STORAGE_KEY = "wiki_claude_key";

// ─── Inject Styles ─────────────────────────────────────────────────────────
// Embedding CSS here keeps the widget truly self-contained.
// We use a unique prefix (wc-) to avoid collisions with your wiki's styles.
const css = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500&display=swap');
#wc-trigger {
  position: fixed;
  top: 4rem;
  right: 4rem;
  z-index: 9000;
  background: #0f0f0f;
  color: #e8e8e0;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 0.6rem 1.1rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}
#wc-trigger:hover { background: #1a1a1a; border-color: #888; }
#wc-trigger .wc-dot {
  display: inline-block;
  width: 6px; height: 6px;
  background: #7fff7f;
  border-radius: 50%;
  margin-right: 7px;
  vertical-align: middle;
  animation: wc-pulse 2.5s ease-in-out infinite;
}
@keyframes wc-pulse {
  0%, 100% { opacity: 1; } 50% { opacity: 0.3; }
}

/* ── Backdrop ── */
#wc-backdrop {
  display: none;
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.55);
  z-index: 9001;
  backdrop-filter: blur(2px);
}
#wc-backdrop.wc-open { display: block; }

/* ── Panel ── */
#wc-panel {
  position: fixed;
  bottom: 0; right: 0;
  width: min(480px, 100vw);
  height: min(640px, 90vh);
  background: #0f0f0f;
  border: 1px solid #2a2a2a;
  border-bottom: none; border-right: none;
  border-radius: 8px 0 0 0;
  z-index: 9002;
  display: flex;
  flex-direction: column;
  font-family: 'IBM Plex Sans', sans-serif;
  color: #d8d8d0;
  transform: translateY(100%);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -8px -8px 40px rgba(0,0,0,0.5);
}
#wc-panel.wc-open { transform: translateY(0); }

/* ── Panel Header ── */
#wc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.2rem;
  border-bottom: 1px solid #1e1e1e;
  flex-shrink: 0;
}
#wc-header h2 {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #888;
  margin: 0;
  text-transform: uppercase;
}
#wc-stub-badge {
  color: #ffaa44;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
}
#wc-close {
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 1;
  padding: 2px 4px;
  border-radius: 3px;
  transition: color 0.15s;
}
#wc-close:hover { color: #ccc; }

/* ── Context Pill ── */
#wc-context-bar {
  padding: 0.5rem 1.2rem;
  border-bottom: 1px solid #1a1a1a;
  flex-shrink: 0;
}
#wc-context-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.68rem;
  color: #555;
  letter-spacing: 0.05em;
}
#wc-context-label span {
  color: #7a9fff;
  margin-left: 4px;
}

/* ── Messages area ── */
#wc-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  scrollbar-width: thin;
  scrollbar-color: #2a2a2a transparent;
}
.wc-msg {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.wc-msg-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #444;
}
.wc-msg-user .wc-msg-label { color: #7a9fff; }
.wc-msg-assistant .wc-msg-label { color: #7fff9f; }
.wc-msg-body {
  font-size: 0.88rem;
  line-height: 1.6;
  color: #c8c8c0;
}
.wc-msg-user .wc-msg-body {
  background: #161616;
  border-left: 2px solid #7a9fff33;
  padding: 0.6rem 0.8rem;
  border-radius: 0 4px 4px 0;
}
/* Render markdown-ish code blocks in responses */
.wc-msg-body code {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.82em;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  padding: 1px 5px;
  border-radius: 3px;
}
.wc-msg-body pre {
  background: #141414;
  border: 1px solid #222;
  border-radius: 4px;
  padding: 0.8rem;
  overflow-x: auto;
  margin: 0.5rem 0;
}
.wc-msg-body pre code {
  background: none;
  border: none;
  padding: 0;
  font-size: 0.8rem;
}

/* ── Thinking indicator ── */
.wc-thinking {
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0.4rem 0;
}
.wc-thinking span {
  display: inline-block;
  width: 5px; height: 5px;
  background: #444;
  border-radius: 50%;
  animation: wc-bounce 1.2s ease-in-out infinite;
}
.wc-thinking span:nth-child(2) { animation-delay: 0.2s; }
.wc-thinking span:nth-child(3) { animation-delay: 0.4s; }
@keyframes wc-bounce {
  0%, 80%, 100% { transform: scale(0.8); opacity: 0.4; }
  40% { transform: scale(1.2); opacity: 1; }
}

/* ── Input area ── */
#wc-input-area {
  padding: 0.9rem 1.2rem;
  border-top: 1px solid #1e1e1e;
  display: flex;
  gap: 0.6rem;
  align-items: flex-end;
  flex-shrink: 0;
}
#wc-input {
  flex: 1;
  background: #161616;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  color: #d8d8d0;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.85rem;
  padding: 0.55rem 0.8rem;
  resize: none;
  min-height: 38px;
  max-height: 120px;
  transition: border-color 0.15s;
  line-height: 1.5;
}
#wc-input:focus {
  outline: none;
  border-color: #444;
}
#wc-input::placeholder { color: #3a3a3a; }
#wc-send {
  background: #1a2a1a;
  border: 1px solid #2a4a2a;
  border-radius: 4px;
  color: #7fff9f;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  padding: 0.55rem 0.9rem;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;
  flex-shrink: 0;
}
#wc-send:hover:not(:disabled) { background: #1e361e; border-color: #3a5a3a; }
#wc-send:disabled { opacity: 0.4; cursor: not-allowed; }

/* ── Password Modal ── */
#wc-auth-modal {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.8);
  align-items: center;
  justify-content: center;
}
#wc-auth-modal.wc-open { display: flex; }
#wc-auth-box {
  background: #0f0f0f;
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  padding: 2rem;
  width: min(360px, 90vw);
  font-family: 'IBM Plex Mono', monospace;
}
#wc-auth-box h3 {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #666;
  margin: 0 0 0.4rem;
}
#wc-auth-box p {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.83rem;
  color: #555;
  margin: 0 0 1.4rem;
  line-height: 1.5;
}
#wc-password-input {
  width: 100%;
  background: #141414;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  color: #d8d8d0;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.85rem;
  padding: 0.6rem 0.8rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}
#wc-password-input:focus { outline: none; border-color: #444; }
#wc-auth-submit {
  width: 100%;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 4px;
  color: #7a9fff;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  padding: 0.65rem;
  cursor: pointer;
  transition: background 0.15s;
}
#wc-auth-submit:hover { background: #222; }
#wc-auth-error {
  font-size: 0.75rem;
  color: #ff7a7a;
  margin-top: 0.6rem;
  min-height: 1rem;
}
`;

const styleEl = document.createElement("style");
styleEl.textContent = css;
document.head.appendChild(styleEl);

// ─── Build DOM ─────────────────────────────────────────────────────────────
// We build the entire widget programmatically so this file is the single source
// of truth — no separate HTML snippet to keep in sync.

document.body.insertAdjacentHTML("beforeend", `
<!-- Trigger button -->
<button id="wc-trigger">
<span class="wc-dot"></span>ask claude
</button>
<!-- Backdrop (click to close) -->
<div id="wc-backdrop"></div>

<!-- Query panel -->
<div id="wc-panel" role="dialog" aria-label="Ask Claude about this wiki">
  <div id="wc-header">
    <h2>// wiki query${STUB_MODE ? ' <span id="wc-stub-badge">[stub]</span>' : ''}</h2>
    <button id="wc-close" aria-label="Close">✕</button>
  </div>
  <div id="wc-context-bar">
    <span id="wc-context-label">context: <span id="wc-page-title">this page</span></span>
  </div>
  <div id="wc-messages"></div>
  <div id="wc-input-area">
    <textarea id="wc-input" rows="1" placeholder="ask about this page…" aria-label="Your question"></textarea>
    <button id="wc-send">send ↵</button>
  </div>
</div>

<!-- Password modal -->
<div id="wc-auth-modal" role="dialog" aria-label="Authentication required">
  <div id="wc-auth-box">
    <h3>// access required</h3>
    <p>Enter the wiki key to enable Claude queries.</p>
    <input id="wc-password-input" type="password" placeholder="wiki key" autocomplete="off" />
    <button id="wc-auth-submit">unlock →</button>
    <div id="wc-auth-error"></div>
  </div>
</div>
`);

// ─── State ─────────────────────────────────────────────────────────────────
let isLoading = false;

// ─── Element Refs ──────────────────────────────────────────────────────────
const trigger     = document.getElementById("wc-trigger");
const backdrop    = document.getElementById("wc-backdrop");
const panel       = document.getElementById("wc-panel");
const closeBtn    = document.getElementById("wc-close");
const messages    = document.getElementById("wc-messages");
const input       = document.getElementById("wc-input");
const sendBtn     = document.getElementById("wc-send");
const authModal   = document.getElementById("wc-auth-modal");
const passwordIn  = document.getElementById("wc-password-input");
const authSubmit  = document.getElementById("wc-auth-submit");
const authError   = document.getElementById("wc-auth-error");
const pageTitle   = document.getElementById("wc-page-title");

// ─── Context Extraction ────────────────────────────────────────────────────
// STRATEGY: We grab the page's main content at query time, not on load.
// This means if the user navigated via JS (SPA-style), we always get current content.
// Adjust the selector to match your wiki's main content container.
function getPageContext() {
const candidates = [
document.querySelector("main"),
document.querySelector("article"),
document.querySelector(".content"),
document.querySelector(".markdown-body"),
document.querySelector("#content"),
document.body
];
const el = candidates.find(Boolean);
// Grab text, collapse whitespace, trim to ~3000 chars to stay within
// a reasonable context window without wasting tokens on boilerplate.
const raw = el?.innerText || "";
return raw.replace(/\s+/g, " ").trim().slice(0, 3000);
}

function getPageTitle() {
return document.title || document.querySelector("h1")?.textContent || "this page";
}

// Update the context pill when panel opens
function refreshContextBar() {
pageTitle.textContent = getPageTitle();
}

// ─── Password Handling ─────────────────────────────────────────────────────
// TACTIC: We store in sessionStorage so the user authenticates once per browser
// session. Replace with localStorage if you want it to persist across sessions.
// We never send the password to any third party — only to your Railway endpoint.

function getStoredKey() {
return sessionStorage.getItem(STORAGE_KEY);
}

function setStoredKey(key) {
sessionStorage.setItem(STORAGE_KEY, key);
}

function clearStoredKey() {
sessionStorage.removeItem(STORAGE_KEY);
}

function openAuthModal() {
passwordIn.value = "";
authError.textContent = "";
authModal.classList.add("wc-open");
setTimeout(() => passwordIn.focus(), 50);
}

function closeAuthModal() {
authModal.classList.remove("wc-open");
}

// ─── Panel Open / Close ────────────────────────────────────────────────────
function openPanel() {
refreshContextBar();
backdrop.classList.add("wc-open");
panel.classList.add("wc-open");
setTimeout(() => input.focus(), 300);
}

function closePanel() {
backdrop.classList.remove("wc-open");
panel.classList.remove("wc-open");
}

trigger.addEventListener("click", () => {
if (!getStoredKey()) {
openAuthModal();
} else {
openPanel();
}
});

backdrop.addEventListener("click", closePanel);
closeBtn.addEventListener("click", closePanel);

// Keyboard: Escape closes, Enter submits password
document.addEventListener("keydown", (e) => {
if (e.key === "Escape") {
closePanel();
closeAuthModal();
}
});

// ─── Stub Transport ────────────────────────────────────────────────────────
// STRATEGY: stub mode lets the entire UI be developed and tested with no
// backend. It mirrors the real transport contract exactly — same inputs,
// same output shape — so swapping to the real endpoint requires zero
// changes to the calling code. The artificial delay makes the thinking
// indicator visible so you can confirm that part of the UX works too.

async function stubFetch(query, context) {
await new Promise(r => setTimeout(r, 800));   // simulate latency
const preview = context ? context.slice(0, 120).trim() + "…" : "(no context captured)";
return {
answer: `**[stub mode]** You asked:\n\n> ${query}\n\nPage context received (first 120 chars):\n\`\`\`\n${preview}\n\`\`\`\n\nWire up the Railway endpoint to get real answers.`
};
}

// ─── Auth Flow ─────────────────────────────────────────────────────────────
// STRATEGY: In stub mode, we accept STUB_PASSWORD client-side. This is fine
// because there's nothing to protect yet — it just exercises the auth UX.
// In live mode, validation happens server-side via a ping request; the
// correct password never appears in client code.

async function attemptAuth() {
const key = passwordIn.value.trim();
if (!key) return;
authSubmit.textContent = "checking…";
authSubmit.disabled = true;
authError.textContent = "";

try {
  if (STUB_MODE) {
    // Stub: accept STUB_PASSWORD, reject everything else
    await new Promise(r => setTimeout(r, 400));   // simulate round-trip
    if (key !== STUB_PASSWORD) {
      authError.textContent = `incorrect key — stub password is "${STUB_PASSWORD}"`;
      passwordIn.value = "";
      passwordIn.focus();
      return;
    }
  } else {
    // Live: validate server-side via a cheap ping request
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Wiki-Key": key },
      body: JSON.stringify({ query: "ping", context: "" })
    });
    if (res.status === 401) {
      authError.textContent = "incorrect key — try again";
      passwordIn.value = "";
      passwordIn.focus();
      return;
    }
  }
  setStoredKey(key);
  closeAuthModal();
  openPanel();
} catch {
  authError.textContent = "could not reach the query service";
} finally {
  authSubmit.textContent = "unlock →";
  authSubmit.disabled = false;
}
}

authSubmit.addEventListener("click", attemptAuth);
passwordIn.addEventListener("keydown", (e) => {
if (e.key === "Enter") attemptAuth();
});

// ─── Message Rendering ─────────────────────────────────────────────────────
// TACTIC: We do a minimal markdown-to-HTML pass for the response.
// Full libraries like marked.js are overkill here; just handle code fences
// and inline code since LLM responses often contain those.

function escapeHtml(str) {
return str
.replace(/&/g, "&amp;")
.replace(/</g, "&lt;")
.replace(/>/g, "&gt;");
}

function simpleMarkdown(text) {
// Code fences (`...`)
text = text.replace(/`(\w*)\n?([\s\S]*?)`/g, (_, lang, code) => {
return `<pre><code>${escapeHtml(code.trim())}</code></pre>`;
});
// Inline code
text = text.replace(/`([^`]+)`/g, (_, code) => { return `<code>${escapeHtml(code)}</code>`;
});
// Newlines to <br> (outside pre tags)
text = text.replace(/\n/g, "<br>");
return text;
}

function addMessage(role, text) {
const div = document.createElement("div");
div.className = `wc-msg wc-msg-${role}`;
div.innerHTML = `<div class="wc-msg-label">${role === "user" ? "you" : "claude"}</div> <div class="wc-msg-body">${role === "assistant" ? simpleMarkdown(text) : escapeHtml(text)}</div>`;
messages.appendChild(div);
messages.scrollTop = messages.scrollHeight;
return div;
}

function addThinking() {
const div = document.createElement("div");
div.className = "wc-msg wc-msg-assistant";
div.innerHTML = `<div class="wc-msg-label">claude</div> <div class="wc-thinking"><span></span><span></span><span></span></div>`;
messages.appendChild(div);
messages.scrollTop = messages.scrollHeight;
return div;
}

// ─── Query Submission ──────────────────────────────────────────────────────
// STRATEGY: We capture context at submit time (not panel-open time) in case
// the user was reading before asking. We also handle a 401 mid-session by
// clearing the stored key and prompting re-auth — this covers the case where
// the admin rotates the password while someone's session is open.

async function submitQuery() {
const query = input.value.trim();
if (!query || isLoading) return;
const key = getStoredKey();
if (!key) { openAuthModal(); return; }

isLoading = true;
sendBtn.disabled = true;
input.disabled = true;
input.value = "";
input.style.height = "auto";

addMessage("user", query);
const thinkingEl = addThinking();

try {
  // In stub mode: echo locally. In live mode: call Railway service.
  const data = STUB_MODE
    ? await stubFetch(query, getPageContext())
    : await (async () => {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Wiki-Key": key
          },
          body: JSON.stringify({ query, context: getPageContext() })
        });
        // Handle session expiry / password rotation
        if (res.status === 401) {
          clearStoredKey();
          thinkingEl.remove();
          addMessage("assistant", "Session expired — please re-enter the wiki key.");
          openAuthModal();
          return null;
        }
        return res.json();
      })();

  if (!data) return;   // early exit on 401 handled above
  thinkingEl.remove();
  addMessage("assistant", data.answer || "No response received.");

} catch {
  thinkingEl.remove();
  addMessage("assistant", "Could not reach the query service. Check your connection.");
} finally {
  isLoading = false;
  sendBtn.disabled = false;
  input.disabled = false;
  input.focus();
}
}

sendBtn.addEventListener("click", submitQuery);
input.addEventListener("keydown", (e) => {
// Enter submits; Shift+Enter allows newlines
if (e.key === "Enter" && !e.shiftKey) {
e.preventDefault();
submitQuery();
}
});

// Auto-resize textarea as user types
input.addEventListener("input", () => {
input.style.height = "auto";
input.style.height = Math.min(input.scrollHeight, 120) + "px";
});

// ─── Public API ───────────────────────────────────────────────────────────
// Expose a minimal API on window so you can, e.g., open the panel
// programmatically from a keyboard shortcut or search hotkey in your wiki.
window.WikiClaude = { open: openPanel, close: closePanel };

})();