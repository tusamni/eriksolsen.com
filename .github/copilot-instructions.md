<!--
Short, actionable instructions for AI coding agents working on this repo.
Keep this file ~20-50 lines and only include discoverable, project-specific guidance.
-->
# Copilot instructions — eriksolsen.com

- Project type: Astro (Static / serverless pages) with Netlify adapter. See `astro.config.mjs` and `package.json`.
- Language: TypeScript + Astro components (.astro). Path aliases are defined in `tsconfig.json` (use `@/` prefixes).

- Key directories:
  - `src/library` — server-side helpers; `cosmic.ts` wraps Cosmic JS (CMS). Use this for fetching/creating objects.
  - `src/actions` — Astro server actions (form handling, MailerSend integration). Example: `contact` action in `src/actions/index.ts`.
  - `src/layouts` and `src/components` — UI patterns and slots. Prefer reusing `BaseLayout.astro` and content components.
  - `public/images` and `src/assets/fonts` — static assets; `astro.config.mjs` registers local fonts.

- Build / dev commands (from `package.json`):
  - dev: `npm run dev` (runs `astro dev --host`)
  - build: `npm run build` (runs `astro build`)
  - preview: `npm run preview` (runs `astro preview`)

- Environment and secrets:
  - Uses environment variables via `import.meta.env` (see `src/library/cosmic.ts` and `src/actions/index.ts`). Important vars: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`, `MAILERSEND_TOKEN`.

- Conventions and patterns to follow when editing code:
  - Use TypeScript imports with aliases (e.g., `import { siteConfig } from "@/config"`). Check `tsconfig.json` for alias targets.
  - Server-side data fetches are often performed inside page-level `---` frontmatter using `cosmic` client (see `src/pages/index.astro`). Keep fetches minimal and use `.props()` to limit fields.
  - UI components accept props and use named slots; prefer existing content components (`Container`, `Heading`, `Section`) over ad-hoc markup.
  - Forms use `astro:actions` pattern. Look at `ContactForm.astro` + `src/actions/index.ts` for validation/anti-spam (hidden `zip` field) and MailerSend usage.

- Integration notes / gotchas:
  - The site relies on the Cosmic headless CMS for content and Netlify adapter for deployment. Changes that affect content schema should be coordinated with the CMS data model.
  - Image handling uses a local `imageConfig` (`src/config.ts`) and a remote CDN `media.eriksolsen.com`. Respect size presets in `imageConfig.imageSizes` when adding image URLs.
  - Analytics and third-party scripts are loaded in `BaseLayout.astro` (Partytown + external GTM). Avoid duplicating analytics snippets.

- Examples to reference when implementing features:
  - Fetch page content: look at `src/pages/index.astro` — uses `cosmic.objects.findOne(...).props("metadata")`.
  - Insert a lead: `src/actions/index.ts` — inserts `type: "leads"` and then sends MailerSend emails.
  - Date normalization: `src/library/cosmic.ts#getCosmicDate` returns an ISO date string adjusted for timezone.

- When in doubt:
  - Preserve existing component APIs and layout slots. Small visual changes are fine; big refactors need tests or manual preview (run `npm run dev`).
  - Do not commit secrets or change env var names without the owner’s confirmation.

If anything here is unclear or you want more examples (routing, image components, or the CMS schema), tell me which area to expand and I'll update this file.
