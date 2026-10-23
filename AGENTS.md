# CLAUDE.md

## Project

A web-based patch editor for the Alesis Micron synthesizer.
It is at the scaffold stage: `index.html` loads `src/main.ts`, and there is no app code yet.
Vanilla TypeScript with Vite, no UI framework.

## Commands

Node 24.12.0

```bash
pnpm install
pnpm dev       # Vite dev server
pnpm build     # biome check && tsc && vite build (lint and typecheck gate the build)
pnpm preview   # serve the production build
pnpm fix       # biome check --write . (lint and format with auto-fix)
```

Vitest is installed, but there is no `test` script or config yet.
Run tests with `pnpm vitest run`, or a single file with `pnpm vitest run path/to/file.test.ts`.

## Tooling conventions

- `vite` is aliased to `rolldown-vite` through a pnpm override. Keep the override and the devDependency in sync.
- Biome runs with its defaults (no `biome.json`), so it formats with tabs. Biome replaces ESLint and Prettier; don't add those.
- `tsconfig.json` is very strict: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noPropertyAccessFromIndexSignature`, `verbatimModuleSyntax` (use `import type`), and `erasableSyntaxOnly` (no enums, namespaces, or parameter properties).
- `pnpm-workspace.yaml` pins exact versions on add (`savePrefix: ''`) and refuses package versions less than 3 days old (`minimumReleaseAge`). A very new release will fail to install, and that is intended.

## Domain reference (`docs/`)

- `docs/nrpn.csv` lists every Micron parameter that can be controlled over MIDI NRPN. Columns: category, parameter, three NRPN numbers `x/y/z` (offset by 256, e.g. `0/256/512`), and min/max values. For signed parameters, the "via MIDI-OX" columns show the 14-bit wire encoding: a negative value `v` is sent as `16384 + v` (so -1 is 16383), and positive values are sent as-is. The `Controllers` rows at the end have no NRPN number.
- `docs/nrpn-wiki-page.md` Wikipedia page with info about NRPN messages.
