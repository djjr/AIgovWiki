#!/usr/bin/env python3
"""
Concatenates wiki definitions, findings, queries, and overviews into
wiki/wiki-export.md for use as Claude query context.
Run after each wiki run: python3 generate-wiki-export.py
Sources are excluded — synthesized content only.
"""

import os
import glob
from datetime import date

WIKI_ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "wiki")
INCLUDE_DIRS = ["definitions", "findings", "queries", "overviews", "entities"]
OUTPUT = os.path.join(WIKI_ROOT, "wiki-export.md")


def collect_pages():
    pages = []
    for dir_name in INCLUDE_DIRS:
        pattern = os.path.join(WIKI_ROOT, dir_name, "*.md")
        pages.extend(sorted(glob.glob(pattern)))
    return pages


def main():
    pages = collect_pages()
    chunks = [
        "# AI Governance Wiki — Query Context Export",
        f"Generated: {date.today().isoformat()} | Pages: {len(pages)}",
        "Includes: definitions, findings, queries, overviews. Excludes: sources.",
        "",
    ]
    for path in pages:
        with open(path, encoding="utf-8") as f:
            content = f.read().strip()
        rel = os.path.relpath(path, os.path.dirname(WIKI_ROOT))
        chunks.append(f"\n---\n## {rel}\n\n{content}")

    with open(OUTPUT, "w", encoding="utf-8") as f:
        f.write("\n".join(chunks))

    size_kb = os.path.getsize(OUTPUT) // 1024
    print(f"Exported {len(pages)} pages → wiki/wiki-export.md ({size_kb} KB)")


if __name__ == "__main__":
    main()
