# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

apt-get-sudo.com — technical portfolio for Michael Galde. Sibling site to michaelgalde.com. Audience: security researchers, CTF players, developers. Dark-default aesthetic with terminal DNA.

Deployed to GitHub Pages at `apt-get-sudo.com`. The professional/academic site lives at `/home/professor/michaelgalde/` and is the source of truth for the shared design system.

## Tech stack

Pure HTML/CSS/JS. No build step, no framework, no bundler. Edit files and they're live after push.

- `index.html` — single-page site, all sections
- `css/style.css` — all styles
- `js/main.js` — theme toggle, mobile nav, smooth scroll
- `images/` — static assets (no headshot; tools/research portfolio)

## Design system

Inherits from michaelgalde.com with these differences:

- **Dark mode is the default.** JS (`js/main.js`) defaults to dark unless OS is explicitly light or user has saved a preference (`localStorage` key: `ags-theme`). The michaelgalde.com key is `mg-theme` — they are intentionally separate.
- **Gradient:** Steel blue `#3B6FD4` → violet `#6B48C8` (light); bright blue `#6B9FFF` → bright violet `#A87BFF` (dark). Same CSS custom property names as michaelgalde.com.
- **Monospace font:** JetBrains Mono loaded via Google Fonts. Referenced via `--mono` CSS custom property. Used for: nav logo, tech stack tags (`.tech-tag`), hero prompt block, terminal block, `.section-label-mono`, `.hero-roles`.
- **Terminal aesthetic elements:** blinking cursor (`.blink-cursor::after`), grid texture overlay on hero and writeups sections, terminal block in writeups section, `$ prompt` in nav logo and hero.

## Key CSS patterns

- `.tech-tag` — monospace badge for stack labels; use inside `.tech-tags` wrapper
- `.section-label-mono` — monospace section label; replaces `.section-label` where terminal tone is appropriate
- `.blink-cursor` — add to any element to get a blinking `_` cursor after it
- `.terminal-block` — full terminal window component (titlebar + body); used in writeups
- `.hero-prompt` — `$ whoami` style inline prompt badge in hero

## GitHub repo links to verify

The tool cards link to assumed repo URLs — verify and correct before publishing:
- HexCheck → `github.com/mgalde/HexCheck`
- PCAPMap → `github.com/mgalde/PCAPMap`
- Bee Knees → `github.com/mgalde/bee-knees`
- DropTap → `github.com/mgalde/DropTap`

## When adding writeups

The writeups section is a static placeholder. When real content exists, replace the `.terminal-block` with a grid of writeup cards. A reasonable card pattern: title, date tag, category tag (CTF / research / tools), one-line description, read link.

## Image optimization

Use ImageMagick if adding images: `magick input.jpg -resize 900x1100\> -quality 82 output.jpg`
