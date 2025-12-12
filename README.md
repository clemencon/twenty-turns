# Twenty ☉ Turns

A web-based **patch editor** for the **Alesis Micron** synthesizer.

## About

In 2006, I purchased my first synthesizer: an [Alesis Micron](https://www.vintagesynth.com/alesis/micron).
I still remember [Dorian Concept fooling around](https://youtu.be/F8Kiw4aoex4?si=HN-RveyEi50mVB9b).
It was a VA synth capable of beautiful sounds, but hard to program...
I eventually sold it.

I bought it again.
Let's expand the interface!

## Requirements

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

## Reference documentation

- [Reference manual](docs/reference-manual.pdf)
- [Service manual](docs/service-manual.pdf)
