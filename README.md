# LLM Wiki

A personal knowledge base maintained by Claude Code (or any LLM agent), viewed
in Obsidian. Based on [Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

## The idea in a few sentences

As teachers and scholars it's rarely ideas and sources that are in short supply; it's bandwidth (space x time) to maintain simultaneously a synoptic overview, a roster of connections, and an eye for details.  LLM-wiki incrementally **builds and maintains a wiki** — a persistent,
interlinked collection of files that gets richer with every source you add and every question you ask.

## Prerequisites

[Markdown](https://www.markdownguide.org/getting-started/) is a lightweight markup language used to create formatted text using a plain-text editor. Headings, for example, are just lines that start with one or more #'s. AI likes markdown because it is easy to digest and it is system agnostic.

Although you can edit markdown (.md) in any text editor, there are platforms that make life a lot easier. The one I use and describe here is called [Obsidian](https://obsidian.md/).  It has a robust free version and it has a very powerful "[web clipper](https://obsidian.md/clipper)" tool that you can add to a browser to easily save web site content.

This setup assumes you are using either Claude Cowork or Claude Code.  But other LLM services that can be given access to edit files on your machine could be used.

This setup contains two components. The folder structure and instruction (for Claude) are in LLM-wiki.zip. A companion web-viewer for your wiki is in HTML-wiki.zip. HTML-wiki is optional. You can omit it and just use Obsidian to view your wiki.
## How to use this

### Initial Setup
1. Choose a folder/directory where you want to work on a project. I'll refer to this as myProject/.
2. Download both zip files into myProject/. Unzip both files. You should now have
   `myProject/`
     `LLM-wiki/`
	     `raw/`
	     `wiki/`
	     `CLAUDE.md`
	     `instructions.md`
	     `project-particulars.md`
	     `README.md`
     `HTML-wiki/`
	     `config.js`
	     `index.html`
	     `site.css`
	     `site.js`
3. Open this folder in Obsidian (File → Open Vault → LLM-wiki/).
4. Install the Dataview plugin in Obsidian for dynamic tables.
5. Install the [Obsidian Web Clipper](https://obsidian.md/clipper) as a browser extension.
6. Move the files in `HTML-wiki/` into `LLM-wiki/`. You can then delete the empty `HTML-wiki/`.
7. Open Claude Code (or Claude Cowork) pointed at this directory. NOTE: it is not unusual to have to negotiate with Claude about this directory. It often does not see the files even though you think you told it exactly what folder it has access to. A few moments of patient trial and error will see you through.

## Customization

1. Open the file project-particulars.md.  This is where you name and describe the project you are working on.  It could be a particular course, a curriculum, a grant, a research project, a learning project, or even just a giant, ego-centric "everything I know" project.  The document contains several sections which you fill out in long form text.
	- Project name: Name-that-will-appear-on-the-wiki
	- Substantive focus: Briefly, what is the topic of this project?
	- This wiki is about: An extended description of the topic.
	- The goal: Explicit statement about why you are doing this. What is this wiki helping you accomplish in the long run?
	- Audience calibration: How do you want the language and level of the wiki to be pitched? Things like "I am a published expert in this field, very familiar with the literature. Write the wiki for someone like me."
	- Domain tags to use: Are there sub-topic tags you can suggest a priori? Maybe you are working on an interdisciplinary project and you want to tag things by discipline so these might be "sociology," "philosophy," "political science," "anthropology," "lit crit."

### Daily workflow
1. **Add sources**: drop markdown files (articles, notes, transcripts) into
   `raw/`. Use the Obsidian Web Clipper extension to clip web articles to
   markdown.
2. **Ingest**: tell Claude Code: `ingest raw/my-article.md`
3. **Query**: ask Claude Code questions. Good answers get filed as query pages.
4. **Browse**: use Obsidian's graph view to explore connections. The graph is
   your map.
5. **Lint**: periodically say `lint the wiki` to health-check for orphans,
   contradictions, gaps.

### The schema
`CLAUDE.md` is the instruction file that makes Claude a disciplined wiki
maintainer rather than a generic chatbot. Read it to understand what Claude
will do. Edit it to change conventions.

## Directory structure

```
llm-wiki/
├── CLAUDE.md           ← schema (read this)
├── README.md           ← this file
├── raw/                ← your sources (immutable)
│   └── assets/         ← images, PDFs
└── wiki/               ← LLM-maintained output
    ├── index.md        ← master catalog
    ├── log.md          ← operation history
    ├── overview.md     ← top-level synthesis
    ├── concepts/       ← idea/theory pages
    ├── entities/       ← people, orgs, tools
    ├── sources/        ← one page per raw source
    ├── queries/        ← saved question/answer pages
    └── overviews/      ← domain synthesis pages
```

## Git

This is a git repo. NOTE that that does not mean it is on GitHub.  You get version history, diffs on every wiki edit, and the ability to branch for experimental analyses. Commit after major ingests.

```bash
git init          # if not already initialized
git add -A
git commit -m "ingest: my-article"
```
