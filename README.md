# Twenty ☉ Turns

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

A web-based patch editor for the Alesis Micron synthesizer that runs entirely in your web browser.
No installation required, just connect your Micron via MIDI and start tweaking.

## About

In 2006, I purchased my first synthesizer: an [Alesis Micron](https://www.vintagesynth.com/alesis/micron).
It was a VA synth capable of incredible sounds, but hard to program with just one knob and a two-line LCD screen.
I eventually sold it.

I still remember [Dorian Concept fooling around](https://youtu.be/F8Kiw4aoex4?si=HN-RveyEi50mVB9b).

Twenty years later, I bought it again.
Let's expand the interface!

## Dev Requirements

- [Node.js runtime](https://nodejs.org)
- [pnpm package manager](https://pnpm.io)

## Setup

### Install Node.js 24.12.0


Using a version manager like [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install && nvm use
```

Or install it [manually](https://nodejs.org/en/download).

### Install pnpm

On macOS using [Homebrew](https://brew.sh):

```bash
brew install pnpm
```

Or install it [using a standalone script or other package managers](https://pnpm.io/installation).

### Install Dependencies

```bash
pnpm install
```

## Development

```bash
# Start development server.
pnpm dev

# Build for production.
pnpm build

# Preview production build.
pnpm preview

# Run linter/formatter with auto-fix.
pnpm fix
```
