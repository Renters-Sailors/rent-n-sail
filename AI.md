# AI usage docs

## 2026-10-31 — Fetch Git LFS images for frontend deployments

- AI assistance: Junie (gpt-6-luna) enabled Git LFS checkout in the frontend deployment workflow so optimized image files are available to the build instead of being deployed as pointer files. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Fix rental discovery frontend CI and lint failures

- AI assistance: Junie (gpt-6-luna) removed obsolete backend/form behavior from the root app, updated the existing app test to verify the default rental route, formatted `app.html`, and made `FormatRangePipe` implement `PipeTransform` to pass the frontend quality gates. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Ignore JPGs and use Git LFS for other raster images

- AI assistance: Junie (gpt-6-luna) added a `.jpg` ignore rule and configured common non-JPG raster image formats for Git LFS. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Start full-width rental blur at heading

- AI assistance: Junie (gpt-6-luna) removed the fixed blur breakpoint and anchored the full-width rental-card blur overlay to each card's heading, with a full-card fallback for browsers without anchor positioning. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Make rental image preconnect deployment-independent

- AI assistance: Junie (gpt-6-luna) replaced the hard-coded rental image preconnect host with a root-relative URL that resolves to the current deployment origin. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Prioritize first three rental images

- AI assistance: Junie (gpt-6-luna) limited high-priority loading to the first three rental images and added a preconnect hint for `https://frontend.localhost`. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Use fill mode for cropped rental images

- AI assistance: Junie (gpt-6-luna) switched rental card images to `NgOptimizedImage` fill mode so their intentional `object-fit: cover` crops do not trigger aspect-ratio mismatch warnings. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Format rental capacity ranges with Intl

- AI assistance: Junie (gpt-6-luna) added a standalone `FormatRangePipe` that uses `Intl.NumberFormat.formatRange()` for locale-aware rental capacity ranges. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Pluralize rental capacity with Angular

- AI assistance: Junie (gpt-6-luna) converted mock passenger capacities to numeric ranges and used Angular's `I18nPluralPipe` to select the singular or plural passenger label. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Enlarge rental capacity text

- AI assistance: Junie (gpt-6-luna) reverted the black text with white outline on the rental capacity label to white text and increased its font size to 1.25rem. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Add white outline to rental capacity

- AI assistance: Junie (gpt-6-luna) styled the rental capacity label with black text and a white outline. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Move rental capacity below description

- AI assistance: Junie (gpt-6-luna) moved each rental's passenger capacity icon and label to the bottom-left details area beneath its description. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Show rental passenger capacity

- AI assistance: Junie (gpt-6-luna) added mock passenger capacity to each rental listing and displayed it beside the Material Symbols people icon above pricing. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Balance rental descriptions

- AI assistance: Junie (gpt-6-luna) applied balanced text wrapping to rental descriptions so paragraphs distribute more evenly across lines. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Fix rental image and card sizing

- AI assistance: Junie (gpt-6-luna) constrained the routed page and rental card grid to the available area below navigation so images with different intrinsic dimensions consistently fill each card. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Size rental articles below navigation

- AI assistance: Junie (gpt-6-luna) sized the app shell to the viewport and made rental articles fill the remaining space below the navigation. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Scope rental scroll snapping to discover page

- AI assistance: Junie (gpt-6-luna) removed document-wide scroll snapping and made the discovery section the local vertical snap scroller, keeping navigation scrolling independent. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Restore rental page scroll snapping

- AI assistance: Junie (gpt-6-luna) moved vertical scroll snapping to the document viewport, the active page scroller, while preserving snap alignment on rental cards. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Remove full-day duration note

- AI assistance: Junie (gpt-6-luna) removed the full-day duration note from rental booking panels. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Wrap rental details and pricing with flexbox

- AI assistance: Junie (gpt-6-luna) grouped each rental card's text and pricing under a wrapping flex parent, replacing breakpoint-specific stacking with intrinsic flex wrapping. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Remove dividers between rental prices

- AI assistance: Junie (gpt-6-luna) removed the divider lines between the rental pricing rows. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Right-align rental pricing

- AI assistance: Junie (gpt-6-luna) aligned the rental pricing text to the right within each pricing row. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Style rental pricing with orange text and purple outline

- AI assistance: Junie (gpt-6-luna) styled the rental pricing labels and amounts with orange text and a purple outline. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Remove rental pricing panel container

- AI assistance: Junie (gpt-6-luna) removed the rental pricing panel's background container styling and moved the full-day duration note below the booking button. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Use Google Sans Flex for rental page text

- AI assistance: Junie (gpt-6-luna) loaded Google Sans Flex in the app document and applied it as the rental discovery page's base font, preserving the existing heading and description fonts while avoiding Angular's inline-font budget. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Set full-day rental discount to 50%

- AI assistance: Junie (gpt-6-luna) changed the full-day rental discount from 90% to 50% and updated the displayed total accordingly. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Add rental pricing and booking buttons

- AI assistance: Junie (gpt-6-luna) added per-item mock hourly rates, discounted two-hour and eight-hour-day totals, and a styled booking button to rental cards. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Explain rental image blur mask

- AI assistance: Junie (gpt-6-luna) explained that the rental image `mask-image` fades the `backdrop-filter` blur from the 70% breakpoint to the bottom, while the background gradient independently fades the tint. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Confirm backdrop-filter for rental image blur

- AI assistance: Junie (gpt-6-luna) confirmed the rental image overlay already uses `backdrop-filter` to blur the image behind it, and recommended keeping it for this effect. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Restore full-image rental blur

- AI assistance: Junie (gpt-6-luna) moved the fading backdrop blur and gradient from the listing text container back across each rental image. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Extract rental blur breakpoint into an SCSS variable

- AI assistance: Junie (gpt-6-luna) replaced the repeated 70% blur-gradient breakpoint in the rental discovery stylesheet with an SCSS variable. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Nest rental discovery styles

- AI assistance: Junie (gpt-6-luna) converted the rental discovery page stylesheet to native CSS nesting without changing its styles. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Confine rental blur to listing text

- AI assistance: Junie (gpt-6-luna) confined the fading backdrop blur and gradient to the rental listing text container instead of applying it across the full image. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Add a fading blur and gradient to rental images

- AI assistance: Junie (gpt-6-luna) added a bottom-fading backdrop blur and 30% black gradient to rental images, beginning at 70% from the top. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Add a black outline to rental descriptions

- AI assistance: Junie (gpt-6-luna) added a black text outline to rental listing descriptions. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Apply Gabriela to rental descriptions

- AI assistance: Junie (gpt-6-luna) loaded the Gabriela Google Font and applied its regular style to rental listing descriptions. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Add white outlines to rental headings

- AI assistance: Junie (gpt-6-luna) styled rental listing headings with black text and a white outline. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Set rental headings to 60% image width

- AI assistance: Junie (gpt-6-luna) set rental listing `h2` headings to 60% of the image width. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Apply Londrina Sketch to rental headings

- AI assistance: Junie (gpt-6-luna) loaded the Londrina Sketch Google Font and applied it to rental listing `h2` headings. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Snap rental articles while scrolling

- AI assistance: Junie (gpt-6-luna) made the rental listing section a vertical scroll-snap container and aligned each article to its start edge. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Overlay rental listing text on images

- AI assistance: Junie (gpt-6-luna) changed each rental article to a grid and positioned its grouped heading and description at the image's bottom-left corner. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Set rental images to viewport height

- AI assistance: Junie (gpt-6-luna) set discovery-page rental images to `100svh` height and `100%` width. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Rotate the fishing boat image

- AI assistance: Junie (gpt-6-luna) rotated the fishing boat JPEG 90 degrees clockwise, regenerated its responsive AVIF/WebP variants, and updated its catalog dimensions. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Configure a local rental image loader

- AI assistance: Junie (gpt-6-luna) configured `NgOptimizedImage` with a custom loader for the existing responsive WebP rental images, replacing the template-built AVIF/WebP `srcset` markup. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Optimize rental catalog images

- AI assistance: Junie (gpt-6-luna) converted each rental image into responsive AVIF and WebP variants, retained the JPEG originals as fallbacks, and updated `DiscoverRentalPageComponent` to use `NgOptimizedImage`. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Update mock water equipment catalog

- AI assistance: Junie (gpt-6-luna) removed the wetsuit listing and added kite surfing and jet boarding listings to `DiscoverRentalPageComponent`. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Render rental equipment listings

- AI assistance: Junie (gpt-6-luna) updated `DiscoverRentalPageComponent` to render each mock equipment entry as an article with its name and description. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Expand mock water equipment catalog

- AI assistance: Junie (gpt-6-luna) added mock listings for a pontoon boat, fishing boat, windsurfing board, wakeboard, water skis, towable tube, snorkeling set, and wetsuit to `DiscoverRentalPageComponent`. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Add mock water equipment listings

- AI assistance: Junie (gpt-6-luna) added a mock array of commonly rented water equipment with brief descriptions to `DiscoverRentalPageComponent`. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Add the default rental discovery page

- AI assistance: Junie (gpt-6-luna) generated `DiscoverRentalPageComponent` with Angular CLI, routed the default URL to it, and placed a router outlet in the app template. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Trust the forwarded client IP header only in Angular dev mode

- AI assistance: Junie (gpt-6-luna) configured Angular's SSR engine to trust only `X-Forwarded-For` in dev mode, leaving all proxy headers untrusted in production, and prepared the change as the first layer in a `gh-stack` stack. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-31 — Select PR target SHA with GitHub `case()`

- AI assistance: Junie (gpt-6-luna) updated the component-changes action to use a multiline GitHub `case()` expression to select the pull request target branch SHA as `BEFORE` on opened and reopened events, preventing a nonempty event `before` value from omitting changes in the new PR. Other events keep their existing before/current SHA behavior; no Bash selection logic is used. Prepared as the second layer in the `gh-stack` stack. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-11-06 — Map rental equipment seed data

- AI assistance: OpenCode (GPT-6.1 Terra) mapped the supplied TypeScript rental equipment objects into SQL insert values. Attribution: `@Buzeqq` (Miłosz Chojnacki, verified with `gh api user`).

## 2026-11-06 — Explain monetary precision

- AI assistance: OpenCode (GPT-6.1 Terra) explained SQL numeric precision and scale for rental equipment prices and how to configure SQLAlchemy composite columns. Attribution: `@Buzeqq` (Miłosz Chojnacki, verified with `gh api user`).
- Follow-up: corrected the suggested dataclass metadata approach and explained explicit composite columns. Attribution: `@Buzeqq` (Miłosz Chojnacki, verified with `gh api user`).

## 2026-11-07 — Split migration generation from migration runs

- AI assistance: Claude Code (Claude Opus 5.5) reviewed the Alembic setup and explained how the backend can generate revisions into `database/scripts/versions` while the database deploy only runs them, without importing backend models. Attribution: `@ElectroluxV2` (verified with `gh api user`).
- Follow-up: implemented the split. `env.py` loads models only for `--autogenerate`, `../backend` is no longer on the database `sys.path`, `alembic` is a backend dev dependency, and `backend/README.md` documents generating and applying migrations. Verification: against an unreachable database, `upgrade head` from `database` and `revision --autogenerate` from `backend` both reach the connection step, while autogenerate from `database` fails to import `models` as intended. A full run against a live Postgres was not done. Attribution: `@ElectroluxV2` (verified with `gh api user`).

## 2026-11-06 — Map rental equipment seed data

- AI assistance: OpenCode (GPT-6.1 Terra) mapped the supplied TypeScript rental equipment objects into SQL insert values. Attribution: `@Buzeqq` (Miłosz Chojnacki, verified with `gh api user`).

## 2026-11-06 — Explain monetary precision

- AI assistance: OpenCode (GPT-6.1 Terra) explained SQL numeric precision and scale for rental equipment prices and how to configure SQLAlchemy composite columns. Attribution: `@Buzeqq` (Miłosz Chojnacki, verified with `gh api user`).
- Follow-up: corrected the suggested dataclass metadata approach and explained explicit composite columns. Attribution: `@Buzeqq` (Miłosz Chojnacki, verified with `gh api user`).

## 2026-10-28 — Delete previews of branches without an open pull request

- AI assistance: OpenCode (Claude Opus 5.5) made each component's `ensure` stage delete its provider's previews of Git branches that have no open pull request, keeping the run's own branch. This replaces a proposed 3-day expiry, which Vercel cannot express: its retention has no 3-day option and never deletes previews with an alias. The production run after a merge now removes the merged branch's previews. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
  - **Neon:** deletes other branches' `preview/<branch>` database branches and waits for each deletion, so a fork that follows doesn't hit a locked project (HTTP 423).
  - **Vercel:** deletes the pipeline's own preview aliases, including the frontend alias the backend reserves, and the preview deployments whose `githubCommitRef` names such a branch. Production, other aliases, and deployments without a `githubCommitRef` stay. The vendored SDK bundle gained `aliasesListAliases`, `aliasesDeleteAlias`, and `deploymentsDeleteDeployment` (+6 KB).
  - **Failures:** a failed cleanup only warns, so it never blocks a release; the next run retries it.
  - **Verification:** a throwaway mock of both providers and the real bundled SDK against a stubbed `fetch`; no tests were added, per project guidelines. Stack run `40751355386` then deleted the previews of the merged `cd` and of teammate PRs #16 and #17, which were closed without merging. That was 3 Neon branches, plus 3 aliases and 4 deployments in the backend and 3 aliases and 5 deployments in the frontend. It then forked this branch's previews, and the deleted aliases return `DEPLOYMENT_NOT_FOUND`. A re-run reused the previews and deleted nothing.

## 2026-10-29 — Explain executing an SQL script with asyncpg

- AI assistance: OpenCode (GPT-6.1 Terra) explained using SQLAlchemy's adapted connection to execute a multi-statement script with asyncpg rather than splitting on semicolons. Attribution: `@Buzeqq` (Miłosz Chojnacki, verified with `gh api user`).

## 2026-10-29 — Configure AuthTuna application role

- AI assistance: OpenCode (GPT-6.1 Terra) added an Alembic migration to grant an existing application login role access to AuthTuna and set its database-specific search path. The user selected an existing role identified by `APP_DATABASE_ROLE`; no credentials are created. Attribution: `@Buzeqq` (Miłosz Chojnacki, verified with `gh api user`).

## 2026-10-29 — Explain AuthTuna schema lookup

- AI assistance: OpenCode (GPT-6.1 Terra) inspected AuthTuna's engine setup and explained how to configure PostgreSQL's search path for its unqualified table names. Attribution: `@Buzeqq` (Miłosz Chojnacki, verified with `gh api user`).

## 2026-10-29 — Explain duplicate migration sequences

- AI assistance: OpenCode (GPT-6.1 Terra) identified that the AuthTuna SQL defines serial columns and then explicitly creates the same sequences again. Attribution: `@Buzeqq` (Miłosz Chojnacki, verified with `gh api user`).

## 2026-10-29 — Explain migration prepared-statement error

- AI assistance: OpenCode (GPT-6.1 Terra) inspected the Alembic migrations and identified that the AuthTuna SQL file contains multiple commands passed to a single asyncpg prepared statement. Also noted a schema mismatch that may surface after that is fixed. The error was not reproduced against a database. Attribution: `@Buzeqq` (Miłosz Chojnacki, verified with `gh api user`).

## 2026-10-28 — Benchmark: vendored SDK bundle vs. cached pnpm install

- AI assistance: OpenCode (Claude Opus 5.5) pulled the user's seven new `cd` commits by fast-forward, then benchmarked provider SDK loading on a throwaway branch, `sdk-install-benchmark`. Run `40654874805` used `ubuntu-26.04` with 5 samples per variant, and the results are posted as a PR #14 comment. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
  - **Variants:** the checked-in bundle; pnpm with an `actions/cache` store keyed on the action-owned lockfile; and `pnpm/setup` with `cache: true`, which needs a sparse checkout. Each ran cold and warm.
  - **Results:** the SDKs were ready in 0.41 s with the bundle, against 2.9–4.4 s for the pnpm variants. A miss also adds 1.2–1.6 s to save the cache. Warm runs were slower than cold ones, because restoring the ~8 MB store (1.6 s) took longer than installing the 3 packages from npm (0.76 s).
  - **Cleanup:** deleted the throwaway branch, its worktree, and the 15 caches the benchmark created.

## 2026-10-27 — Canonicalize frontend host for WebAuthn

- AI assistance: Junie (gpt-6-luna) traced the RP ID mismatch to the production frontend being reachable through `rent-n-sail-frontend-eu.vercel.app` while passkey options use `rent-n-sail.vercel.app`. The SSR server now redirects alternate hosts to the configured `FRONTEND_URL` (or `PORTLESS_URL` locally), keeping browser origins aligned with the backend's WebAuthn RP ID and origin. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Live verification confirmed both aliases returned `rpId: rent-n-sail.vercel.app`; only `rent-n-sail.vercel.app` matches that RP ID. No tests were added, per project guidelines.

## 2026-10-27 — Make preview deployments public and restore SSR backend requests

- AI assistance: Junie (gpt-6-luna) diagnosed the preview SSR failure and disabled Vercel Authentication on the `rent-n-sail` frontend and `rent-n-sail-backend` projects. It was the only configured preview protection; password and trusted-IP protections were already unset, and production protection was not changed. Verified anonymous preview requests return HTTP 200 and SSR renders `Backend says: World`. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-27 — Delete obsolete GitHub deployment objects

- AI assistance: Junie (gpt-6-luna) marked inactive and deleted 45 superseded deployment objects from the GitHub Deployments API, retaining the latest `database-preview`, `backend-preview`, and `frontend-preview` deployments for `9738e99`. Verified only those three objects remain. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-27 — Delete remaining `cd` branch workflow runs

- AI assistance: Junie (gpt-6-luna) deleted the two remaining completed GitHub Actions runs on PR #14's `cd` branch (backend and frontend validations at head `9738e99`). Confirmed the branch now has no workflow runs. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-27 — Clean PR workflow history and run standalone components

- AI assistance: Junie (gpt-6-luna) deleted the 18 completed GitHub Actions runs associated with PR #14's `cd` branch, preserved the active `database-preview`, `backend-preview`, and `frontend-preview` environments, and ran the standalone backend and frontend workflows against head `9738e99`. Both completed successfully. The database manual workflow is not registered on the repository's default branch and could not be dispatched; the stack workflow was intentionally not run. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-27 — Clarify component deployment environment names

- AI assistance: Junie (gpt-6-luna) renamed the component-specific GitHub deployment environments to `database-preview`/`database-production`, `backend-preview`/`backend-production`, and `frontend-preview`/`frontend-production`; deployment targets remain `preview`/`production`. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-27 — Separate GitHub deployment environments by component

- AI assistance: Junie (gpt-6-luna) changed the database, backend, and frontend reusable workflows to publish deployments into distinct GitHub Environments: `database-prev`/`database-prod`, `backend-prev`/`backend-prod`, and `frontend-prev`/`frontend-prod`. The existing `preview`/`production` deployment target passed to component provisioning remains unchanged. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-27 — Prepare European hosting resources

- AI assistance: Junie (gpt-6-luna) inspected the GitHub, Vercel, and Neon configuration; provisioned replacement Vercel projects (now `rent-n-sail-backend` and `rent-n-sail`) and Neon project `rent-n-sail-db-eu` in Frankfurt (`aws-eu-central-1`). Vercel’s Neon Marketplace integration was required because the only Neon organization is Vercel-managed. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- The replacement Neon project `rent-n-sail-db-eu` is in `aws-eu-central-1`; the replacement Vercel projects use `fra1` and are named `rent-n-sail` (frontend) and `rent-n-sail-backend`. GitHub references the replacement project IDs, production SSO protection is limited to previews, and local Vercel links were updated. The prior Neon resource and all three prior Vercel projects were removed after confirming the database had no application tables; `rent-n-sail.vercel.app` was reclaimed by the new frontend. Locked Alembic migrations and backend/frontend production workflows succeeded; public `/health`, `/boats`, and `/api/boats` returned HTTP 200 with the demo boat. `stack.yml` run `40576887885` exercised the database/backend stages successfully but stopped at frontend formatting; after the fix, run `40578138188` passed frontend lint, formatting, tests, build, and deployment while skipping unchanged database/backend components.

## 2026-10-27 — Unit-test the backend API URL interceptor

- AI assistance: Junie (gpt-6-luna) added unit coverage for `backendApiInterceptor`: prefixing a relative URL while retaining its query string, avoiding a duplicate `/api/` prefix, and passing a different-origin URL through unchanged. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-27 — Review: simplify the backend URL interceptor

- AI assistance: Junie (gpt-6-luna) replaced the scheme-matching regex and protocol-relative URL check with a URL origin comparison. Relative requests resolve against a placeholder origin and receive the `/api/` prefix; requests resolving to another origin pass through unchanged. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-27 — Review: route backend requests through an interceptor

- AI assistance: Junie (gpt-6-luna) implemented the passkey URL-routing suggestion and checked the SSR interceptor suggestion in the newly published PR #14 review comments. Passkey request paths no longer include `/api/` in the component; `backendApiInterceptor` adds the frontend API prefix. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- SSR URL rewriting stays in the final `FetchBackend`: moving it into the regular interceptor chain changes Angular's transfer-cache key from `/api/` to the backend origin, causing the browser to miss the SSR response and issue another request.
- Validation: frontend production build, ESLint, formatting, and SSR smoke check passed. SSR rendered the mock response after a direct `GET /` to the backend and serialized the transfer-cache URL as `/api/`.

## 2026-10-27 — Frontend forwards /api to the backend; no CORS; Strict cookies

- AI assistance: OpenCode (Claude Opus 5.5) moved the browser's API calls onto the frontend's origin at the user's request. Passkey registration had failed because SameSite=Lax cookies aren't sent between the separate `vercel.app` sites. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
  - **Forwarding:** the browser calls `/api/…` on the frontend, and `server.ts` forwards it to `BACKEND_URL` with Node's `http`/`https`. The backend origin and the path are joined, so requests stay on the backend's host. `ng serve` uses the same handler, so `proxy.conf.json` is gone.
  - **SSR:** a server-only `FetchBackend` subclass sends `/api/` requests straight to `BACKEND_URL`. They keep their relative URL until then, so the browser reuses SSR responses from the HTTP transfer cache. The backend URL no longer travels to the browser.
  - **Backend:** CORS, `CORS_ALLOWED_ORIGINS`, and `test_cors.py` are gone. Both session cookies are SameSite=Strict, Secure, and HttpOnly.
  - **Deployment settings:** the backend gets `DATABASE_URL`, `WEBAUTHN_ORIGIN`, and `WEBAUTHN_RP_ID`. The frontend keeps `BACKEND_URL` and `FRONTEND_URL`.
- Validation: backend ruff and tests passed, and so did frontend oxfmt, ESLint, the unit test, and the production build. Locally, both a production server and `ng serve` forwarded `/api/`:
  - **SSR:** it rendered the backend response for a page host that doesn't resolve, so it called the backend directly. It stored the response in the transfer state under `/api/`.
  - **Host check:** `/api//example.com/` stayed on the backend (404).
  - **Passkey begin** through the frontend set `session=…; httponly; samesite=strict; secure`.
- Live validation: commit `5e75fae` passed stack run `40568735356`. The backend now receives only `DATABASE_URL`, `WEBAUTHN_ORIGIN`, and `WEBAUTHN_RP_ID`, and it sends no CORS headers. Headless Chrome with a virtual WebAuthn authenticator then ran the full flow on the preview:
  - **Load:** the page rendered "Backend says: World" without any `/api` request, because the browser hit the transfer cache.
  - **Login without a passkey:** offered registration.
  - **Registration:** succeeded and stored `session` and `session_token` on the frontend's domain, both SameSite=Strict, Secure, and HttpOnly.
  - **Login with the new passkey:** "Welcome …".
  - **API calls:** every one went to `/api/…` on the frontend's origin.

## 2026-10-27 — Secure session cookies and a README for the Vercel output

- AI assistance: OpenCode (Claude Opus 5.5) made both backend cookies Secure, HttpOnly, and SameSite=Lax at the user's request. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
  - **`session_token` (AuthTuna):** `SESSION_SECURE=True` and `SESSION_SAME_SITE="lax"`.
  - **`session` (Starlette):** this cookie holds the passkey challenge. `init_app` always adds its middleware without Secure, so `create_app` now adds AuthTuna's two middlewares itself, with `https_only=True`.
  - **README:** added `frontend/vercel-output/README.md`, which explains the Build Output files and how `.vercel/output` is assembled. Packaging leaves the README out of the deployed output.
- Validation: these checks passed:
  - backend ruff, formatting, and the 9 tests;
  - a local passkey begin, which set `session=…; httponly; samesite=lax; secure`;
  - the ten-scenario check, which now also asserts that the README isn't deployed.

## 2026-10-27 — Review: stable aliases, committed Vercel config, docs, and cookie revert

- AI assistance: OpenCode (Claude Opus 5.5) implemented ten PR #14 review threads. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
  - **Stable aliases:** `findServiceDeployment` always reports a service's alias, never a deployment's own URL. Components therefore reference each other only through aliases derived from the Vercel project name and the Git branch, which stay fixed for a PR's lifetime.
  - **Vercel config in the repository:** the frontend's Build Output configuration is committed in `frontend/vercel-output`: `config.json` with the routes, and the SSR function's `.vc-config.json` (Node 24). Packaging only copies it and the Angular build. Vercel's Node presets would compile `src/server.ts` from source, which works only after Angular's build.
  - **Workflows:** `NEON_PROJECT_ID` comes only from the repository secret, the only one configured. `UV_PYTHON_PREFERENCE` links to uv's documentation, and `stack.yml` shares its target expression through a YAML anchor.
  - **Docs:** deleted `.github/CI.md` and `.github/COMPONENT-WORKFLOW.md`. Also removed the CI/CD explanations this PR had added to `README.md`, `frontend/README.md`, `database/README.md`, and `CONTRIBUTING.md`.
  - **Cookies:** reverted to main's AuthTuna setup: `init_app(app)`, with `SESSION_SECURE=False` and AuthTuna's default SameSite=Lax.
- Validation: these checks passed:
  - actionlint, including the anchor, and oxfmt;
  - the ten-scenario check, now with an alias that points at an older deployment and with the committed config;
  - backend ruff and its 9 tests;
  - a local passkey begin, which set `session=…; samesite=lax`.

## 2026-10-27 — Removed old environments, deployments, and runs

- AI assistance: OpenCode (Claude Opus 5.5) cleaned up the repository with the user's approval. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
  - **Environments:** deleted the five per-branch GitHub environments (`backend-cd`, `backend-preview-14`, `database-cd`, `frontend-cd`, `frontend-preview-14`), none of which had secrets, variables, or rules. Only `preview` remains.
  - **Deployments:** deleted their 154 deployment records, which GitHub keeps after an environment is deleted. Each was marked inactive first, because only inactive deployments can be deleted.
  - **Runs:** deleted PR #14's 98 older workflow runs on `cd` and `clone-check`, including every run of the removed `automatic.yml`. The two runs of `9f1b092` and the runs from teammates' merged branches remain, as the user chose.
  - Run IDs cited in earlier entries no longer resolve.

## 2026-10-27 — Review: one decision step, two environments, no frontend vercel.json

- AI assistance: OpenCode (Claude Opus 5.5) implemented six new PR #14 review threads. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
  - **One decision step:** `component-changes` takes the manual `update` override, logs whether the path changed and whether an update was requested, and exports the resulting `BUILD_NEEDED`. 🧭 Choose strategy, its log line, and the unused `changed` output are gone.
  - **Environments:** every job deploys to the GitHub environment named after its target, `preview` or `production`. `stack.yml` passes the target and the reusable workflows require it. The `branch` input is gone, because every caller passed `github.head_ref || github.ref_name` anyway.
  - **Job environment:** `COMPONENT` stays job-wide, because every `component-instance` call reads it. The backend job no longer sets the unused `VERCEL_BACKEND_PROJECT_ID`, and the frontend job reads its own address from `VERCEL_PROJECT_ID`.
  - **Descriptions:** `component-instance` and `component-changes` describe the action, every operation, and every output in full.
  - **`frontend/vercel.json`:** deleted, along with `VERCEL_LOCAL_CONFIG`. Its empty `buildCommand` was left over from when the frontend ran `vercel build`. `vercel deploy --prebuilt` never builds on Vercel, and no Vercel Git integration deploys this repository. `CI.md` names the proper switch, `git.deploymentEnabled: false`, in case one is ever connected.
- Validation: these checks passed:
  - actionlint, and ShellCheck on the detect script;
  - all four `BUILD_NEEDED` combinations;
  - the nine-scenario check, which now asserts that no CLI call gets `--local-config`;
  - mermaid-cli rendering of all three diagrams.

## 2026-10-27 — Frontend packaging moved into providers.cjs

- AI assistance: OpenCode (Claude Opus 5.5) answered why `component-instance/output.cjs` existed. It lays the already-built Angular SSR output out in Vercel's Build Output API format. The pinned Vercel CLI's Angular preset deploys only static browser output (`dist/<app>/browser` with an `/index.html` fallback), and the runtime `BACKEND_URL` reaches the browser only through SSR, so the code stays. The separate file was a leftover of `vercel-prebuilt-deploy`: the code is now `packageFrontendServiceOutput` in `providers.cjs`, next to the other Vercel helpers, and `output.cjs` is deleted. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Validation: oxfmt, actionlint, and the throwaway nine-scenario check passed. Its frontend scenario copied browser assets into `static/` without the client-only index.

## 2026-10-27 — Unified component workflow implemented

- AI assistance: OpenCode (Claude Opus 5.5) implemented `.github/COMPONENT-WORKFLOW.md` with the user's review names and answers: `BUILD_NEEDED`, 🧭 Choose strategy, 🚀 Release update, and "production source". The output stays `instance_id`, because production runs have no preview. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
  - **Same steps everywhere:** all three reusable workflows run 🔍 Detect changes, 🧭 Choose strategy, 🌱 Ensure instance, the update stages, and 📝 Report instance with the same names. They take an `update` input; `database.yml` gained the checkbox.
  - **One action:** `component-instance` replaces `neon-operation` and `vercel-prebuilt-deploy`. Its operations (`ensure`, `pull`, `package`, `settings`, `release`, `report`) call generic names that each component maps to Neon "Database" or Vercel "Service" helpers in `providers.cjs`. Instances are `{ id, address }`; state passes between steps as `INSTANCE_*` job variables.
  - **Fork rule (Q1):** applications build directly, so only an unchanged application without a preview is forked. The database still forks before migrating.
  - **Summary:** one format for every component and for failed operations; no application PR comments.
  - **Placement:** ⚙️ Set up Vercel CLI stays after the quality gates, because its `pnpm/setup` exports its own `PNPM_HOME` first on `PATH`.
  - **Docs:** `CI.md` and `database/README.md` use the new vocabulary, and `CI.md` now says "forked repositories" for pull requests from forks.
- Validation: actionlint with ShellCheck, oxfmt, `gh actions-lock` (all 7 workflows valid, lockfile unchanged), and mermaid-cli rendering of all three diagrams passed. A throwaway script ran the operations against a fake SDK, `fetch`, and `exec` and passed nine scenarios:
  - database reuse, fork+update, and a production update;
  - backend reuse, and a fork with all four settings and no `target`;
  - a backend update without a preview, which skips the fork;
  - a frontend update that packages and releases;
  - a frontend without a backend preview, and a production without a deployment, which both fail with the unified summary.
- Live validation: signed, GitHub-Verified commit `881377c` passed three runs.
  - **Stack run `40549800916` (43 s):** the `database/README.md` change updated the database: direct settings, `alembic upgrade head`, and a schema diff against the preview's parent, with result `update`. Both applications reused their previews (`reuse`).
  - **Manual runs `40549834445` (backend, 45 s) and `40549854170` (frontend, 44 s), with `update=true`:** each found the existing preview, ran the full update, and released a new version at the same alias.
  - **Previews:** afterwards, SSR rendered through `BACKEND_URL`, `/boats` read `DATABASE_URL`, and CORS and the passkey preflight allowed exactly the frontend origin with credentials.
- Follow-up: the logs showed that GitHub displays composite sub-step names, so every operation appeared as "🌱 Run instance operation". The sub-step now takes its stage's name, for example 📝 Report instance, from the `operation` input.

## 2026-10-27 — Proposed unified component-workflow terminology

- AI assistance: OpenCode (Claude Opus 5.5) delegated the user's request to a subagent, which wrote `.github/COMPONENT-WORKFLOW.md`. It contains an inventory of today's names and a proposed vocabulary shared by all components (instance, address, version, fork, update, release, settings), along with proposed step and helper names. It also includes mermaid diagrams of the proposed generic flow and of today's application and database flows, a comparison, and open questions. Nothing is implemented yet. OpenCode reviewed the document, and the subagent rendered all three diagrams with mermaid-cli. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-27 — Settings only in deployment env; production clones for new branches

- AI assistance: OpenCode (Claude Opus 5.5) replaced the reuse-production fallback, which the user rejected.
  - **Settings:** they are no longer written into `.vc-config.json` (`bindRuntime` removed); publication passes them only as deployment environment variables.
  - **Clones:** when an unchanged application has no preview for the branch, the reuse step redeploys the latest READY production deployment as the branch's preview with the branch's settings (`cloneServiceDeploymentFor`). There is no build, download, or upload.
  - **Redeploy request:** it omits `target`, as `vercel redeploy --environment preview` does. It sends the undocumented `env` field that `vercel deploy --env` uses, because Vercel's public schema (`additionalProperties: false`) has no environment override.
  - **Production today:** it still runs main's earlier code (backend only at `/api/*`, frontend alias 404), so clones work only once this pipeline has deployed both services from main.
  - Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Validation: with an injected fake SDK, an existing preview was reused. A missing preview produced one redeploy request (`deploymentId`, no `target`, the four backend settings, and branch metadata), was polled to READY, and received the branch alias. A frontend without a backend preview asked for the backend workflow first.
- Live validation: signed, GitHub-Verified commit `56be01e` passed stack run `40537936546`, backend build `40537969121`, and frontend build `40537989478`. With settings only in deployment env, SSR rendered the backend response through `BACKEND_URL`, `/boats` read `DATABASE_URL`, and CORS allowed exactly the frontend origin with credentials. A one-off check on the throwaway branch `clone-check` (run `40538465213`, branch deleted afterwards) redeployed the cd backend preview with a different CORS origin. The clone was READY in 20s as a preview with no aliases; it allowed the overridden origin and not the source's. With `DATABASE_URL` left out of the override, `/boats` returned 500, so clones always send every setting. The clone was deleted.

## 2026-10-27 — Review round: one provider module, change-only builds

- AI assistance: OpenCode (Claude Opus 5.5) implemented the user's latest PR review comments.
  - **Shared module:** `commands.cjs` is gone, and `providers.cjs` is the single shared module. `neonRequest` and `vercelRequest` create their clients with `??=`, and `vercelRequest` unwraps Vercel results without an adapter. `nullIfNotFound` replaces `missing`, and Vercel helpers use service names: `getServiceDeploymentFor`, `getBackendServiceRuntime`, `getFrontendServiceRuntime`, and `assignServiceDeploymentFor`.
  - **Dropped features:** environment filtering, redaction, error rewriting, credential blanking, and `.env` blanking. Fetched database URLs are still masked with `core.setSecret`.
  - **Neon:** Neon selects the branch's only database and role, so `NEON_DATABASE_NAME`, `NEON_ROLE_NAME`, and the schema-diff `database` input are gone.
  - **Deployment script:** `deploy.cjs` calls `exec.getExecOutput` directly and writes its own failure summary.
  - **Change-only builds:** applications build, and the database migrates, only on detected changes or manual runs. Opened and reopened PRs compare their base with the merge commit, and an unchanged application without a branch preview reuses its production deployment.
  - **Workflows:** quality steps use `!cancelled()` instead of `continue-on-error`. `pnpm bin` locates the Vercel CLI, and `UV_PYTHON_PREFERENCE` moved to the setup-uv steps.
  - **Vendored SDKs:** they build with the esbuild CLI from `package.json`.
  - Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Validation: actionlint, ShellCheck, action-lock verification, and diff checks pass, and the esbuild CLI bundle body is identical to the previous build. With an injected fake SDK, a branch without a preview reused production's deployment and alias, and every Vercel request carried `teamId`. The real Neon SDK resolved the connection string through the branch's roles and databases and masked it. A failing `reuse` rethrew the SDK error and wrote the failure summary.

## 2026-10-27 — Dropped the vendored SDK license notices

- AI assistance: OpenCode (Claude Opus 5.5) removed `.github/actions/_shared/vendor/dist/THIRD_PARTY_NOTICES.txt` at the user's request. `build.mjs` now only writes the bundle, without esbuild's metafile or the license-file scan, and `.github/CI.md` no longer mentions the notices. The rebuilt `dist/sdk.cjs` is byte-identical. Because the bundle is minified with `legalComments: 'none'`, the repository no longer includes the Apache-2.0/MIT license texts of the bundled `@neon/sdk`, `@vercel/sdk`, and `zod`. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-27 — Vendored SDK output moved to `dist/`

- AI assistance: OpenCode (Claude Opus 5.5) restructured `.github/actions/_shared/vendor` at the user's request. Generated output now lives in `dist/` (`dist/sdk.cjs`, `dist/THIRD_PARTY_NOTICES.txt`), replacing the earlier `src/` directory. The hand-written `build.mjs` and `sdk.mjs` moved back to the vendor root next to the pnpm project files. `build.mjs` writes to `dist/` and no longer takes an output-directory argument, which only the removed drift test used. `providers.cjs` loads `./vendor/dist/sdk.cjs`, and `.gitattributes` marks `vendor/dist/**` as generated. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Validation: `pnpm run build` wrote only into `dist/`. The rebuilt `sdk.cjs` differs from the moved file only in its banner line, and the notices are byte-identical. With a mocked `fetch`, `providers.cjs` loaded the bundle and both the Vercel and Neon clients reported their 403 errors.

## 2026-10-27 — Removed the local CI tooling tests

- AI assistance: OpenCode (Claude Opus 5.5) removed all four local Node tests under `.github/tests` at the user's request: `cicd.test.cjs`, `component-changes.test.cjs`, `provider-sdk-bundle.test.cjs`, and `setup-vercel-cli.test.cjs`. It also dropped their mentions from `.github/CI.md`: the note on local regression tests, the SDK bundle's rebuild check, and the vendor install and `node --test` verification commands. The backend pytest command and the ShellCheck guidance remain. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-27 — Skip database tooling when `database/` is unchanged

- AI assistance: OpenCode (Claude Opus 5.5) delegated the user's request to a subagent after run `40522812270` installed uv and the migration tools, applied migrations, and posted a schema diff for a docs-only commit. Commit `1aa6019` had dropped the database build gate, so nothing read the detector's `changed` output. `reusable-database.yml` now exports `BUILD_REQUESTED` with the same expression as the application workflows: detected `database/` changes, PR `opened`/`reopened`, or the `build` input. Checkout, uv/Python, the migration tools, migration credentials, `alembic upgrade head`, and the schema-diff comment run only when it is true. Preview branch preparation still runs, because backend publication only looks the branch up; the production-parent lookup runs only for production or migrations. Manual `database.yml` runs always migrate (`build: true`). Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Validation: OpenCode reviewed the diff; actionlint, the 33 CI tooling tests, and action-lock verification pass. On the live stack run `40527252285` (commit `baabbf3`, no `database/` changes), the database job took 11s instead of 21–24s. It ensured the preview branch, skipped the parent lookup, checkout, uv, migration tools, credentials, migrations, and schema-diff comment, and the whole stack finished in 36s.

## 2026-10-27 — Cross-origin passkey requests with AuthTuna on SQLite

- AI assistance: OpenCode (Claude Opus 5.5) implemented the user's choice of credentialed CORS for the passkey flow while keeping AuthTuna on SQLite. The backend allows GET and POST with credentials for the configured frontend origin. AuthTuna's cookies are `SameSite=None; Secure`, including Starlette's session cookie that carries WebAuthn challenges; that middleware is now added directly, because `authtuna.init_app` hard-codes `SameSite=Lax`. Publication binds `WEBAUTHN_ORIGIN` and `WEBAUTHN_RP_ID` to the stable frontend origin, and the local defaults follow the Portless frontend. The SQLite file falls back to the temporary directory when the code directory is read-only, as on Vercel. The passkey component sends `withCredentials`. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Validation: Ruff, the 9 backend tests (the CORS test now expects credentials), the frontend's ESLint, oxfmt, 5 tests, and production build, and the 33 CI tooling tests pass. A local HTTPS TestClient run confirmed the credentialed preflight, `SameSite=None; Secure` cookies, the frontend relying-party ID, a session round trip between two begin requests, and rejection of other origins.
- Limitations: browsers that block third-party cookies (Safari by default) cannot complete the flow. SQLite on Vercel is per instance and wiped on cold starts. `FERNET_KEYS` and the session-signing key (`ENCRYPTION_PRIMARY_KEY`) still use development defaults, so deployments need real secrets before real users.
- Live validation: stack run `40525444971` (commit `0d67515`) passed in 2m23s. On the preview, the passkey preflight from the frontend origin returned 200 with that origin, credentials, and `GET, POST`, while other origins got 400. The register and login begin routes returned WebAuthn options with the frontend host as the relying-party ID and set the challenge session cookie as `HttpOnly; SameSite=None; Secure`; `/boats`, CORS, and SSR still worked. Registering a username that already exists returns 500, because main's register route does not handle AuthTuna's `UserAlreadyExistsError`.

## 2026-10-27 — Stack timing after merging main; `/boats` fix

- AI assistance: OpenCode (Claude Opus 5.5) ran `stack.yml` through PR #14 after merging main. Run `40520812604` passed in 4m18s: database 22s, backend 180s, and frontend 46s, with about 3s between jobs. The backend's publish took 150s because Vercel installed the new AuthTuna dependencies from scratch. A follow-up backend build (`40521689277`) published in 23.7s, and its job took 52s. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- The deployed `/boats` returned 500 after the merge. A local Postgres container reproduced it: with its default SQLite database, AuthTuna registers its `PRAGMA foreign_keys=ON` listener on every SQLAlchemy engine, so psycopg connections failed. `backend/main.py` now moves that listener to AuthTuna's own engine. Locally, `/boats` then returned 200, and Ruff and the 9 backend tests pass.
- Validation: signed, GitHub-Verified commit `d095fdc` passed stack run `40522452774` in 1m15s: database 21s, backend build 37s (publish 18.0s with Vercel's dependency cache warm), and frontend reuse 8s. The preview's `/boats` returned data again with the exact-origin CORS header, and SSR rendered the backend response.

## 2026-10-27 — Merged main's passkey flow and unit tests into the CI/CD branch

- AI assistance: OpenCode (Claude Opus 5.5) merged `main` (`d6f0219` passkey flow, `5ef8492` unit-test steps) into `cd` with the user's approval, so PR #14 can run `stack.yml`. This branch's manual entry-point workflows are kept, and their reusable workflows already run pytest and the Angular tests. The root `vercel.json` stays deleted, and the frontend keeps its runtime backend URL provider. `backend/main.py` combines this branch's app factory, CORS allowlist, and `/`, `/health`, and `/boats` routes with main's AuthTuna settings, session middleware, Scalar reference, and passkey routers, mounted without `/api`. `scalar-fastapi` moved to runtime dependencies because Vercel's Python builder runs `uv sync --no-dev`. The re-locked `uv.lock` keeps every version pinned by either side. The connectivity check stays on `/` (`Hello`), and the passkey component resolves endpoints against the backend URL without a double slash. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Known gap: main's passkey flow relied on same-origin `/api` routing and session cookies. With separate frontend and backend projects, it needs either a frontend `/api` proxy route or credentialed CORS, plus deployment values for AuthTuna's database, `FERNET_KEYS`, and WebAuthn origin. This is left for a follow-up decision.
- Validation: the backend's locked sync, Ruff lint and format, and 9 pytest tests pass. The frontend's ESLint, oxfmt, 5 Angular tests, and production build pass, as do the 33 CI tooling tests.

## 2026-10-27 — Trimmed pnpm Vercel CLI without a cache

- AI assistance: OpenCode (Claude Opus 5.5) measured the user's simpler alternative to the cached npm setup. `setup-vercel-cli` uses pnpm again, without a dependency cache. It has no `devEngines.runtime` (the CLI runs on the runner's Node.js) and sets `optional: false`, `allowBuilds: esbuild: false`, and `trustLockfile: true`. The regenerated lockfile has no Node runtime entry. A local frozen install added 270 packages, none of them optional platform binaries; it ran no install scripts and skipped lockfile verification, and `vercel --version` reported 65.2.0. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Validation: signed, GitHub-Verified commit `67e191d` passed backend build `40516691912`, frontend build `40516709022`, and backend build `40516727360`. CLI setup took 1.94–2.29s on every run (0.83–1.01s to download pnpm, 0.88–1.2s to install). That compares with 1.36–1.82s for cached npm hits, 8.0s plus a 2.6s save for npm misses, and 4.1–6.4s before trimming. It met the user's ~2s threshold, so the simpler pnpm setup without cache steps is kept. The backend CLI ran on the runner's Node.js 24.21.0 and the frontend CLI on the frontend's locked 24.22.1. Live SSR, exact-origin CORS, and database-backed `/boats` checks passed.

## 2026-10-27 — Cached npm Vercel CLI on the runner's Node.js; trusted pnpm lockfiles

- AI assistance: OpenCode (Claude Opus 5.5) implemented the user's approved changes. `setup-vercel-cli` no longer uses pnpm. It pins `vercel@65.2.0` in an npm `package-lock.json`, generated against the public registry with `--before` set one day back to match pnpm's default release-age delay. It runs on the runner's preinstalled Node.js and npm, installs with `npm ci --omit=optional --ignore-scripts`, and caches the installed CLI with `actions/cache` under a key hashed from the action and its lockfile. The frontend keeps pnpm and still installs the exact Node.js version locked by `frontend/package.json`. `frontend/` and the SDK bundle set `trustLockfile: true`. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Verified locally that omitting optional dependencies is safe for our commands. The CLI loads its keyring binding and esbuild lazily, and the Node builders' bindings (`rolldown`, `oxc-*`) are not loaded for Python. With a bogus token, `vercel pull` and `vercel deploy --prebuilt` reached Vercel's API, and a backend `vercel build` produced `functions/fastapi.func` (Python 3.14, x86_64). The install is 279 packages (159 MB, or 20.4 MB as a zstd archive). Frozen pnpm installs pass without the supply-chain verification pass. All 33 tests, actionlint, ShellCheck, and action-lock verification pass.
- Validation: signed, GitHub-Verified commit `2253091` passed backend build `40514974240` (cache miss), frontend build `40514992711`, and backend build `40515011715` (both cache hits). CLI setup took 8.0s on the miss (7.6s of `npm ci`, plus about 2.6s after the job to save the 30 MB cache) and 1.36–1.82s on hits, versus 4.1–6.4s with pnpm. The cache stays because uncached npm is far slower than a hit. The backend CLI ran on the runner's Node.js 24.21.0 and the frontend CLI on the frontend's locked 24.22.1. With `trustLockfile`, the frontend's pnpm install took 0.45s instead of 1.8s. Live SSR, exact-origin CORS, and database-backed `/boats` checks passed.

## 2026-10-27 — Hand-written vendored SDK sources moved to `src/`

- AI assistance: OpenCode (Claude Opus 5.5) delegated the user's request to a subagent, which moved the hand-written `build.mjs` and `sdk.mjs` into `.github/actions/_shared/vendor/src/`. The generated `sdk.cjs` and `THIRD_PARTY_NOTICES.txt` stay at the vendor root next to the pnpm project files, so `providers.cjs` still loads `./vendor/sdk.cjs` and `.gitattributes` is unchanged. The build script path, drift test, a code comment, and `.github/CI.md` were updated. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Validation: OpenCode reviewed the diff and re-ran the checks. `sdk.mjs` and `THIRD_PARTY_NOTICES.txt` are byte-identical, the rebuilt `sdk.cjs` differs only in its banner line, and all 33 local tests pass.

## 2026-10-27 — Fastest Vercel CLI installation on hosted runners

- AI assistance: OpenCode (Claude Opus 5.5) broke down the Vercel CLI setup step in backend build `40506480402` and frontend build `40506509172`. It takes 4.1–6.4s: 0.75–1.0s to download pnpm, 1.1–2.4s to download Node 24 (58 MB) for `devEngines.runtime`, and 2.1–2.8s to install the CLI, including the 58.6 MB `@vercel/vc-native-linux-x64` binary. A 1.5s lockfile verification runs alongside the downloads. No code was changed. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- The ubuntu-26.04 image (20261012.163) has Node.js 24.21.0 but no Vercel CLI. Every CLI command ran as `Vercel CLI 65.2.0 (Node.js 24.22.1)`: the Linux native binary is used only after an opt-in, and automatic enrollment (`isVercelianFromLoadedTeams`) applies only to Vercel employees.
- Recommended removing `devEngines.runtime` and adding `ignoredOptionalDependencies: ["@vercel/vc-native-*"]` (estimated 2.5–3s). A local trial regenerated the lockfile with only the eight native packages and the Node runtime removed (377 → 368 entries), installed it frozen, and ran the CLI on Node. The trimmed install measured 186 MB, or 32.6 MB as a zstd archive.
- The fastest option is restoring that trimmed install from `actions/cache` and skipping pnpm on hits (estimated ~1s), at the cost of reintroducing cache steps. Rejected `trustLockfile` (pnpm advises against it when outside contributors can edit the lockfile), npm (it cannot skip only the native binary and lacks pnpm's supply-chain checks), downloading the native binary directly (Linux opt-in; builders would install outside the lockfile), and custom images (paid larger runners only).

## 2026-10-27 — Vercel CLI versus SDK-only deployment

- AI assistance: OpenCode (Claude Opus 5.5) assessed whether `@vercel/sdk` could replace the Vercel CLI and recommended keeping the CLI in build jobs. Reuse runs, deployment lookup, alias assignment, and Neon operations already use only the SDKs. The CLI remains for `vercel build` (backend) and `vercel deploy --prebuilt` (both applications), with `vercel pull` feeding them. No code was changed. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Backend build: a retained `vercel build` output contained `functions/fastapi.func` with the application source, a 99 MB `_vendor` (3,170 files, including CPython 3.14 x86_64 extension modules) with `vercel_runtime` 0.24.1, and a generated 43-line `vc__handler__python.py`. That handler configures `vercel_runtime` through private `__VC_HANDLER_*` environment variables, so replacing the builder means maintaining a copy of a private builder/runtime contract.
- Publishing: Vercel CLI 65.2.0 creates prebuilt deployments with a `?prebuilt=1` query parameter. Vercel's public OpenAPI does not define it, and the generated SDK's `createDeployment` accepts only the `forceNew`, `skipAutoDetectionConfirmation`, `teamId`, and `slug` query parameters. SDK-only publishing would need raw HTTP for that flag, our own file hashing and retrying uploads, and READY polling.
- The only documented SDK-only route is uploading source for a remote Vercel build. It moves the backend build from CI to Vercel, and per-deployment secrets would move into project environment variables because the public deployment API has no per-deployment environment. Each alternative adds more code than the CLI install saves (4–6.5s, build jobs only).

## 2026-10-27 — Vercel CLI caching status

- AI assistance: OpenCode (GPT-6.1 Sol) answered that the Vercel CLI is no longer cached: build jobs install it through `pnpm/setup` from the action-owned lockfile, while reuse runs skip it. Compared logged step durations: 4.1–6.5s uncached versus 4.7s for the former `actions/cache` path, because pnpm and Node are downloaded either way. No code was changed. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-27 — Checked-in provider SDK bundle; Vercel CLI stays installed

- AI assistance: OpenCode (GPT-6.1 Sol) implemented the user's proposal to bundle provider dependencies with esbuild. Added `.github/actions/_shared/vendor`, which pins `@neon/sdk@7.5.0`, `@vercel/sdk@1.28.51`, and `esbuild@0.28.2` with a pnpm lockfile. Its `build.mjs` writes the checked-in `sdk.cjs` (274 KB, 60 KB gzipped) and `THIRD_PARTY_NOTICES.txt`, because this public repository redistributes the bundled Apache-2.0/MIT code. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Used Vercel's tree-shakable standalone functions through a small adapter; a bundle of the full Vercel client measured 2.4 MB. Removed the provider-script wrapper and its pnpm install: provider steps call `actions/github-script` directly and need no install, cache, or registry access.
- Assessed bundling the Vercel CLI and kept it installed through pnpm/setup in build jobs only. Its published `dist` is already an esbuild bundle (317 chunks, 14 MB). It resolves builders such as `@vercel/python` by package name and `require`s them from disk, installing missing builders with npm at run time, and it ships platform binaries (a 162 MB native CLI binary on macOS; esbuild's 10 MB binary). Its installed graph is about 530 MB.
- Added tests for rebuild drift, license coverage, loading the copied bundle from a directory without `node_modules`, and install-free provider steps. Marked the generated files in `.gitattributes`.
- Validation: all 33 local tests, actionlint, and action-lock verification pass; the database workflow no longer needs `pnpm/setup`. Signed/GitHub-Verified commit `166e26b` passed backend build `40506480402`, frontend reuse `40506484709`, and frontend build `40506509172`. The provider step in the reuse run took 0.57s with no installation (the whole job took 6s). Only the Vercel CLI setup still installs with pnpm (4–6.5s, build jobs only). Live SSR, exact-origin CORS, and database-backed `/boats` checks passed.

## 2026-10-27 — Why pnpm/setup cannot cache action-owned lockfiles

- AI assistance: OpenCode (GPT-6.1 Sol) explained from pnpm/setup v3.1.1 source and its bundled `@actions/glob` code that the store cache key is the lockfile's `hashFiles` digest, which skips files outside `GITHUB_WORKSPACE`. Action snapshots live outside the workspace, so the digest is empty and `cache: true` throws. No code was changed. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-27 — pnpm-owned CI tooling and simpler change detection

- AI assistance: OpenCode (GPT-6.1 Sol) implemented the five new PR #14 review threads. Removed the change detector's cleanup trap and generated temporary directory, relying on the runner's per-job temporary directory, and replaced `base64 | tr` with `base64 -w0`. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Replaced both custom npm/cache setups with action-owned pnpm projects: `provider-script` and `setup-vercel-cli` now each commit `package.json` and `pnpm-lock.yaml`, and run `pnpm/setup` with their own action directory and a frozen lockfile. Vercel CLI setup no longer reads `frontend/`, so it works without or with a sparse checkout. It pins Node 24 and keeps the existing `esbuild` build allowance. Moved provider helpers beside the SDK project so normal package resolution replaces the custom dependency-directory loader.
- Verified in pnpm/setup v3.1.1 source that absolute action directories are supported, but its bundled cache hashing ignores lockfiles outside `GITHUB_WORKSPACE`; enabling `cache` would fail. The action also deletes its `dest`, so the tool actions use separate temporary pnpm homes to avoid clobbering the frontend job's pnpm store. Measured local cold installs: provider SDKs 5.4s; Vercel CLI 16.8s including Node.
- pnpm 12's minimum-release-age policy flagged the same-day `@vercel/sdk@1.28.53` and auto-added an exclusion. Pinned the four-day-old `@vercel/sdk@1.28.51` instead of committing a policy bypass; lockfiles contain only public-registry integrity entries.
- Live runs `40501232239`/`40501237204` (commit `621a0ca`) failed before installation: pnpm/setup always hashes the lockfile, and for an action outside the workspace it derives `../../_actions/...`, which `@actions/glob` rejects. Reproduced the same assertion locally by running the pinned pnpm/setup bundle with a cache endpoint enabled, then verified that an absolute `cache-dependency-path` installs both projects (SDKs, then Vercel CLI 65.2.0 on Node v24.22.1 with the allowed `esbuild` script) without touching the workspace. Added a regression assertion.
- Signed/GitHub-Verified fix `8e78cc2` passed frontend/backend build runs `40501755585`/`40501759870` and checkout-free reuse runs `40502049874`/`40502054666`. Runner timings without a store cache: Vercel CLI setup ~5.5s, provider SDK setup 1.5–2.0s. Tool installs used their own stores under the runner temp directory; the frontend job's pnpm cache save matched behavior already present in runs before this change. Live SSR, exact-origin CORS, and database-backed `/boats` checks passed. Replied to and resolved all five new threads; only the earlier SHA-only URL proposal remains open. Automatic PR CI is still blocked by unmerged `main` conflicts.

## 2026-10-27 — Official provider SDKs with a cached script wrapper

- AI assistance: OpenCode (GPT-6.1 Sol) followed the explicit SDK-adoption decision: removed `.github/provider-clients.md`, replaced custom fetch/pagination code with official `@vercel/sdk@1.28.53` and `@neon/sdk@7.5.0` calls, and kept the high-level provider interface and lazy client loading. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Added `.github/actions/provider-script`, a shared wrapper around `actions/github-script` with a separate npm manifest/lockfile, platform/Node/lockfile-keyed dependency caching, credential-free `npm ci --ignore-scripts` on misses, and same-job installation reuse. No SDK bundle or application checkout is required; application setup/build/deployment still stays skipped for unchanged previews.
- Updated provider tests to exercise SDK operation contracts and the actual installed clients, inline Neon dispatch, and cold/ready wrapper setup. Retained status-only SDK failures, alias ownership, explicit CORS, private database bindings, bare-Git comparison, and SSR packaging. No main integration or URL-identity change was made.
- Local validation: all 28 tests pass, including actual Node 24 SDK loading, status-only SDK errors, cold-install/ready-cache wrapper execution, all inline Neon operations, and real bare-repository comparisons. Inline Bash passed ShellCheck; YAML/action-lock, formatting, and diff checks pass. Dependencies were installed from the public registry using the host's existing system certificate trust; TLS verification was not disabled.
- Signed/GitHub-Verified commit `921e9fb` passed live backend run `40493270906`: the SDK cache missed, installed exactly three packages with scripts disabled, saved the cache, and completed real Neon/Vercel discovery and publication. Also picked up the empty root `vercel.json` review comment: removed the schema-only file and backend config override; the shared CLI helper adds a local config only when configured, retaining the frontend's meaningful build-disabled config.
- Live frontend reuse run `40493864734` hit and restored that same SDK cache, skipped npm installation and application checkout/build/publication, and reported the unchanged deployment ID. The local suite now has 29 passing tests, including backend default configuration and the frontend's explicit config arguments.
- Signed/GitHub-Verified commit `bad13da` passed backend run `40494448745` without the empty root config and frontend run `40494758799` with its explicit config and cached official SDKs. Live SSR returned the rendered backend response and correct transfer state, and backend CORS allowed exactly the stable frontend origin. All 29 tests, inline ShellCheck, actionlint/action-lock, formatting, and diff checks pass. Replied to/resolved both inline-script threads, the SDK-adoption thread, and the empty-config thread; only the previously discussed SHA-only URL proposal remains open. Automatic PR CI is still blocked by unmerged `main` conflicts; no merge/rebase was performed.

## 2026-10-27 — Inline the small action scripts

- AI assistance: OpenCode (GPT-6.1 Sol) implemented the two new PR #14 review comments by inlining the bare-Git detector in `component-changes/action.yml` and the Neon dispatcher in `neon-operation/action.yml`. Replaced the dispatcher switch with an object of async handlers, and removed the redundant `detect.sh` and `neon.cjs` files. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Updated tests to execute the actual inline YAML bodies, including all three Neon operations and their non-secret outputs/job-private migration credentials. Bare fetching, NUL-delimited paths, colored display/plain output, no-checkout reuse, and provider policy remain unchanged. No main integration or SDK/alias policy change was made.

## 2026-10-27 — Assess provider, naming, and short-Bash review comments

- AI assistance: OpenCode (GPT-6.1 Sol) assessed the five latest PR #14 review threads and the clarification that short, straightforward Bash is appropriate. Restored inline native Vercel CLI setup and replaced GitHub comparison-API code with a short bare-Git/NUL-delimited diff script, without a checkout action or worktree. Authentication stays out of URLs/arguments, colored JSON remains display-only, and complete Git trees remove the 300-file API limit. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Assessed commit-only aliases against selective deployment: changing backend URLs per SHA would strand unchanged frontend runtime bindings, while changing frontend origins would require extra backend CORS publications. Preserved the existing branch-stable aliases rather than breaking no-op reuse or adding alias-rebinding machinery.
- Investigated first-party provider clients and a high-level provider interface, with cited findings recorded under `.github`. No merge/rebase of newer `main` was started.
- A background research agent checked official SDK/package sources; the final assessment in `.github/provider-clients.md` records that `@vercel/sdk` and `@neon/sdk` exist, but require package installation or prebundling to run from downloaded composite snapshots. Kept native fetch private and replaced the generic public `Providers` methods with workflow-level helpers; deployment callers no longer handle REST paths, response shapes, alias reservation, or database-selection policy. Added exact-name Neon selection with documented API pagination.
- Validation: 24 local tests pass, including the actual short Bash setup scripts, real bare-repository rename/newline/large-diff cases, provider policy, private credentials, SSR packaging, and ordered workflows. ShellCheck, actionlint (existing modern-syntax/runner-label exceptions), action-lock, and diff checks pass. An authenticated bare fetch against the real GitHub repository also returned the expected change flag and removed its temporary repository without checking out source or exposing credentials.
- Picked up three additional comments arriving during validation: simplified all callers to one stack queue per Git ref, removed nested reusable-job queues, used documented `case(...)` expressions for target/environment selection, and removed the change-detection step condition. Events without a push range compare the current SHA with itself, while initial-PR/manual build policy remains explicit. Preserved existing production/preview deployment-environment names rather than silently changing environment settings.
- Pushed personally attributed, signed/GitHub-Verified commits `a62ab95` and `3fd5dc3`. Live backend build `40487659419`, backend/frontend reuse runs `40487659407`/`40487659803`, and latest frontend build/backend reuse runs `40488760582`/`40488760637` passed. The latter runs exercised unconditional bare-Git detection with the runner's token and native `case(...)` evaluation; reused applications did not check out/build/publish source. Live frontend SSR transferred a successful backend response and the expected URL, and backend CORS allowed exactly that frontend origin.
- Replied to all eight new review threads and resolved the six implementation requests. Left only the commit-SHA URL and SDK-adoption design suggestions open with explicit assessments, rather than assuming agreement to change selective-deployment behavior or add an SDK distribution build. PR #14 still conflicts with newer `main`; automatic PR CI remains blocked and no main integration was attempted.

## 2026-10-27 — Simplify deployment reuse and remove artifact machinery

- AI assistance: OpenCode (GPT-6.1 Sol) followed the request to preserve normal CI/CD behavior while reducing orchestration complexity. Removed the GitHub artifact upload/download/restore protocol, archive safety/retention/provenance machinery, private state files, Python output materialization, repeated mode plumbing, and custom provider retry/error wrappers. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Unchanged applications now perform a filtered latest-READY Vercel lookup and report the existing deployment ID/URL, with no build, publication, alias write, dependency lookup, checkout, or CLI setup. Initial PR opening/reopening still builds previews; a missing/deleted preview requires one explicit `build=true` run rather than a hidden rebuild or another environment's credentials. Vercel's redeploy-by-ID endpoint creates a new deployment/build, so it is deliberately not called for unchanged applications.
- Changed applications still validate/build independently and publish native prebuilt output with private runtime bindings. Retained the small Angular SSR output descriptor, exact CORS/alias ownership checks, secret masking, database-first ordering, unconditional pending migrations, summaries, step names, and checkout-free local action loading. Python file mappings are left to Vercel's native uploader.
- Local validation: the reduced 19-test orchestration suite passes, including read-only reuse, server-side latest-deployment filtering, Neon idempotence, private credentials, native Python mappings, SSR packaging, and the ordered stack. Alias ownership is checked for both preview and production targets. YAML/action-lock checks pass with the existing modern-syntax/runner-label exceptions.
- The orchestration JavaScript shrank from 952 to 453 lines (52%); the deployment composite went from 11 steps to 6. Signed/Verified commit `494df48` passed live no-build backend (`40428776264`) and frontend (`40428776113`) runs: only existing deployment resolution ran, with checkout, validation, CLI setup, build, and publication all skipped. The reduced SSR packager also passed an isolated HTTP/TransferState check.
- The full backend build/publication run `40428842897` passed without artifacts or custom Python mapping materialization. The published backend returned its healthy response and sample inventory through native Vercel-uploaded dependencies.
- The simplified frontend build/publication run `40429096670` passed, but live HTTP validation caught the copied CSR template being served as the homepage while `/index.html` correctly invoked SSR. Added a failing packaging regression, then excluded `index.csr.html` from public static output while retaining it inside the SSR bundle. No runtime fallback or deployment-debug workflow step was added.
- Signed/Verified fix `4d13c99` passed frontend run `40429548344`; the stable homepage now returns HTTP 200 with SSR-rendered backend data, the correct transferred backend URL, and its cached `Hello: World` response. Backend health, inventory, and exact-origin CORS checks also passed. All 19 local orchestration tests, formatting, YAML/action-lock verification, and diff checks pass. PR #14 has zero unresolved review threads; its automatic workflow remains blocked only by the existing unmerged `main` conflicts.

## 2026-10-27 — PR #14 review follow-up

- AI assistance: OpenCode (GPT-6.1 Sol) implemented the latest review comments: removed reusable job skip conditions, shared concurrency/environment names with YAML anchors, renamed the caller to `stack.yml`, and removed the obsolete migration test and Bash CI test script. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Removed the frontend build controller, its build-ready switch, and Vercel's automatic frontend build command. The colocated deployment action packages the existing validated Angular SSR/browser output without compiling it again or introducing an API discovery stub.
- Replaced runtime-config fetching, preload initialization, and missing-SSR error handling with the composable `provideBackendApiUrl` provider and SSR TransferState. Added explicit default Portless origins, removed mandatory local environment-file setup, simplified Portless commands, and documented `pnpm env use --global 24`.
- Preserved private deployment credentials, explicit CORS allowlists, retained compiled output, and checkout-free no-op preview reuse. No merge or rebase of newer `main` was performed.
- Validation: 33 Node orchestration tests, 5 frontend tests, backend tests (8 tests and 9 subtests), application lint/format checks, Angular production build, actionlint (existing modern-syntax/runner-label exceptions), action-lock verification, and diff checks passed. An isolated packaged SSR check rendered a backend fixture and transferred its URL; its initial raw-HTML URL assertion was corrected to parse Angular's escaped TransferState JSON. The JavaScript restore implementation also restored the actual retained backend v2 artifact successfully.
- Pushed signed/Verified commit `ec906e6`; manual backend run `40427968026` and frontend run `40428192095` passed. Replied to and resolved all 12 new review threads and resolved 30 older implemented threads; a complete query confirmed all 54 PR threads resolved. Automatic PR CI is still blocked by conflicts with newer `main`; no merge/rebase was started.

## 2026-10-27 — JavaScript orchestration through actions/github-script

- AI assistance: OpenCode (GPT-6.1 Sol) rewrote Bash CI/CD orchestration as colocated CommonJS modules executed with `actions/github-script@v9.0.0` (Node 24), using injected GitHub/context/core/exec interfaces. Migrated change detection, Neon/Vercel discovery and publication, artifact sanitization/materialization/restoration, CLI setup, selection outputs, and summaries. Native application tool commands remain unchanged. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Preserved the three-job caller, independent reusable workflows, checkout-free discovery/reuse, single-path detector, conservative 300-file policy, colored JSON, unconditional pending migrations, retained compiled-output protocol, step names, and credential isolation. No credential-bearing module result is returned to github-script outputs; action token inputs are stripped from application/package subprocesses.
- Replaced local Bash tests with Node's built-in test runner. Did not merge/rebase `main` or resolve its unrelated passkey/unit-test conflicts as part of this rewrite.

## 2026-10-27 — Colocated CI scripts and conservative large-change detection

- AI assistance: OpenCode (GPT-6.1 Sol) moved the Vercel deployment/artifact scripts beside their composite definition, gave the Neon composite its own colocated entry point, placed shared provider helpers in `.github/actions/_shared`, and moved local tests/docs under `.github`. Updated script invocations and documentation links. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Changed the requested API-cap policy: when GitHub returns 300 files, the detector logs the cap and returns `changed=true` for the requested substring instead of failing. This is conservative for each of the three users of the shared action; below the cap actual path matches still decide. No checkout or Git dependency was added to detection, and displayed JSON remains colored.
- Kept `Select database reference` unchanged as requested. Added regression coverage for below-cap versus capped comparisons and the relocated entry points.
- Validation: 46 local Bash checks, ShellCheck, actionlint (with documented syntax/runner-label exceptions), action-lock verification, formatting, and diff checks passed before submission.
- Pushed signed/Verified commit `8a0a71e`. Live PR validation is blocked by conflicts with newer `main` commits introducing the passkey flow (#13) and unit tests (#15). Fetched `main` and inspected conflicts with `git merge-tree` only; no merge/rebase or application conflict resolution has been started. Requested authorization before integrating those changes.

## 2026-10-27 — Database-reference step explanation

- AI assistance: OpenCode (GPT-6.1 Sol) inspected `Select database reference` and its consumers. It only chooses the preview/production branch ID and exposes it for credentials, schema comparison, summary, and reusable outputs; it performs no provider operation. Explained that the selected value is required but the separate step can be removed by inlining the selection. No workflow changes were made for this question. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Follow-up: confirmed four direct references to `steps.reference.outputs.branch_id`, all in the reusable database workflow: job output, migration credentials, schema diff, and deployment summary.

## 2026-10-26 — Checkout-free detection, colored JSON, and unconditional migrations

- AI assistance: OpenCode (GPT-6.1 Sol) replaced the Git-based detector with a GitHub comparison-metadata lookup using event SHAs, removing checkout and Git commands from change detection. GitHub Actions event JSON omits changed-file lists, so this explicitly uses the existing GitHub token/API rather than pretending the event alone contains filenames. Matching still takes one path substring and emits one plain boolean. Displayed JSON uses forced `jq -C` colors; matching data and workflow outputs remain uncolored. API failures/truncation fail closed without a fallback. Attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Source checkout is now limited to actual application builds, database migration tools, or missing-preview deployment configuration. Neon metadata/credential operations run from a small composite's downloaded snapshot and keep credentials private. Existing application previews require no checkout in automatic or manual runs.
- Removed the migration-test step and database build gate as requested. The database job always applies `alembic upgrade head` to its selected branch, which skips already applied revisions. Updated the decision/summary messages and documentation; no database reset or downgrade was added.
- Removed the now-redundant `Select migration path` step; there is no conditional migration path to select.
- Validated on 2026-10-27: 45 local Bash checks, ShellCheck, actionlint (with documented modern-syntax/runner-label exceptions), action-lock verification, formatting, and diff checks passed before submission.

## 2026-10-26 — CI/CD decision logging and checkout placement

- AI assistance: OpenCode (GPT-6.1 Sol) added logging of the searched substring, changed file paths, and match result to the existing Bash/jq detector. Paths are escaped when logged so spaces/newlines remain unambiguous and cannot inject workflow commands. The single `path` input, `changed` output, substring matching, and lack of event handling/fallbacks are unchanged. Added logging and empty-diff regressions. Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Incorporated follow-up requests: removed the `Test CI scripts` workflow step (keeping local tests), logged migration/build decisions and Neon preview/production-parent/database-reference selections, and added equivalent public deployment-resolution/reuse logs. Helper logs go to stderr so resource IDs/URLs returned through stdout remain intact; connection values and tokens remain private.
- Switched reusable calls to the documented `$/` syntax (composites already use it), moved the Git-history checkout into the changed-path composite, and deferred other checkouts until source/configuration is needed. Deployment scripts run from the downloaded composite snapshot before checkout, allowing manual reuse-only application runs to avoid checkout entirely and preventing a second checkout from deleting a validated frontend build.
- Local validation includes 40 Bash regression checks for logs, empty/multi-commit diffs, provider output isolation, private credentials, reuse from an empty workspace, deferred checkout, and action/workflow structure. No Python CI/CD code was introduced or executed.

## 2026-10-26 — Entry workflow and caller job emojis

- AI assistance: OpenCode (GPT-6.1 Sol) prefixed the automatic/manual workflow titles and their caller job names with consistent emojis: 🚀 orchestration, 🗄️ database, ⚙️ backend, and 🌐 frontend. Reusable workflow titles and their inner `Deployment` job labels remain plain; existing step emojis, job IDs, dependencies, and behavior are unchanged. Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).

## 2026-10-26 — Consistent step emojis and deployment debug cleanup

- AI assistance: OpenCode (GPT-6.1 Sol) added explicit emoji-prefixed names to every configured workflow/composite step, using consistent prefixes for matching purposes across database/backend/frontend jobs and shared actions. Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`). Job display names, IDs, dependencies, and the minimal detector script are unchanged.
- Removed the deployment verification step and its unused HTTP/CORS/SSR probes, runtime-log diagnostics, and related debug-only tests. Retained normal lint/format/application/migration/CI-script tests, provider READY checks, artifact provenance validation, credential redaction, and deployment summaries. Added regressions for custom step names, emoji consistency, and absence of deployment debug steps; updated CI documentation.
- Validation: all 50 configured steps have custom emoji-prefixed names; 32 Bash checks, ShellCheck, actionlint (with the documented syntax/runner-label exceptions), action-lock verification, formatting, and diff checks passed.

## 2026-10-26 — Explicit Ubuntu 26.04 runners

- AI assistance: OpenCode (GPT-6.1 Sol) pinned the database/backend/frontend reusable jobs to `runs-on: ubuntu-26.04`, replacing `ubuntu-latest` to avoid the Ubuntu label-migration notices. Confirmed the hosted-runner label against GitHub's runner-images documentation. Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`). No other workflow behavior changed.

## 2026-10-26 — Workflow UI naming options

- AI assistance: OpenCode (GPT-6.1 Sol) inspected the caller/reusable job names and proposed concise UI naming schemes. Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`). The repeated `backend / backend` label comes from the caller job and the job inside the reusable workflow, not the reusable workflow's top-level name. Recommended explicit job display names while retaining job IDs and dependency/output references. No workflow names were changed pending the user's choice.
- Follow-up: after the user questioned the database-specific label, recommended the same inner display name, `Ensure deployment`, for database, backend, and frontend. Naming changes remain unapplied.
- Implemented the approved display names for automatic and manual callers: `Database / Ensure deployment`, `Backend / Ensure deployment`, and `Frontend / Ensure deployment`. Only job `name` fields changed; job IDs, references, execution order, and behavior remain unchanged. Author identity was reverified with `gh api user`.
- Shortened the inner display name to `Deployment` in all three reusable workflows at the user's request so the labels fit the GitHub UI. Job IDs and behavior remain unchanged. Attribution: `@ElectroluxV2` (Mateusz Budzisz, reverified with `gh api user`).

## 2026-10-26 — Minimal Bash composite detector and independent reusable workflows

- AI assistance: OpenCode (GPT-6.1 Sol) implemented the requested single-input `path`/single-output `changed` composite action and reused it exactly once in each database/backend/frontend reusable workflow. Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`). After the user's correction, the detector is only a before/after Git diff plus jq substring check: no event dispatch, fallbacks, component mappings, build overrides, or branch resolution.
- Reduced the automatic workflow to three ordered reusable calls and removed cross-application workflow calls. Dependencies are resolved with provider APIs in the consuming job, without credential outputs. Explicit initial-PR/manual choices remain in the reusable callers, not the detector.
- Implemented the accepted per-push reuse policy: an unchanged application's existing READY preview is left untouched; only an absent preview is provisioned from retained production output. No source/config fingerprint can force a rebuild or replacement. Replaced Python CI/CD controller/artifact/smoke logic and its tests with Bash/jq scripts and shell tests; application-native pytest/Alembic tooling is unchanged. No Python was executed for this refactor.
- Local checks: 30 Bash regression cases passed, covering the detector, provider discovery, no-op preview reuse, production artifact provenance, private runtime binding, artifact safety, and SSR payload checks. Bash syntax, ShellCheck, actionlint, and all seven action-lock entries are validated before submission.
- The first live run selected all three unchanged paths correctly and reused both application previews, but an old deployment smoke check still ran on reuse and failed its SSR assertion. Corrected that control-flow violation: an existing preview now returns before dependency resolution, and reuse skips CLI setup and deployment smoke tests. New builds/restored previews retain strict HTTP/SSR checks. Added red/green regressions for own-project-only discovery and the reuse step guards; no application rebuild or deployment was forced, and the minimal detector is unchanged.
- The corrected reuse path passes 32 Bash checks plus ShellCheck, actionlint, formatting, and action-lock verification. Unchanged database previews also skip unnecessary production-parent resolution and schema-comment updates; their existence is checked before any clone is attempted.

## 2026-10-26 — Bash-only CI/CD constraint and incremental change detection

- AI assistance: OpenCode (GPT-6.1 Sol) assessed the user's Bash/jq-only CI/CD requirement and proposed event-based incremental change detection. Author attribution: `@ElectroluxV2` (Mateusz Budzisz, previously verified with `gh api user`). No Python was executed for this assessment.
- Verified GitHub's documented Actions push-payload limitation: commit objects omit `added`, `removed`, and `modified` file lists; pull-request payloads also cannot use the proposed `commits[0].modified` expression. The proposed implementation uses Bash, jq, and a before/after Git diff covering the complete push, including added/deleted/renamed paths, with merge-base handling for initial PR events and conservative handling of unavailable history.
- The planned reusable-workflow refactor must remove Python orchestration, keep the automatic caller at three jobs, and use a successful-deployment source fingerprint before reusing output so a later unrelated commit cannot hide an earlier failed application deployment. No workflow implementation has been changed during this design discussion.

## 2026-10-26 — Independent reusable-workflow design and path-filter feasibility

- AI assistance: OpenCode (GPT-6.1 Sol) assessed the requested three-job automatic caller and independent database/backend/frontend reusable workflows. Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Checked the current workflow call graph and GitHub's official workflow-syntax/reusable-workflow documentation. Native `paths` filters gate whole event-triggered workflows, not individual jobs or calls through `workflow_call`; using them alone cannot both select application builds independently and ensure the complete stack on every PR.
- Proposed moving change detection and provider dependency discovery inside the reusable workflows: database credentials resolved privately through Neon in the consuming job, backend deployment URLs resolved through Vercel, and no cross-workflow deployment calls or credential outputs. The automatic caller would contain only ordered database/backend/frontend calls. Standalone deployments require existing dependencies and fail clearly instead of deploying another module implicitly. No workflow implementation has been changed for this design discussion.

## 2026-10-26 — Prefix-free backend routes and browser-aware deployment checks

- AI assistance: OpenCode (GPT-6.1 Sol) implemented the requested removal of the backend `/api` prefix across FastAPI routes, frontend SSR/runtime URL construction, tests, deployment probes, and current documentation. Author attribution: `@ElectroluxV2` (Mateusz Budzisz, reverified with `gh api user`).
- Added failing-then-passing root-route and runtime-URL regressions, explicit rejection of old prefixed routes, and a negative CORS preflight test. Tightened frontend deployment verification to require anonymous backend GET/preflight access plus a successful serialized SSR HttpClient response; URL-only transfer state and provider sign-in redirects cannot pass.
- Reconfirmed that backend preview root GET/preflight requests are still intercepted by Vercel Authentication (302, no CORS header). Protection changes remain unapproved; the stack must not be called browser-ready while that policy blocks access. Progress and the outstanding access-policy/exact-frontend-hostname questions remain on PR #14.
- Follow-up: the user approved removing Vercel Authentication from the backend project and requested dashboard instructions. Checked Vercel's official documentation and provided the project-specific toggle/save steps, explaining that existing backend deployments also become public and that frontend protection remains unchanged. No provider setting has been changed by the agent; verification awaits the dashboard change. Communication now stays in this chat, as requested.
- Validation: 32 controller tests, seven backend tests with nine subtests, four Angular tests, lint/format/build, and seven-workflow/action-lock verification passed. Repeated real Chrome hydration against the rebuilt root-endpoint frontend: reachable backend transfers one HTTP response with zero hydration refetches; a sign-in redirect reproduces the missing successful HTTP cache and CORS error. The new CI parser accepts/rejects the corresponding actual SSR HTML, and the anonymous live probe fails explicitly on Deployment Protection.

## 2026-10-26 — Browser CORS and Angular HTTP transfer-cache diagnosis

- AI assistance: OpenCode (GPT-6.1 Sol) investigated the reported browser CORS error and missing HttpClient transfer state. Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Reproduced backend preview GET and preflight requests redirecting to Vercel sign-in before FastAPI CORS runs. Previous authenticated CI probes bypassed that protection and therefore did not demonstrate browser accessibility.
- Exercised the unchanged production Angular build through SSR and actual headless Chrome hydration using isolated public/protected backend fixtures. A public successful response produced one serialized HTTP response, zero duplicate hydration requests, and a fresh request only on explicit reload. A protected login redirect produced no successful HTTP response to transfer, one hydration request, and a browser CORS error. Both cases still transferred the backend URL. The working-app assertion fails against the protected fixture.
- Posted reproduction evidence, ranked hypotheses, and questions on PR #14: confirm the exact frontend hostname and whether backend preview APIs may be public. No application source or deployment-protection settings were changed; the fix remains blocked on that access-policy decision. Temporary browser fixtures and dependencies are isolated in the approved temporary debug directory, not added to the repository.

## 2026-10-26 — Approved ordered CI/CD and sample database implementation

- AI assistance: OpenCode (GPT-6.1 Sol) resumed the approved workflow redesign: three reusable workflows plus database/backend/frontend manual entry points and one ordered automatic entry point, native path planning, per-target concurrency, stable URLs, and runtime dependency wiring.
- Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Added SQLAlchemy models and an Alembic sample inventory migration following Neon's Python/FastAPI migration guide, direct migration versus pooled application credentials, explicit Neon copy-on-write branch preparation, and the official Neon schema-diff PR comment action. Remote creation requires the repository's Neon API key and project configuration.
- Verified that the public Vercel create-deployment API documents a new build for `deploymentId`, not a zero-build preview clone. Retained sanitized GitHub prebuilt-output artifacts as the fallback for unchanged applications rather than silently rebuilding; no OCI registry. Runtime credentials are stripped before upload, applied only after upload/restoration, and never cross job outputs. Added policy, artifact safety, migration, and sample backend tests.
- Fixed frontend client-rendered startup by loading public runtime configuration before Angular resolves its backend URL, while preserving SSR transfer state. Folded in pending fourth-round changes: no API discovery stub, explicit-only CORS, annotated pytest, and shell-independent Portless commands using native `PORT` support.
- Progress, provider constraints, required secret names, and final status are reported on PR #14 only, as requested.
- Local validation: 17 deployment/artifact policy tests, five backend tests (plus CORS subtests), four Angular tests, the Alembic migration lifecycle test, Node.js 24 packaging/SSR checks, and native Portless startup checks passed. Regenerated both Python lockfiles with the documented uv 0.13.5 version and verified all seven action-lock entries/workflows. The user added Neon credentials; the project ID is accepted as either a repository variable or secret.
- First live run reached Neon successfully but the branch action returned HTTP 412. Added sanitized provider diagnostics and an idempotent REST branch resolver that inherits project compute settings rather than sending action-specific overrides; no existing branches are deleted.
- Pinned the deployment controller's Ruff target to runner Python 3.12 after a Python-3.14 formatting transformation broke bootstrap parsing. Added a regression test that parses every controller source file with the Python 3.12 grammar before app-specific uv setup.
- The live ordered run created the Neon preview, applied the Alembic/sample schema, posted Neon's schema-diff comment, and deployed both applications successfully. Added authenticated application HTTP checks for inventory/CORS and frontend runtime wiring without disabling deployment protection or exposing bypass credentials to the browser.
- Strict HTTP verification exposed a deployed backend 500 despite Vercel READY status. Added a separate health probe and sanitized runtime-log retrieval to distinguish packaging/bootstrap failures from database binding/connection errors before changing database state.
- The health probe succeeded, narrowing the live failure to the database-facing path. Added explicit deployment-scoped runtime bindings via valueless `--env NAME` (values remain in the process environment, not command arguments). Separately, the retained Python artifact contained only its launcher plus `filePathMap` references; added guarded materialization of application/vendor files and versioned the portable artifact contract. Both gaps have failing-then-passing regression tests.
- Continued live diagnosis under `@ElectroluxV2` (identity reverified with `gh api user`): the latest authenticated inventory probe still returns 500 while health succeeds. Found that Vercel CLI 65 stores exception messages under each request's nested `logs` array, which the diagnostics parser ignored. Added a red/green parser regression for both nested request records and typed message envelopes, preserving credential redaction.
- Live validation subsequently passed in automatic run `40387601983`: the migrated inventory returned one row with the exact frontend CORS origin, and the frontend runtime URL matched the resolved backend. Standalone frontend run `40388075353` also passed its database → backend → frontend sequence with `build=false`; application build/package/artifact steps were skipped and both authenticated HTTP checks passed. Independent backend run `40388076303` likewise reused the ready deployment without an application build and passed inventory/CORS verification. The earlier 500 did not recur on those deployments, but its exact root cause is not proven. Unauthenticated requests still return Vercel sign-in redirects; protection remains unchanged. Rechecked 25 controller tests, five backend tests plus six CORS subtests, the migration lifecycle test, and all seven action-lock entries.

## 2026-10-26 — PR #14 fourth-round work and workflow redesign proposal

- AI assistance: OpenCode (GPT-6.1 Sol) assessed the fourth-round review feedback and prepared local changes for explicit CORS allowlists, annotated pytest reporting, shell-independent Portless commands, and direct Vercel Build Output packaging without an API stub. The user selected the existing Vercel–Neon integration for preview database management.
- Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- The fifth-round request asked for a workflow design before implementation. Posted the proposed three reusable workflows and four entry workflows, with Mermaid diagrams, dependency resolution, selective builds, runtime frontend configuration, and provider constraints in [the PR discussion](https://github.com/Renters-Sailors/rent-n-sail/pull/14#issuecomment-6423310377).
- Implementation is paused pending design feedback. The fourth-round changes remain local and unpushed; further discussion stays on GitHub as requested.

## 2026-10-26 — PR #14 third review round

- AI assistance: OpenCode (GPT-6.1 Sol) assessed the 11 third-round review threads on [PR #14](https://github.com/Renters-Sailors/rent-n-sail/pull/14) and simplified the configuration, tests, and workflow failure checks.
- Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Removed all built-in CORS domains and preview patterns. Backend CORS now reads only environment configuration and denies cross-origin access when none is set; the Portless start command supplies its local origin as process configuration. Refactored CORS tests to use explicit, synthetic environment values and an application factory, without deployed-domain fixtures.
- Moved the Vercel-compatible default SSR export into `src/server.ts` before compilation; retained only the discovery re-export under `api/`. Removed the explicit localhost host allowance and URL scheme check, while retaining protection against serializing URL credentials to the browser. Removed the proxy-specific test and used nullish coalescing with a `never`-returning throw helper, since TypeScript does not support literal throw expressions.
- Made `.DS_Store` and `Thumbs.db` exclusions repository-wide, and shortened both workflow gates to `contains(steps.*.outcome, 'failure')`, using the outcome array directly rather than joining it into a string.
- Verification: four backend configuration/CORS tests and two Angular tests passed, along with Ruff, ESLint, formatting, and the Node.js 24 production build. The compiled default handler and API discovery entry are identical and rendered backend data over HTTP for both Portless and Vercel hostnames. Checked all eight backend and sixteen frontend failure combinations, repository-wide system-file ignores, local CORS environment overrides, and YAML language annotations. Action-lock verification passed; actionlint passed with the existing narrow syntax-support exceptions.

## 2026-10-26 — PR #14 second review round

- AI assistance: OpenCode (GPT-6.1 Sol) assessed the second-round review comments on [PR #14](https://github.com/Renters-Sailors/rent-n-sail/pull/14), including the requested direct frontend-to-backend calls.
- Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Added workflow error annotations, deployment URL outputs and run summaries, and GitHub Environments linked to the deployed URLs. Workflow-level concurrency queues each project's production or PR preview environment without cancelling active or pending runs (`queue: max`, subject to GitHub's 100-pending-run limit).
- Nested cached CLI setup inside deployment, removed redundant event/branch deployment gates while retaining the fork-PR credential guard, and mapped non-main manual runs to preview deployments. Backend Python now follows `pyproject.toml` through uv's activated environment and caches managed interpreter installations. Frontend lint, format, Vitest tests, and build finish before a combined failure gate; Vitest uses its GitHub Actions reporter.
- Removed backend proxy rewrites and the transfer-cache origin map. SSR transfers the configured public backend API URL to the browser with Angular `TransferState`, so both use the backend directly. Added configurable, restricted backend CORS defaults for localhost, the production frontend, and this project's deployment domains under the `rent-n-sail` Vercel team, with tests rejecting foreign origins.
- Follow-up review: consolidated the three tracked `.gitignore` files into the repository-root file, preserving frontend/backend path scopes and the VS Code file exceptions. Checked the resulting ignore behavior against the original rules for representative paths.
- Follow-up review: configured Portless for local frontend/backend development, with a pinned frontend development dependency, stable `.localhost` URLs, dynamic backend ports, local SSR host handling, and the local CORS origin. Documented interactive CA/HTTPS setup without modifying system trust or privileged ports. Verified both start scripts through an isolated, unprivileged HTTP Portless proxy: the backend served `/api`, and the frontend rendered backend data via SSR.
- Verification: frontend lint, three Angular tests, and production build passed; backend Ruff checks and three CORS tests passed. A real SSR smoke test verified the direct API URL in serialized state. An intentionally failing Vitest fixture emitted a GitHub error annotation. Mock CLI checks covered URL outputs/summaries, preview/manual/production arguments, missing config, and CLI failure annotations; the frontend gate was checked against all failure combinations. Verified uv selects Python 3.14 from project metadata. ShellCheck and action-lock verification passed; actionlint uses narrow exceptions for its unsupported `$/` syntax and documented `concurrency.queue` property.

## 2026-10-26 — PR #14 review feedback

- AI assistance: OpenCode (GPT-6.1 Sol) assessed the 13 review threads on [PR #14](https://github.com/Renters-Sailors/rent-n-sail/pull/14), implemented the requested workflow simplifications, and prepared replies explaining the changes and deployment architecture.
- Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Extracted cached CLI setup into its own composite action, moved non-secret Vercel settings to workflow-level environments, removed token arguments and duplicate command branches, and required explicit existing config files. Preview branch selection uses GitHub's built-in `GITHUB_HEAD_REF` directly.
- Consolidated each workflow into one job, shared path filters and deployment conditions with YAML anchors, removed pnpm setup from backend validation, and made Angular builds unconditional after successful checks. pnpm and Node.js versions now come from `frontend/package.json`; the shared CLI setup skips frontend dependency installation and reuses an initialized toolchain. Deployment credentials remain scoped to the guarded deployment step, and merging backend jobs preserves uv for the Vercel Python build.
- Documented why the Angular SSR function adapter and same-origin API rewrites are needed, explained the separate frontend/backend/Neon roles and local-only scope of Portless, and linked Vercel's system-variable documentation beside the allowed-host variables.
- Verification: frontend ESLint, formatting, Angular unit tests and production build passed; backend Ruff lint and formatting passed. The extracted setup installed Vercel 65.2.0. Exercised preview/production command arguments, missing configs, and pull/build failures using a mock CLI, and rendered backend fixture data through the real compiled SSR adapter under a Vercel preview hostname. Actionlint passed with its existing narrow exception for `$/` action syntax; ShellCheck and the online action-lock verification passed.

## 2026-10-26 — Personal commit signing for this clone

- AI assistance: OpenCode (GPT-6.1 Sol) configured this clone to sign commits with the author's personal GitHub identity and SSH signing key.
- Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Set repository-local personal identity and SSH signing using `electroluxv2@gmail.com` and `~/.ssh/github-personal.pub`, with commit signing enabled and a clone-local allowed-signers file. Global Git configuration is unchanged.
- Verification: confirmed the personal key is registered with GitHub for signing and the personal email was used by an earlier Verified commit. Created an unreferenced signed test commit and verified its signature, key fingerprint, author email, and committer email without changing branch history.
- Follow-up AI assistance: prepared the two recent commits for re-signing with personal author and committer attribution and a force-with-lease push, as requested.

## 2026-10-26 — YAML language injection comments

- AI assistance: OpenCode (GPT-6.1 Sol) checked all YAML files for embedded shell scripts and added the existing `# language=bash` injection comment to the three unannotated `run` blocks in the shared Vercel deployment action. Workflow scripts already had the comments; executable content is unchanged.
- Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Follow-up AI assistance: prepared the language injection comments for commit and push to `cd` at the author's request, using the personal SSH remote.

## 2026-10-26 — Installed Vercel CLI caching

- AI assistance: OpenCode (GPT-6.1 Sol) implemented caching of the installed Vercel CLI in the shared deployment action so exact cache hits skip installation.
- Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- The cache key includes the runner OS and architecture, Node.js version, pnpm version, and Vercel CLI version. Cold runs install into a dedicated tool-cache directory with project-local package links and allow the required `esbuild` build script. The cache is saved immediately after installation so subsequent deployment failures do not prevent reuse.
- Disabled the backend pnpm store cache that required a nonexistent pnpm lockfile. Regenerated `actions.lock` with `gh actions-lock`, including migration of shared-action references to the pinned `$/` syntax. Removed trailing whitespace from the backend lint/format failure condition that made it unconditional.
- Verification: using pnpm 12.15.0, Node.js 24.22.1, and Vercel 65.2.0, executed the action's installation scripts, archived the CLI, deleted its installation and package store, and restored the archive. The restored CLI passed `--version` and `build --help` without reinstalling. ShellCheck and `gh actions-lock --verify` passed. Actionlint passed with a narrow exception for the supported `$/` syntax that actionlint 1.7.12 does not yet recognize.
- Follow-up AI assistance: prepared the validated changes for commit and push to `cd` at the author's request, using the personal SSH remote.

## 2026-10-26 — Backend CI cache failure diagnosis

- AI assistance: OpenCode (GPT-6.1 Sol) cloned the repository using the personal SSH alias `ghp`, checked out `cd`, selected the personal GitHub CLI account, and investigated [Backend CI run 40340937710](https://github.com/Renters-Sailors/rent-n-sail/actions/runs/40340937710).
- Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Root cause: both backend `pnpm/setup@v3.1.1` steps enable caching, which requires a pnpm lockfile. The Python backend has `uv.lock` but no `pnpm-lock.yaml`, so cache restoration fails with `Some specified paths were not resolved, unable to cache dependencies.`
- Verification: reproduced the exact failure using the pinned upstream action (`a0881977cd8ea73b1ed212236c99ca10dcc80cf4`) against a temporary snapshot of the failing commit. Changing only `cache` to `false` completed pnpm and Node.js setup successfully. Recommended setting `cache: false` in both backend pnpm setup steps.

## 2026-10-26 — pnpm setup in Vercel deployment jobs

- AI assistance: Junie (OpenAI GPT-6 Luna) compared the frontend/backend GitHub Actions setup steps and explained why pnpm setup is currently outside the shared Vercel deployment composite action.
- Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Both projects use Node.js 24. The frontend omits the pnpm version because `frontend/package.json` pins `packageManager` to `pnpm@12.15.0`; the backend has no `package.json`, so its workflow explicitly supplies `version: 12.15.0`. Moving setup into the composite action is possible, but the composite currently owns only Vercel-specific deploy steps while each caller owns runtime and cache setup.

## 2026-10-26 — Job-level Vercel deployment environment

- AI assistance: Junie (OpenAI GPT-6 Luna) updated the GitHub Actions deployment workflows to define Vercel deployment settings in dedicated job-level environments rather than composite-action step environments.
- Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Split deployment into separate jobs gated on successful CI; only those jobs receive the Vercel token and project configuration, keeping credentials unavailable to lint/test steps. The shared composite action now consumes the caller job's environment.

## 2026-10-26 — GitHub Actions Vercel CI/CD

- AI assistance: Junie (OpenAI GPT-6 Luna) inspected the frontend/backend Vercel projects and existing CI workflows, researched Vercel's prebuilt deployment flow, and configured GitHub Actions to build and deploy both projects from Actions rather than Vercel's cloud build service.
- Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Added production deployments on `main` and same-repository PR preview deployments, using a shared composite action to run `vercel pull`, `vercel build`, and `vercel deploy --prebuilt` on GitHub Actions. The CLI is installed with pnpm, whose GitHub Actions cache is enabled; fork PRs never receive the Vercel token.
- Stored the Vercel organization and service project IDs as GitHub repository variables and verified the `VERCEL_TOKEN` secret is configured. Regenerated and verified `.github/workflows/actions.lock`.
- Formatted the existing frontend README and spec that the repository-wide format check flagged, so the CI gate can pass.
- Routed the frontend root through its Angular SSR function and allowlisted Vercel’s runtime, branch, and production hostnames to satisfy Angular’s SSR host validation without a broad wildcard.

## 2026-10-26 — Separate Vercel projects and Neon database

- AI assistance: Junie (OpenAI GPT-6 Luna) reviewed the repository's Vercel services configuration and frontend/backend API setup, researched current Vercel monorepo, rewrite, FastAPI, and Marketplace storage documentation, and advised how to deploy the frontend and backend independently with Neon Postgres.
- Author attribution: `@ElectroluxV2` (Mateusz Budzisz, verified with `gh api user`).
- Recommended two Vercel projects rooted at `frontend` and `backend`, with Neon provisioned as a Marketplace database resource and connected to the backend project; advised configuring the frontend `/api` external rewrite and backend URL environment variable for SSR.
- Follow-up AI assistance: used Vercel CLI to create and configure `rent-n-sail-frontend` and `rent-n-sail-backend`, provisioned the free Neon resource `rent-n-sail-db`, and deployed the backend. The first Angular deployment built successfully but produced no Vercel routes; added an explicit Node function entrypoint for Angular SSR and documented the `/api` backend proxy. The frontend redeployment is pending verification.

## 2026-10-24 — Vercel services deployment

- AI assistance: Junie (OpenAI GPT-6 Luna) inspected the repository and Vercel/Angular documentation, configured Vercel services, aligned FastAPI routes with `/api`, and implemented the Angular SSR connectivity check, transfer-cache mapping, and signal-form retry action.
- Author attribution: `@ElectroluxV2` (verified with `gh repo view --json owner,name,url`).
- The user confirmed a `frontend` → `backend` call. Added the `BACKEND_URL` service binding and wired it to the existing `/api` hello endpoint; browser hydration uses the public `/api` path and the transfer-cache origin map.
- Verification: Angular tests and production build pass; the build prerenders zero static routes. `vercel.json` parses with the expected binding and rewrite order. `vercel dev` could not run because Vercel CLI is unavailable, and standalone backend runtime checks could not run because FastAPI is not installed locally.
- Follow-up AI assistance: explained the distinction between FastAPI `root_path` (proxy mount metadata) and route prefixes, and centralized backend routes under `APIRouter(prefix="/api")` without changing public URLs.

## 2026-10-24 — Backend Ruff configuration

- AI assistance: OpenAI GPT-5.6 Terra Fast inspected the backend's Python version, FastAPI application, dependencies, and existing Ruff settings, then added a Ruff configuration targeting Python 3.15 with import sorting, bugbear, simplification, and modernization lint rules while retaining the requested formatter style. After the branch was rebased onto a Python 3.14 baseline, it aligned Ruff's target version to Python 3.14.
- Author attribution: `@Buzeqq` (verified with `gh api user`).

## 2026-10-24 — Local frontend-backend development

- AI assistance: OpenAI GPT-5.6 Terra reproduced the missing `BACKEND_URL` SSR failure, removed the server-side dependency on that binding, and configured Angular's development proxy for browser and SSR `/api` requests. Local FastAPI and Angular ports are explicitly configured as 5000 and 4200, respectively, without environment variables.
- Author attribution: `@Buzeqq` (verified with `gh api user`).
- The Vercel service binding is no longer needed: both SSR and browser requests use the public `/api` rewrite.
- Verification: Angular build and tests pass; FastAPI starts on `127.0.0.1:5000`; backend Ruff checks pass.

## 2026-10-24 — Python `Any` removal

- AI assistance: OpenAI GPT-5.6 Terra replaced `typing.Any` in the WebAuthn API payload and challenge annotations with `object`, retaining the unstructured payload boundary without using `Any`.
- Author attribution: `@Buzeqq` (verified with `gh api user`).

## 2026-10-24 — Consolidated AuthTuna passkey flow

- AI assistance: OpenAI GPT-6 Luna consolidated passkey startup, assertion/login, new-account registration, credential verification, and session creation behind one frontend-facing `/api/passkey-flow` endpoint, using AuthTuna's passkey core, user manager, credential manager, and session helper. New users receive an autogenerated username; an optional authenticated username-update endpoint is available.
- Author attribution: `@Buzeqq` (verified with `gh api user`).
- Clicking StartFlow first attempts login using `/api/passkey-flow/login`. If login fails, the UI reveals a username form; submitting it starts registration at `/api/passkey-flow/register/init`, and the browser's attestation is completed at `/api/passkey-flow/register/complete`.
- Backend does not query or load a list of stored credentials. Login checks only the credential ID returned by the browser. Account creation is explicit, not automatic.
- Verification: Angular build/tests, backend Ruff, and FastAPI regression tests for login, unknown credentials, registration initialization, and completion acknowledgment pass; a real device passkey was not used.
- Replaced broad passkey payload annotations with `TypedDict` definitions for only the assertion/attestation fields consumed by the backend; dynamic options remain `dict[str, object]`.
- Replaced raw AuthTuna `ValueError` details in login and registration responses with generic client errors; regression tests assert verifier details are not exposed.
- Added module-level Python logging for passkey flow milestones and generic failure reasons, without logging usernames, credential IDs, challenge values, or verifier exception details.
- Disabled unused AuthTuna UI, MFA, admin, and passwordless features, and set `ONLY_MIDDLEWARE` so unused AuthTuna routers are not mounted. Passkey core and session middleware remain enabled for the custom flow.

## 2026-10-24 — Colored IDE backend logs

- AI assistance: OpenAI GPT-6 Luna found the IDE run configuration lacked a TTY, causing Rich-based FastAPI logs to disable ANSI colors. Added `FORCE_COLOR=1` and `TERM=xterm-256color` to `.run/Backend.run.xml`.
- Author attribution: `@Buzeqq` (verified with `gh api user`).

## 2026-10-25 — Auth router import diagnosis

- AI assistance: OpenAI GPT-6 Luna traced the router type error to importing the `auth.register.router` module instead of its `APIRouter` object, and identified missing package exports/imports in the new vertical slice.
- Author attribution: `@Buzeqq` (verified with `gh api user`).

## 2026-10-25 — Shared auth types organization

- AI assistance: OpenAI GPT-6 Luna recommended keeping shared WebAuthn `TypedDict` payloads in `auth/common/passkey_types.py`, endpoint-specific Pydantic request models within each vertical slice, and router aggregation separate from shared types.
- Author attribution: `@Buzeqq` (verified with `gh api user`).

## 2026-10-26 — Ruff line wrapping explanation

- AI assistance: OpenAI GPT-6 Luna explained Ruff's parenthesized line wrap around the 89-character assignment; the configured default line length is 88 characters.
- Author attribution: `@Buzeqq` (verified with `gh api user`).

## 2026-10-26 — Passkey sign-counter update explanation

- AI assistance: OpenAI GPT-6 Luna inspected AuthTuna's `update_credential_on_login` and explained that it persists the WebAuthn signature counter and last-used time after successful authentication.
- Author attribution: `@Buzeqq` (verified with `gh api user`).

## 2026-10-24 — WebAuth passkey flow

- AI assistance: OpenAI GPT-5.6 Terra generated the Angular `WebAuthFlowComponent` with the pnpm Angular CLI and initially added custom in-memory WebAuthn endpoints. At the user's request, those endpoints were replaced with AuthTuna's built-in passkey routes, account signup, and SQLite persistence.
- Author attribution: `@Buzeqq` (verified with `gh api user`).
- A new user provides a name after the built-in passkey login endpoint reports an unknown credential; AuthTuna then creates the account and passkey and persists both in `backend/authtuna_dev.db`. The local SQLite database is ignored by Git.
- Verification: Angular build and tests pass. Ruff passes, and FastAPI TestClient verifies `/api/health` plus AuthTuna's `/api/passkeys/login-options`. A real browser/device ceremony was not run.

## 2026-10-24 — FastAPI development run configuration

- AI assistance: OpenAI GPT-5.6 Terra reproduced the FastAPI CLI error, identified that the IDE configuration and contributor command omitted the application path, and added the backend `main.py` path to both commands.
- Author attribution: `@Buzeqq` (verified with `gh api user`).

## 2026-10-31 — Rental discovery page SCSS simplification

- AI assistance: Claude Opus 5.5 simplified `discover-rental-page.component.scss` without changing its look. It flattened the nesting, removed declarations that only restated defaults or the global Material Symbols class, dropped unused font variation axes, the unused `small` rule and the unused Londrina Sketch font, and merged related properties into shorthands. It then reordered and grouped the properties by hand (positioning, layout, box, typography, visuals, interaction), because oxfmt 0.74 cannot sort CSS properties.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).

## 2026-11-01 — Contact page and app navigation

- AI assistance: Claude Opus 5.5 added a standalone `ContactPageComponent` (`frontend/src/app/contact-page/`) with mock business details, opening hours and two contact people, rendered with `address`, `tel:`/`mailto:` links and a definition list. It registered a `contact` route next to the default rental discovery route and replaced the placeholder `<nav>` in the app root with `routerLink`/`routerLinkActive` links to both pages, keeping the flex layout so the discovery page still fills the remaining viewport. At the user's request, the active link is marked only with an underline (no bold), so the text does not shift.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `pnpm exec ng build` and `pnpm exec eslint .` pass; files formatted with oxfmt. Not checked in a browser.

## 2026-11-01 — Rental discovery page SCSS nesting

- AI assistance: Claude Opus 5.5 grouped the rules in `discover-rental-page.component.scss` with native CSS nesting that follows the template structure: `img` under `article`, `h2`/`p` under `main` (with `.capacity` as `&.capacity` on `p`), and `ul`/`li`/`strong`/`button` under `.booking-panel`. Declarations are unchanged.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `pnpm exec ng build` passes and oxfmt reports the file as formatted. Not checked in a browser.

## 2026-11-01 — Rental discovery page dotted overlay

- AI assistance: Claude Opus 5.5 added a black dot pattern (`radial-gradient`, 1px dots on a 6px grid at 60% opacity) as an extra background layer on the blurred gradient overlay (`article::before`) in `discover-rental-page.component.scss`. The existing mask makes the dots fade in together with the blur, from transparent at the top to full at the bottom. This is an experiment the user asked to try.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `pnpm exec ng build` passes; file formatted with oxfmt. Not checked in a browser.
- Follow-up: at the user's request, Claude Opus 5.5 removed `backdrop-filter: blur(8px)` from the overlay so the user can judge whether the dots and gradient are enough without the blur. Not checked in a browser.
- Follow-up: at the user's request, Claude Opus 5.5 changed the overlay mask to `linear-gradient(transparent, #000 50%)`, so the dots reach full strength halfway up the overlay instead of only at the bottom. Not checked in a browser.
- Follow-up: at the user's request, Claude Opus 5.5 brought the blur back, tried 16px, and settled on `backdrop-filter: blur(10px)` (was 8px). Not checked in a browser.

## 2026-11-01 — Rental discovery page scroll progress bar

- AI assistance: Claude Opus 5.5 added a CSS scroll-driven progress bar to `discover-rental-page.component.scss`, with no fallback, as the user asked. The scrolling `section` defines a named `scroll-timeline` (`--discover-scroll`), `:host` lifts it with `timeline-scope`, and a 4px orange (`#ff8c00`) `:host::before` bar at the top scales from 0 to full width as the section scrolls to its end. No template change was needed. It also added `.claude/launch.json` with a `frontend` dev server entry, used to check the bar in the browser.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `pnpm exec ng build` passes; file formatted with oxfmt. In Chromium 152 the bar's scale follows the scroll (50% → `0.5`, end → `1`), and a screenshot at 30% scroll shows the bar about 30% wide.

## 2026-11-01 — Book button hover border

- AI assistance: Claude Opus 5.5 removed the `translateY(-1px)` hover lift from the "Book now!" button in `discover-rental-page.component.scss`, so the button no longer moves on hover. As a proposal, it added an animated hover border: the button always has a 3px transparent border (padding reduced by 3px to keep the original size), and on hover a `conic-gradient` streak (orange, white, orange over the brand green) spins around it. The streak is driven by a registered `@property --book-border-angle` animated from 0 to 360deg every 1.5s.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `pnpm exec ng build` passes; file formatted with oxfmt. In the browser pane the button keeps the same size and position on hover (352 × 47.6px), and the border angle animates.

## 2026-11-01 — Keep the discovery page alive across navigation

- AI assistance: Claude Opus 5.5 added `KeepAliveRouteReuseStrategy` (`frontend/src/app/keep-alive-route-reuse-strategy.ts`), a `BaseRouteReuseStrategy` subclass that detaches and stores the component of any route with `data: { keepAlive: true }`, and reattaches the same instance when the user comes back. It marked the discovery route with `keepAlive` and provided the strategy as `RouteReuseStrategy` in `app.config.ts`.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `pnpm exec ng build` and eslint pass; files formatted with oxfmt. In the browser pane, navigating Discover → Contact → Discover returns the same `app-discover-rental-page` element. The section's scroll position resets to the top, because the browser drops it while the element is out of the document.

## 2026-11-01 — Window scrolling for built-in scroll restoration

- AI assistance: Claude Opus 5.5 moved the discovery page's scrolling from its inner `section` to the document, so Angular's built-in `withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })` (added in `app.config.ts`) can restore it. The user asked for no hand-written scroll code. Changes:
  - `styles.scss` defines `--nav-height` (2.75rem) and applies `scroll-snap-type: y mandatory` with `scroll-padding-top` to `html:has(app-discover-rental-page)`, so only the discovery page snaps.
  - `app.scss` makes the shell `min-height: 100svh` instead of a fixed height and makes the nav a sticky bar of `--nav-height` with a `Canvas` background.
  - `discover-rental-page.component.scss` drops the section's overflow, snap and named timeline. Articles are `100svh - --nav-height` tall, and the progress bar is `position: fixed` under the nav and driven by `scroll(root)`.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `pnpm exec ng build` and eslint pass; files formatted with oxfmt. In the browser pane: scroll to the 4th rental → Contact (starts at top) → browser Back returns to the 4th rental at 2172px with the bar at 21%. As Angular designs it, clicking the Discover nav link scrolls to the top instead of restoring.
- Follow-up: the user found the window-scroll setup too complex for what it gave, since it only restored on browser Back and not when clicking the Discover link. At the user's request, Claude Opus 5.5 reverted all of it (`styles.scss`, `app.scss`, the discovery SCSS and `withInMemoryScrolling`) back to the section-based scrolling. Instead, `DiscoverRentalPageComponent` now listens to router events: on `NavigationStart` it saves the `#scroller` section's `scrollTop` while the section is still in the document, and on `NavigationEnd` it puts it back once the kept-alive page is reattached. Verified in the browser pane: scroll to the 5th rental → Contact → click Discover returns to the 5th rental (2896px), with the progress bar at 29%. `ng build` and eslint pass.

## 2026-11-01 — Router wrapper background

- AI assistance: Claude Opus 5.5 gave the `section` around `<router-outlet>` in `app.scss` a background of `color-mix(in srgb, Canvas, CanvasText 5%)`. This sets the contact page slightly apart from the nav in both light and dark mode, using system colors with no new tokens.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: checked the contact page in the browser pane in dark and light mode; the content area is slightly lighter (dark) or greyer (light) than the nav.

## 2026-11-01 — My reservations page and nav icon

- AI assistance: Claude Opus 5.5 generated `MyReservationsPageComponent` with `ng generate component my-reservations-page --skip-tests` (no spec, per AGENTS.md), so it currently shows the CLI placeholder. It added a `reservations` route titled "My reservations — Rent'n'Sail" and an `event_upcoming` Material Symbols icon link (`aria-label="My reservations"`) pinned to the right of the nav with `margin-left: auto`. It also added `event_upcoming` to the `icon_names` subset in `index.html`, because the font only downloads the icons listed there.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `pnpm exec ng build` and eslint pass; files formatted with oxfmt. In the browser pane the icon shows in the top-right corner and clicking it opens `/reservations`.

## 2026-11-01 — Mock booking page at /:id/:slug

- AI assistance: Claude Opus 5.5 added a mock booking page for a single rental item.
  - Moved the equipment list out of `DiscoverRentalPageComponent` into a shared `frontend/src/app/rental-equipment.ts`. It gives each item a numeric `id` (1–15) and adds `findRentalEquipment`, the three rental durations and a `rentalPrice` helper.
  - Generated `BookingPageComponent` with `ng generate component booking-page --skip-tests`. It shows the item's photo, name and description and a mock form (duration radios with prices, date, start time, people within the item's capacity). Submitting only shows a "mock booking — nothing was reserved" notice. Unknown ids show "Equipment not found".
  - Routes: `:id/:slug` renders the page with a title resolver ("Book <name> — Rent'n'Sail"). `:id` uses a `redirectTo` function that adds the slug (`/3` → `/3/sailboat`) and sends unknown ids to `/`. The `:id` param reaches the component as an input through `withComponentInputBinding()`.
  - The discovery page's "Book now!" button now navigates to `/<id>/<slug>` with `routerLink`.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `pnpm exec ng build` and eslint pass; files formatted with oxfmt. In the browser pane: `/3` redirects to `/3/sailboat`; Book now on the 2nd item opens `/2/stand-up-paddleboard`; choosing Full day updates the button to $80.00; submitting shows the mock notice; `/99` redirects home. A wrong slug for a valid id (e.g. `/3/kayak`) is not corrected.

## 2026-11-01 — Rental equipment service with a resource signal

- AI assistance: Claude Opus 5.5 generated `RentalEquipmentService` with `ng generate service rental-equipment/rental-equipment --skip-tests`, using Angular 22's auto-provided `@Service()` decorator. It moved the data file next to it as `rental-equipment/rental-equipment.ts`, which keeps the types, mock data, durations and `rentalPrice`.
  - The service exposes `equipment = resource({ loader, defaultValue: [] })`. The loader is a mock `Promise` to be swapped for an HTTP call later. An async `find(id)` serves places that can't read signals.
  - The discovery page reads `equipment.value()` (now tracked by `id`). The booking page computes its item from the same resource and shows "Equipment not found" only once loading is done.
  - The `:id` redirect function and the booking title resolver are now async and use `inject(RentalEquipmentService).find(...)`.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `pnpm exec ng build` and eslint pass; files formatted with oxfmt. In the browser pane, `/5` → `/5/canoe`, the discovery page shows all 15 items, and Book now on the 7th opens `/7/pontoon-boat`. Server-rendered HTML includes all 15 articles on `/` and the "Book Sailboat" heading and title on `/3/sailboat`; `/3` and `/99` get server 302 redirects.
- Follow-up: at the user's request, Claude Opus 5.5 laid out the booking page header as a two-column grid from 40rem up: the image (spanning two rows) top left, the name and description stacked to its right, and the form or confirmation full width below with 1.5rem of space. The grid applies only when the image exists (`main:has(.hero)`), so "Equipment not found" is unaffected, and narrow screens keep the single column. The image `sizes` were updated to match. Checked in the browser pane at desktop and mobile widths; `ng build` passes.

## 2026-11-01 — Image view transition, rental image component, overscroll

- AI assistance: Claude Opus 5.5 added a shared-element view transition for rental photos between the discovery and booking pages.
  - Turned on Angular's `withViewTransitions({ skipInitialTransition: true })`. The skip option stops the browser aborting a transition on the first load ("Transition was aborted because of invalid state").
  - At the user's request, generated `RentalImageComponent` (`rental-equipment/rental-image/`) with `ng generate component ... --skip-tests`. It takes the item `id` (plus optional `priority` and `sizes`), looks the item up in `RentalEquipmentService`, and renders only the `NgOptimizedImage` fill `<img>` with `view-transition-name: rental-<id>` and `view-transition-class: rental-image`. Its host is `display: contents`, so the image still fills the parent's positioned box. Both pages now use it instead of their own `<img>`, and their duplicated image rules were removed.
  - `styles.scss` keeps the morphing snapshots `object-fit: cover` (`::view-transition-old/new(*.rental-image)`) so they don't stretch.
  - At the user's request, `styles.scss` sets `overscroll-behavior: none` on every element (`*`), so neither the page nor inner scroll areas bounce, chain scroll or pull to refresh. Follow-up: narrowed to `overscroll-behavior-y: none` so the macOS trackpad swipe back/forward (horizontal overscroll) keeps working.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `pnpm exec ng build` and eslint pass; files formatted with oxfmt. In the browser pane, Book now runs a view transition with `::view-transition-group(rental-1)` / `(rental-3)` morphing into the booking image; a fresh load logs no errors; computed `overscroll-behavior-y` is `none` on `html`, `body` and the discovery list. During testing, transitions in the browser pane aborted whenever the pane had not drawn a frame yet; this was a testing artifact, not an app bug.
- Follow-up (view transition looked broken): pausing the transition halfway showed the old and new pages crossfading on top of each other, the discovery card text disappearing under the photo, and the photo doubled because its two snapshots kept different widths. Claude Opus 5.5 changed the transition in `styles.scss`: the old page (`root` and anything with `view-transition-class: fade`) fades out over 150ms, then the new page fades in over 200ms, while the photo group morphs over 350ms. Both photo snapshots are now `width/height: 100%; object-fit: cover`. The discovery card text (`.rental-content`) gets `view-transition-name: match-element` with class `fade`, so it fades out above the photo. The nav has `view-transition-name: site-nav` so it stays still. Checked by pausing the transition at 75, 175 and 300ms in the browser pane. Because the two pages crop the photo differently (full screen vs 16:9), a slight ghost remains while the two snapshots crossfade.
- Follow-up (transitions only between discover and booking, no photo ghost): Claude Opus 5.5 marked the discovery and booking routes with `data: { rentalImageTransition: true }`. `withViewTransitions`' `onViewTransitionCreated` hook now adds the view transition type `rental-image` when both the leaf `from` and `to` routes have that flag. Skipping other transitions with `transition.skipTransition()` was tried first; it worked, but Angular logged `AbortError: Transition was skipped` in dev mode on every other navigation, so `styles.scss` instead sets `animation: none` on all view-transition pseudo-elements unless `:active-view-transition-type(rental-image)` matches, and scopes the existing fade and morph rules to that type. To remove the ghost, the old photo snapshot (always loaded) is shown unanimated while it moves, and the new snapshot only fades in over the last 100ms. Verified in the browser pane: discover → booking has type `rental-image`, with the photo group (350ms) and root fades (150/200ms), and a single clean photo when paused at 175ms; booking → contact has no type and no animations; no console errors.
- Follow-up (ghosting "sometimes"): pausing booking → discover showed the cause. The last-100ms fade blended the booking page's 16:9 crop with the discovery page's full-screen crop; snapshots are images of the already-cropped element, so they can't line up. Claude Opus 5.5 changed the route data to `rentalImageTransition: 'discover' | 'booking'`, and the hook now adds a `from-discover` or `from-booking` type next to `rental-image`. `styles.scss` shows only the discovery page's snapshot in both directions (`opacity: 0` on the other, no animations on either), since that page is kept alive and its photo is full size and loaded. Testing also showed the neighbouring discovery photo's edge appearing over the nav, because named photos are lifted out of the scroll list. Photos without a partner (`:only-child` old/new) are now hidden. Verified with the 3rd item in both directions, paused at 100, 200 and 300ms: one clean photo, no strip over the nav, no console errors.
- Follow-up (other elements "going bananas"): stepping through the transition showed the neighbouring card's text ("1 person", its Book now button) over the nav. Every card's `.rental-content` had `view-transition-name: match-element`, which lifted all 15 out of the scroll list, including off-screen ones. Claude Opus 5.5 made each `article` a `container-type: scroll-state` container and moved the naming into `@container scroll-state(snapped: y)`, so only the card snapped into view is captured on its own; the rest stay in the page snapshot, clipped by the list. Verified in the browser pane with the 3rd item: only "Sailboat" text is named; going to booking shows no neighbour content over the nav; going back has only the root, nav and `rental-3` groups. `ng build` passes.
- Follow-up (card text popped in "in one frame" on the transition back from booking), reported by @ElectroluxV2: logging the captured groups showed the back transition had no group for the card text. The `@container scroll-state(snapped: y)` naming no longer matched when the kept-alive page was reattached: Chrome works out the snapped state again only a frame after the new snapshot is taken. The text therefore stayed in the root snapshot under the moving photo and appeared when the photo finished. Claude Opus 5.5 switched to nested view transition groups: the discovery `section` is now `view-transition-name: discover-list; view-transition-class: fade; view-transition-group: contain`, every `.rental-content` always has `view-transition-name: match-element; view-transition-class: fade`, and `styles.scss` clips `::view-transition-group-children(discover-list)` with `overflow: clip`, so off-screen cards can't spill over the nav. The scroll-state container is removed. (A scroll-driven, then snap-triggered, fade-in was tried first after a misunderstanding and reverted.) Verified in Chrome 152 in the browser pane with the 3rd item: forward, paused at 100ms, the text fades out above the photo with nothing over the nav; back has `new(match-element)` groups fading in from 150 to 350ms, with scroll restored afterwards. `ng build` passes.
- Follow-up (dotted and blurred card background appeared in one frame after the back transition), requested by @ElectroluxV2: the overlay is the card's `article::before`. It belongs to the list snapshot, drawn under the nested photo group, and a snapshot can't keep a `backdrop-filter` blur on its own, so it could only reappear when the real page came back. Claude Opus 5.5 gave it `transition: opacity 250ms ease-out 350ms` with `@starting-style { opacity: 0 }`. The kept-alive discovery page is re-inserted into the DOM on the way back, so the overlay starts hidden and fades in after the 350ms photo morph. It also fades in on the first load and after other navigations to discovery. Verified in the browser pane by sampling every 60ms going back from the 3rd item: opacity 0 while the transition runs, then 0.40 → 0.72 → 0.94 → 1 after it ends. `ng build` passes. Going to booking, the overlay still vanishes as soon as the transition starts, for the same reason.
- Follow-up (fade the dotted and blurred overlay out going to booking), requested by @ElectroluxV2: Claude Opus 5.5 replaced `article::before` with a real `<div class="overlay" aria-hidden="true">` in the discovery template. A capture of `::before` was tried first, but the run in the browser pane was skipped before anything could be checked. The overlay keeps the same styles plus `view-transition-name: match-element; view-transition-class: fade`, so it is captured on its own and fades out with the card text. A snapshot can't keep a `backdrop-filter`, so only the dots and darkening fade; the blur drops when the transition starts. The `@starting-style` fade-in for the way back stays. Pausing the forward transition showed that the photo was drawn over the list's nested groups (the overlay, and also the card text since the earlier nesting change), because going forward the photo is placed by where it sits on the booking page, outside the list. `styles.scss` now gives `::view-transition-group(discover-list)` `z-index: 1`. Everything visible in the list is captured on its own, so this covers nothing else. Verified in the browser pane: at 60ms going forward, the text and dots are above the photo and fading; going back, 30 `new(match-element)` groups (overlay and text for each card) and the overlay ends at opacity 1; one forward and back run logged no console errors. `ng build` passes.
- Follow-up (remove view transitions): while fixing the photo stutter going to booking, measurements showed that capturing all 15 blurred overlays separately caused 100–160ms frame stalls. Before that fix was verified, @ElectroluxV2 asked to drop the view transition work entirely and keep the image component. Claude Opus 5.5 removed `withViewTransitions` (and its type-tagging hook and helper) from `app.config.ts`; the `rentalImageTransition` route data; all view-transition rules and keyframes from `styles.scss` (the app-wide `overscroll-behavior-y: none` stays); the nav's `view-transition-name`; the discovery list's nested-group setup, the card text naming, and the `.overlay` element, which went back to `article::before` without the `@starting-style` fade; and the `view-transition-name` binding and `view-transition-class` from `RentalImageComponent`, which otherwise stays as is. `ng build` and eslint pass. In the browser pane, Book now and back start no view transitions, the overlay renders, and scroll is restored.

## 2026-11-01 — Booking page people count

- AI assistance: at the user's request, Claude Opus 5.5 removed the "People" number input from the booking form and replaced it with a read-only count, the same one the discovery page shows (the `people_size_increase` icon and e.g. "4–6 people", using `FormatRangePipe` and `I18nPluralPipe`). Added a small `.capacity` style to the booking page.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `ng build` passes.
- Follow-up (capacity under description, people counter next to Book), requested by @ElectroluxV2: Claude Opus 5.5 moved the capacity line out of the form into a `.details` block with the description (the desktop grid now targets `.details` instead of `> p`). The form ends with an `.actions` bar: a `role="group"` people counter (−, "N people" `<output>`, +) joined to the Book button. The count is a `linkedSignal` that resets to the item's minimum capacity, and the buttons disable at the min/max. `add` and `remove` were added to the Material Symbols `icon_names` subset in `index.html`, because the icons were showing as text. Verified in the browser pane: the sailboat goes 4 → 5 → 6 and stops at 6, with − disabled at 4; the kayak at phone width shows "1 person" with no horizontal scroll; no console errors. `ng build` passes.
- Follow-up (counter is for item quantity, not people), clarified by @ElectroluxV2: Claude Opus 5.5 turned the counter into a quantity of the same item. `quantity` is a `linkedSignal` that resets to 1 when the item changes. − is disabled at 1, and there is no upper limit because the mock data has no stock count. The `<output>` shows just the number, labelled "Quantity", and the Book button price is multiplied by the quantity. The capacity line under the description stays. Verified in the browser pane on the sailboat: 1 → $85, 3 → $255, back to 2 → $170; no console errors. `ng build` passes.
- Follow-up (cap quantity), requested by @ElectroluxV2: Claude Opus 5.5 added `maxQuantity = 10` to the booking page and disabled the + button at it. Verified in the browser pane: 12 clicks on + stop at 10 ($850 for the sailboat). `ng build` passes.
- Follow-up (signal form, hide start time for a full day), requested by @ElectroluxV2: Claude Opus 5.5 rebuilt the booking form with Angular 22 signal forms (`@angular/forms/signals`). The model `{ durationId, date, startTime, quantity }` is a `linkedSignal` that resets when the item changes. `form()` uses a schema with `required(date)`, `minDate(date, today)`, `hidden(startTime)` when `durationId === 'full-day'`, `required(startTime)`, and `min/max(quantity, 1/10)`, plus a `submission.action` that sets `booked`. The template uses `[formRoot]` on the `<form>` and `[formField]` on the radios, date and time inputs. Start time is rendered only while `startTime().hidden()` is false, and hidden fields skip validation. The quantity buttons read `quantity().min/max()` from the schema, which replaces the separate `maxQuantity`. Each `RentalDuration` got an `id` (`hour | two-hours | full-day`), because radio fields compare by string value. `[formRoot]` turns off browser validation, so a "Pick a date from today on." message shows under Date once it is touched and invalid. While testing, the native date `min` came out a day early because Angular formats it in UTC. The minimum is now today's local date at UTC midnight, which matches how date inputs report their value. Verified in the browser pane: Full day hides Start time ($340); submitting with no date shows the error and doesn't book; yesterday is rejected and today is accepted; booking then works; 2 hours × 2 = $306; no console errors after a fresh load; server-rendered HTML still has the form. `ng build` passes.
- Follow-up (disable start time instead of hiding it), requested by @ElectroluxV2: Claude Opus 5.5 swapped the `hidden()` rule for `disabled()` with the same full-day condition. The Start time input is always rendered, and `[formField]` sets its native `disabled` (styled at 50% opacity). Disabled fields skip validation, so a full-day booking still submits. Verified in the browser pane: Full day disables Start time, and switching back to 1 hour re-enables it with 10:00 kept; a full-day booking goes through; no console errors. `ng build` passes.
- Follow-up (opening hours for start time), requested by @ElectroluxV2: Claude Opus 5.5 added opening (08:00) and closing (21:00) times to the booking page. A `validate()` rule on `startTime` requires a start between opening time and the latest start that still returns the rental by closing time (closing minus the duration: 20:00 for 1 hour, 19:00 for 2 hours). The start time stays an `"HH:MM"` string compared as text. The built-in `min()`/`max()` rules only take numbers or dates, and Angular only formats native min/max for date inputs, so `[min]`/`[max]` are bound on the time input directly to give the picker the limits. The message (e.g. "Pick a start time from 08:00 to 19:00.") shows under Start time once it is touched. Full day still disables the field, which skips the rule. Verified in the browser pane: 07:30 is rejected; 20:00 passes for 1 hour but fails after switching to 2 hours, and the form will not submit; 19:00 passes; a full-day booking submits; no console errors. `ng build` passes.
- Follow-up (no layout shift from errors), requested by @ElectroluxV2: Claude Opus 5.5 made the Date and Start time error lines always render as `<small class="error" aria-live="polite">`, with the message inside conditionally, and gave `.error` `min-height: 1lh`. Verified in the browser pane: the Start time input and Book button stay at the same positions with no errors, one error and both errors (each line 17px tall). `ng build` passes. A message that wraps to two lines on a narrow screen would still add one line.
- Follow-up (numeric route id), asked by @ElectroluxV2: Claude Opus 5.5 changed the booking page `id` input to `input.required({ transform: numberAttribute })`, so the `:id` route string arrives as a number and the item lookup compares `item.id === this.id()` without `Number(...)`. Verified in the browser pane: `/3/sailboat` shows "Book Sailboat", `/99/nothing` shows "Equipment not found", and Book now from the discovery page opens `/3/sailboat` with no console errors. `ng build` passes.
- Follow-up (whole prices from the backend contract), requested by @ElectroluxV2: Claude Opus 5.5 replaced `hourlyRate` on `RentalEquipment` with `prices: Record<RentalDuration['id'], number>`, the whole price of one unit for each duration. The mock data returned by `RentalEquipmentService` now holds these values, worked out once from the old rates and discounts, so all 15 items show the same prices as before. `rentalPrice()` and `RentalDuration.discount` were removed; durations keep `id`, `label` and `hours` (hours still sets the latest start time). The booking page reads `item.prices[option.id]`, and Book shows `item.prices[duration().id] * quantity`. The discovery page's pricing list, which had the rate math hard-coded per row, now loops over `rentalDurations` and reads `item.prices`. Verified in the browser pane: kayak 18 / 32.40 / 72 and sailboat 85 / 153 / 340 on the discovery page; the booking page matches, and 2 hours × 2 sailboats = $306; no console errors. `ng build`, eslint and oxfmt pass.
- Follow-up (durations as an object), requested by @ElectroluxV2: Claude Opus 5.5 changed `rentalDurations` from an array of `{ id, label, hours }` to an object keyed by id (`hour`, `two-hours`, `full-day`) with `as const satisfies Record<string, RentalDuration>`. `RentalDuration` is now just `{ label, hours }`, and the new `RentalDurationId` type (`keyof typeof rentalDurations`) is used for `prices` and the booking model. Both pages loop with `durations | keyvalue: null` (`null` keeps insertion order instead of sorting by key) and use `.key` / `.value.label`. The booking page's `durationById` helper and `duration` computed were removed: lookups are `rentalDurations[id]`, and the Book price reads `item.prices[bookingForm.durationId().value()]`. Verified in the browser pane: same order and prices on both pages; 1 hour $85 (latest start 20:00), 2 hours $153 (19:00), Full day $340 with Start time disabled; no console errors. `ng build`, eslint and oxfmt pass.
- Follow-up (plain string duration ids), requested by @ElectroluxV2: Claude Opus 5.5 removed the `RentalDurationId` type. `rentalDurations` is typed `Readonly<Record<string, RentalDuration>>` (no `as const satisfies`), `RentalEquipment.prices` is `Readonly<Record<string, number>>`, and the booking model's `durationId` is a `string`. Lookups still use brackets, as `noPropertyAccessFromIndexSignature` requires, and `noUncheckedIndexedAccess` is off, so `rentalDurations[id]` stays typed as `RentalDuration`. A misspelled id is no longer a compile error. Verified in the browser pane: same order and prices on both pages; $85 / $153 / $340 with latest starts 20:00 / 19:00 and Start time disabled for a full day; no console errors. `ng build`, eslint and oxfmt pass.
- Follow-up (booking total as a computed), requested by @ElectroluxV2: Claude Opus 5.5 moved the Book button's inline `item.prices[bookingForm.durationId().value()] * quantity.value()` into a `total` computed in the component. It reads `durationId` and `quantity` from the booking model signal and the price from `item()`, falling back to 0 when there is no item. The button now shows `{{ total() | currency: 'USD' }}`. Verified in the browser pane on the sailboat: $85 → 2 hours $153 → quantity 2 $306 → Full day $680; no console errors. `ng build`, eslint and oxfmt pass.
- Follow-up (semantic HTML on the booking page), requested by @ElectroluxV2: Claude Opus 5.5 wrapped the item in an `<article>`, turned the image wrapper into a `<figure class="hero">`, and grouped the title, description and capacity in a `<header>` (replacing the `.details` div). The desktop two-column grid moved from `main:has(.hero)` to `article`; the header is a centred flex column, so the image no longer spans two rows, and the figure's default margin is reset. Verified in the browser pane on the sailboat: same layout, article children are `FIGURE, HEADER, FORM`; no console errors. `ng build` passes.
- Follow-up (save bookings and list them on My reservations), requested by @ElectroluxV2: Claude Opus 5.5 added a `reservation/` slice with a `Reservation` model (`equipmentId`, `durationId`, `date`, `startTime` or null for a full day, `quantity`, `total`) and a mock `ReservationService`. Like `RentalEquipmentService`, it exposes the list as a `resource` (`reservations`, newest first) and has an async `save()` that waits 300ms, stores the reservation in memory, reloads the resource and returns the saved item. The data is lost on a page reload until a real API replaces the mock calls. The booking page no longer has the `booked` signal or the "mock booking" message: the signal form's `submission.action` calls `save()` and then navigates to `/reservations`, and the Book button is disabled while `bookingForm().submitting()`. The My reservations page joins each reservation with its equipment and lists them in an `<ol>` of `<article>`s with the photo, a link back to the item, and a `<dl>` of date, duration (plus start time), quantity and total, or "No reservations yet" with a link to Discover. Verified in the browser pane: a full-day sailboat booking and a 2-hour kayak booking (quantity 2, $64.80) both appear, newest first; the Book button is disabled while saving; no console errors. `ng build`, eslint and oxfmt pass.

## 2026-11-01 — Passkey sign-in only when booking or opening My reservations

- AI assistance: at the user's request, Claude Opus 5.5 proposed and built passkey auth that is asked for only when booking or opening `/reservations`. Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Backend: new `auth/session/` slice. `GET /session` returns `{ username }` or `null` (so signed-out visitors don't get an error), using AuthTuna's `get_current_user_optional`. `DELETE /session` ends the AuthTuna session and clears its cookie. `register/passkey/complete` now returns `{ username }` like login does. (@ElectroluxV2 added the missing `await` on the failed-registration `users.delete` cleanup.)
- Frontend: new `auth/` slice. `PasskeyService` runs the login and register ceremonies with the browser's `PublicKeyCredential.parseRequestOptionsFromJSON` / `parseCreationOptionsFromJSON` and `credential.toJSON()`, replacing the hand-written base64url code, and turns a 404 from login complete into an `UnregisteredPasskeyError`. `AuthService.ensureSignedIn(reason)` asks `GET session` once, from the browser only (`transferCache: false`), and otherwise opens the sign-in dialog and resolves true or false. `authGuard` uses it on `/reservations`; on cancel it stays put, or goes home on a first load. The booking page calls it before saving. `/reservations` renders on the client only (`RenderMode.Client`). `AuthDialogComponent` is a native `<dialog>` in the app shell, opened with `afterRenderEffect`. Its username field has `autocomplete="username webauthn"` and a conditional-mediation `credentials.get()` runs while it's open, so saved passkeys show in autofill. A new username plus Create account registers instead. "Use a passkey" runs a regular passkey prompt (for a phone or security key), and Cancel or Esc closes it. My reservations shows "Signed in as …" with a Sign out button. The old `web-auth-flow` component was removed, and `passkey` and `logout` were added to the Material Symbols subset.
- Verification: `ng build`, eslint, oxfmt and ruff pass. With FastAPI's test client, `GET /session` returns `null` and `DELETE /session` clears the cookie; the running backend serves `/session`. In the browser pane, the backend's real login options and an AuthTuna-shaped registration options object both parse with the native helpers, and conditional mediation is available. The dialog opens on a direct `/reservations` load (cancel goes home), from the nav (Esc stays on Discover), and from Book ("Sign in to book"; Book stays disabled while it's open and is re-enabled on cancel). An empty username shows "Enter a username to create an account." A full sign-in or registration was not tested: the local proxy had no app registered for `backend.localhost` (the backend ran via `fastapi dev` on port 8000), and the browser pane has no authenticator.
- Follow-up (try sign-in without the dialog first), asked by @ElectroluxV2: Claude Opus 5.5 explained that a fully silent passkey sign-in isn't possible (`mediation: 'silent'` doesn't cover passkeys) and added Chrome's immediate UI mode. `AuthService.ensureSignedIn` now checks the session cookie, then, where `PublicKeyCredential.getClientCapabilities()` reports `immediateGet`, calls `navigator.credentials.get({ uiMode: 'immediate' })`. If this device has a passkey for the site, Chrome shows its own sheet and the app dialog is skipped. Otherwise, or on dismissal, an unknown passkey, or a browser without support, it falls back to the dialog. `mediation: 'immediate'` was tried first. Chrome 152 rejects it as an invalid enum value: it was the 2025 origin-trial form, and Chrome 149 shipped `uiMode` instead (found in Chrome's immediate UI mode docs). `PasskeyService.signIn` now takes a `PasskeyPrompt` (`autofill | dialog | immediate`) mapped to request options, and `CredentialRequestOptions` gets a `uiMode?: 'immediate'` global type addition until TypeScript's DOM types have it. When login complete returns 404, it also calls `PublicKeyCredential.signalUnknownCredential()`, so the browser drops the stale passkey. Verified in the browser pane (Chrome 152): Chrome accepts `uiMode: 'immediate'`; with a real click and no passkey it rejects with `NotAllowedError` in 37ms and shows no UI. Clicking My reservations runs `GET /session` (200, signed out), `login/passkey/begin` for the immediate try, then opens the dialog with autofill; no console errors. `ng build` and eslint pass. A sign-in with an existing passkey was not tested, because the pane has no authenticator.

## 2026-11-03 — Styling date and time inputs (question)

- AI assistance: @ElectroluxV2 asked whether `<input type="date">` and `<input type="time">` can be styled. Claude Opus 5.5 explained what CSS can reach (the box, text, `color-scheme`, `accent-color`, and in Chromium/WebKit the `::-webkit-datetime-edit*` and `::-webkit-calendar-picker-indicator` pseudo-elements), that the popup picker can't be styled, and the options for a fully custom picker. No code changed.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Follow-up (style the fields and add accent-color), requested by @ElectroluxV2: Claude Opus 5.5 set `accent-color: #168447` on the booking `form`, so the duration radios and the native pickers use the brand green. The date and time inputs got padding, a rounded border and a faint background matching the duration fieldset, a stronger border on hover, a green `:focus-visible` outline and a red border on `:user-invalid`. In Chromium and WebKit, the focused day/month/year/hour/minute segment is highlighted green (`::-webkit-datetime-edit-*-field:focus`) and the picker icon shows a pointer cursor. Firefox gets only the box styles. Dark mode already comes from the global `color-scheme: light dark`. Verified in the browser pane (dark mode) on the sailboat: radios computed `accent-color` is `rgb(22, 132, 71)`, the date field shows the new border and radius, and the focused segment is green; no console errors.

## 2026-11-03 — Cancel a reservation

- AI assistance: at the user's request, Claude Opus 5.5 added a "Cancel reservation" button to each booking on My reservations. `ReservationService.cancel(id)` is a mock call like `save()`: it waits 300ms, removes the reservation from memory and reloads the list. Ids now come from a `lastId` counter instead of `stored.length + 1`, which would repeat an id after a cancellation. The page asks first with the native `confirm()` ("Cancel your Kayak reservation?"), keeps a `cancelling` set of ids, and while one is in flight its button is disabled and reads "Cancelling…". The button is red, uses the `event_busy` icon (added to the Material Symbols subset in `index.html`), and on wide screens sits under the details next to the photo, which now spans three rows.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `ng build`, eslint and oxfmt pass. In the browser pane, the session was marked signed in from the console (no authenticator is available) and two reservations were saved through the service. With `confirm` stubbed: answering No kept both; Yes disabled the button with "Cancelling…" and then removed the Kayak; cancelling the last one showed "No reservations yet"; no console errors. The real `confirm()` dialog itself was not shown during testing.
- Follow-up (center the empty state), requested by @ElectroluxV2: Claude Opus 5.5 gave the "No reservations yet" item an `empty` class and made `main` a full-height flex column (`min-height: 100%`, `box-sizing: border-box`). `ol:has(> .empty)` takes the remaining space (`flex: 1`) and centres the message with `place-content: center` and `text-align: center`. A list with reservations is unchanged. Verified in the browser pane (signed in from the console as before): the message is centred horizontally and in the space below the header, with no scrollbar; no console errors.
- Follow-up (center the loading message too), requested by @ElectroluxV2: Claude Opus 5.5 gave "Loading reservations…" a `loading` class and added it to the same rule as the empty state, which now also sets `display: grid` and `margin: 0` so the `<p>` centres like the list. Verified in the browser pane by reloading the reservations resource: the loading message and the "No reservations yet" message that replaces it have the same centre, so nothing jumps; no console errors.

## 2026-11-03 — Style the sign-in username field

- AI assistance: @ElectroluxV2 noted the sign-in dialog's username input was unstyled. Claude Opus 5.5 moved the date/time field styles from the booking page into `styles.scss` as one global rule, `input:is([type='text'], [type='date'], [type='time'])`, so the username field gets the same padding, rounded border, faint background, hover border, green focus outline and red `:user-invalid` border. The `-webkit-` date/time segment rules moved with it. The booking page keeps only its `font: inherit` and disabled-opacity rule for inputs.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `ng build` and oxfmt pass. In the browser pane, the sign-in dialog opened from a direct `/reservations` load, and the username field has the same computed border, radius and padding as the booking date and time fields, which are unchanged; no console errors. The dialog showed "No passkey was used…" as soon as it opened; this message comes from existing sign-in code and wasn't changed.
- Follow-up (error shown as soon as the sign-in dialog opens), requested by @ElectroluxV2: Claude Opus 5.5 found that the dialog's background autofill request (`mediation: 'conditional'`) is rejected by the browser pane's Chrome with `NotAllowedError` about 25ms after it starts, even with an `autocomplete="username webauthn"` field focused and `conditionalGet` reported as supported. The dialog treated that like a dismissed prompt and showed "No passkey was used…". `AuthDialogComponent.signIn` now ignores `NotAllowedError` when the prompt is `autofill`, since the user didn't start it. Errors from an explicit "Use a passkey" attempt, unknown passkeys and server errors still show. A small `isNotAllowed()` helper is shared with `messageFor`. Verified in the browser pane: opening the dialog from `/reservations` shows no error; clicking "Use a passkey" still sets the "No passkey was used…" error. `ng build`, eslint and oxfmt pass.
- Found while testing, not changed: clicking "Use a passkey" blurs the username field, which marks it touched, and the template prefers the "Enter a username to create an account." validation message over the passkey error, so the passkey message is hidden.
- Follow-up (passkey message hidden by the username message), requested by @ElectroluxV2: Claude Opus 5.5 made the dialog show the message for the latest action. The template now shows `error()` first and the username validation message only when there is no error. Create account clears `error()` through a `(submit)` listener on the form, so an empty username then shows "Enter a username to create an account."; "Use a passkey" clears it before trying. Verified in the browser pane: "Use a passkey" shows "No passkey was used…"; Create account with an empty username then shows the username message; "Use a passkey" again shows the passkey message. `ng build`, eslint and oxfmt pass.
- Follow-up (username message only after Create account), requested by @ElectroluxV2: Claude Opus 5.5 added a `createPressed` signal to `AuthDialogComponent`. The form's `(submit)` now calls `pressedCreate()`, which clears any passkey error and sets it. The username message shows when `createPressed()` and the field has an error, instead of when the field is touched, so leaving the field or clicking "Use a passkey" no longer shows it. It goes away once a username is typed, and `createPressed` resets each time the dialog opens. Verified in the browser pane: no message on open or after leaving the field; Create account with an empty username shows "Enter a username to create an account."; typing "sailor" removes it; reopening the dialog shows no message; no console errors. `ng build`, eslint and oxfmt pass.

## 2026-11-03 — "My reservations" label in the nav

- AI assistance: at the user's request, Claude Opus 5.5 added the text "My reservations" after the `event_upcoming` icon in the app nav. The link's `aria-label` was removed because the visible text now names it, and `app.scss` centres the icon and label with a small gap.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: in the browser pane the label shows at the right end of the nav, and at 375px wide the page has no horizontal scroll.

## 2026-11-03 — Opening hours from the API, per weekday in the booking form

- AI assistance: at the user's request, Claude Opus 5.5 moved the opening hours to the backend and made the booking form use the picked day's hours.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Backend: new `opening_hours/` slice with one `APIRouter`, mounted in `main.py`. `GET /opening-hours` returns `[{ weekday, opens, closes }]` (ISO weekday 1–7, `"HH:MM"` strings checked by a pydantic pattern); weekdays missing from the list are closed. The hours are fixed in code for now and match what the Contact page showed: Monday–Friday 08:00–20:00, Saturday 07:00–21:00, Sunday 09:00–18:00.
- Frontend: new `opening-hours/` slice with the `OpeningHours` model, `weekdayNames`, `isoWeekday()` (a date input's value is the picked day at UTC midnight, so it uses `getUTCDay()`) and `hoursOn()`, plus `OpeningHoursService` exposing `week` as an `httpResource`. It is fetched during SSR, and hydration's HTTP transfer cache hands the response to the browser, so the browser makes no request on a server-rendered page. The Contact page now builds its Opening hours list from the API, joining consecutive days with the same hours ("Monday – Friday") and showing missing days as "Closed". It shows no rows until the hours load.
- Booking form: the fixed 08:00/21:00 were removed. A new `validate()` on `date` rejects closed days ("We're closed on Sundays."), and the date error line now shows the field's first error message (the `minDate` rule got its "Pick a date from today on." message). The start time rule uses the picked day's `opens` and `closes` minus the duration, and is skipped until a date is picked and the hours have loaded. The time input's limits come from a `dayHours` computed and are bound with `[attr.min]`/`[attr.max]`, so they are removed when there is no day yet; plain `[min]`/`[max]` had set them to the text "null".
- Verification: backend ruff passes; `GET /opening-hours` returns the 7 days through FastAPI's test client, the running backend and the frontend's `/api` proxy. `ng build`, eslint and oxfmt pass. `curl` of `/contact` shows the three rows in the server-rendered HTML, and both `/contact` and `/3/sailboat` embed the `opening-hours` response; the browser pane made no `opening-hours` request on either page. On the booking form: Monday 07:30 is rejected (08:00–19:00 for 1 hour), Monday 19:00 passes for 1 hour and fails for 2 hours (latest 18:00), Saturday 07:30 passes (07:00–19:00 for 2 hours), Sunday 16:30 fails for 2 hours (latest 16:00) and passes for 1 hour. The closed-day path was tested by removing Sunday, then Saturday, from the loaded hours in the page: "We're closed on Sundays." shows, the form doesn't submit, and the time limits are removed. No console errors.
- Follow-up ("My reservations" nav icon on the right), requested by @ElectroluxV2: Claude Opus 5.5 moved the `event_upcoming` icon after the "My reservations" text in `app.html`. Verified in the browser pane: the label comes first with the icon on its right; no console errors.
- Follow-up (icon not underlined on the active link), requested by @ElectroluxV2: the active link's `text-decoration: underline` carries into the link's flex items, and a child can't turn it off. Claude Opus 5.5 wrapped the text in `<span class="label">`, and `app.scss` now removes the underline from the active My reservations link and underlines only `.label`. Verified in the browser pane on `/reservations` (signed in from the console): the label is underlined and the icon isn't; no console errors.
- Follow-up (start time error before a date is picked), requested by @ElectroluxV2: the start time rule was skipped until a date was picked. Claude Opus 5.5 added `widestHours()` to the opening-hours slice (earliest opening to latest closing of the week), and the booking page checks the start time against it until a date is picked, then against that day's hours. The time picker's limits follow the same hours. Verified in the browser pane: with no date, 06:30 shows "Pick a start time from 07:00 to 20:00." (1 hour) as soon as the field is left, and 07:30 passes; picking a Monday then rejects 07:30 (08:00–19:00), and 10:00 passes; no console errors. `ng build`, eslint and oxfmt pass.

## 2026-11-03 — My reservations layout proposal

- AI assistance: @ElectroluxV2 said My reservations is confusing when the same item is booked at different start times, and asked for a better layout. Claude Opus 5.5 proposed (as an inline mockup, no code changed) an agenda layout: reservations grouped under a day heading and sorted by start time instead of booking order, each row led by its time range ("10:00 – 11:00", or "All day"), followed by a small photo, the item name with the quantity, the total and a compact Cancel button.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Follow-up (build the agenda layout), requested by @ElectroluxV2: Claude Opus 5.5 rebuilt My reservations as an agenda. A `days` computed groups reservations by date (soonest first) and sorts each day with full-day bookings first, then by start time, so the list no longer follows booking order. Each day is a `<section>` with a date heading and a bordered `<ol>`. Each row shows the time range in bold (the end time is the start plus the duration's hours) with "1 hour" / "2 hours" under it, or "All day" / "Full day"; a square photo; the item name, now linking to its booking page, with "× 2" when the quantity is above 1; the total; and an icon-only red cancel button (`aria-label` "Cancel Kayak reservation", tooltip "Cancel reservation") that still asks to confirm. The quantity is shown as "× N" because names like "Water skis" and "Kite surfing" don't pluralize cleanly. Below 30rem, the time and total sit on the first line and the photo, name and cancel button on the second. The loading and empty messages share one centred `.status` rule.
- Verification: `ng build`, eslint and oxfmt pass. In the browser pane (signed in from the console), four reservations saved out of order (Kayak 11 Nov 09:00, Kayak 10 Nov 14:00 for 2 hours, Kayak 10 Nov 10:00 × 2, Sailboat 10 Nov full day) show as Tuesday: All day Sailboat, 10:00 – 11:00 Kayak × 2, 14:00 – 16:00 Kayak; Wednesday: 09:00 – 10:00 Kayak. At 375px there is no horizontal scroll and all cancel buttons are the same 37px wide (they had stretched to the price's width before `justify-self: end`). Cancelling the 10:00 Kayak (with `confirm` stubbed) disables its button and removes only that row; cancelling the rest shows "No reservations yet". No console errors.
- Follow-up (default the booking date to today), requested by @ElectroluxV2: Claude Opus 5.5 added a `today()` helper to the booking page (today's local date at UTC midnight, matching date inputs) and used it for the initial `date` in the booking model and for the `minDate` rule. Verified in the browser pane on 3 November 2026: the date field shows 2026-11-03 with no error, and the start time limits follow Tuesday's hours (08:00–19:00 for 1 hour); no console errors. The server-rendered `<input>` has no `value` attribute, because the form sets the value property; the date appears once the page hydrates. `ng build`, eslint and oxfmt pass.

## 2026-11-03 — Commit, push and CI

- AI assistance: at the user's request, Claude Opus 5.5 ran the CI checks locally before committing and pushing the branch for PR #24. The existing `app.spec.ts` test failed: it read the first `<h2>` in the app, which is now the sign-in dialog's empty title, and it checked before the equipment list (an async `resource`) had rendered. The test now waits with `await fixture.whenStable()` and reads `app-discover-rental-page h2`. No new tests were added.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: locally, backend ruff check, ruff format check and pytest pass; frontend eslint, oxfmt check, `ng test` (4 tests) and `ng build` pass.

## 2026-11-03 — Passkey sign-in and registration in Safari

- AI assistance: @ElectroluxV2 reported that sign-in and registration fail in Safari on the Vercel preview: the dialog shows "No passkey was used…" and, as they confirmed, Safari never shows its passkey sheet. The preview's relying-party ID matches its domain, so Claude Opus 5.5 traced it to timing: both buttons awaited a backend request (`login/passkey/begin`, or `register/passkey/begin`, which also created the account and hashed a password) before calling `navigator.credentials.get()`/`create()`, and Safari refuses a passkey prompt that doesn't follow the click closely enough. Safari couldn't be driven from this session (computer use only allows reading browsers), so the fix couldn't be checked in Safari itself.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Backend: `register/passkey/begin` no longer creates the account. It returns 409 for a taken username, otherwise generates options with a random user handle (login finds accounts by credential id, so the handle isn't used) and stores the username and challenge in the session. `register/passkey/complete` verifies the passkey, then creates the account, saves the passkey and starts the session; it returns 409 if the username was taken in the meantime and deletes the account if saving the passkey fails. The unused `PASSKEY_FLOW_USER_ID_SESSION_KEY` was replaced by `PASSKEY_FLOW_USERNAME_SESSION_KEY`.
- Frontend: `PasskeyService` now has `signInOptions()` / `registrationOptions(username)` and `signIn(prompt, options, signal)` / `register(options)`, which call the browser before any `await`. The sign-in dialog loads sign-in options in a `resource` while it is open (reloaded after each attempt, which also restarts autofill through an `effect`) and registration options in a `resource` keyed on the typed username, 300ms after typing stops. Create account (in the form's `submit` event) and "Use a passkey" (in its `click`) cancel the pending autofill request and then start the prompt synchronously with those options. If Create account is pressed before the options arrive, it still fetches them first, and Safari may then refuse. A taken username shows the server's message, and a cancelled registration now says "No passkey was created. Try again." The signal form no longer has a `submission` action; `busy` is a plain signal.
- Verification: backend ruff, ruff format check and pytest pass; with FastAPI's test client, `begin` returns options without creating an account, and a failed `complete` leaves no account. Frontend eslint, oxfmt check, `ng test` and `ng build` pass. In the browser pane (Chromium) with `navigator.credentials` wrapped: typing a 16-character username sent one `register/passkey/begin`; Create account called `create()` while the `submit` event was being dispatched, and "Use a passkey" called `get()` during the `click` event, each after aborting autofill, which restarted afterwards; no console errors. Not yet checked in Safari, and the taken-username path wasn't exercised.
- Follow-up (still "No passkey was created. Try again." in Safari after the fix), reported by @ElectroluxV2: Safari still rejects `create()` without showing its sheet. To reproduce locally with the user, Claude Opus 5.5 added temporary, uncommitted debugging: a `traced()` wrapper in `PasskeyService` logs each `get`/`create` call to the console with its options (rp, user id length, algorithms, authenticator selection, extensions), whether it ran during an event, `navigator.userActivation.isActive`, focus and origin, then how it ended (error name and message, time taken). `?noAutofill` on the URL turns off the background autofill request, to test whether it is what makes Safari refuse. Verified in the browser pane that the logs appear on `https://frontend.localhost/reservations` and that `?noAutofill` skips autofill.
- Follow-up (Safari console output shared by @ElectroluxV2): the debug log showed Safari rejecting the passkey request within 2ms with "NotAllowedError: Both read and write may not be present together in largeBlob." AuthTuna adds a `largeBlob` extension to both ceremonies (`{"read": true}` for sign-in, `{"support": "preferred"}` for registration), which the app doesn't use. Claude Opus 5.5 added `without_large_blob()` to `auth/passkey.py` and applied it to the options returned by `login/passkey/begin` and `register/passkey/begin`; `credProps` and `credProtect` are kept. Verified with FastAPI's test client and the running local backend: sign-in options now have `"extensions": {}` and registration options `{"credProps": true, "credProtect": 2}`. Ruff and pytest pass. Waiting on a retry in Safari; the temporary debug logging stays in place until then.
- Follow-up (second Safari log from @ElectroluxV2): with `largeBlob` gone, Safari's autofill request now waits normally (rejected after 5.3s with "not allowed … possibly because the user denied permission", as when its suggestions are dismissed), but the log has no `create` call, so Create account never reached `navigator.credentials.create()`. Claude Opus 5.5 added a temporary `[passkey] Create account pressed` log with the typed username, which username the prepared options are for, and the options resource's status and error, to see which path the click takes.
- Follow-up ("409 dropped", reported by @ElectroluxV2): the backend runs from Rider, so its log wasn't readable here. Claude Opus 5.5 ruled out the account-creation step (AuthTuna `signup` with the same arguments works) and checked the local `authtuna_dev.db`: account `wedewdewd` was created at 20:10:33 with a passkey saved from Safari 27 in the same second, so Safari registration worked once `largeBlob` was removed. A 409 is what `register/passkey/begin` returns for a username that already exists, as after that registration. Also found: `gdkchhjkcgkhcg` (19:02, before the registration change) is an account with no passkey left by the old flow. No code changed in this step; the temporary debug logging is still in place.
- Follow-up (same username, different passkeys), requested by @ElectroluxV2, who chose separate accounts over adding a passkey to an existing account (which would let anyone who knows a username add their own passkey to it). AuthTuna requires unique usernames and has no display-name column, so Claude Opus 5.5 added `backend/auth/display_name.py`: `unique_username()` stores the chosen name with a random suffix ("Anna#3fa91c") and `display_name()` shows it without one (accounts from before suffixes show their full username). `register/passkey/begin` no longer returns 409 for a taken name; `complete` signs up with `unique_username()` and now returns 500 "Couldn't create the account. Try again." if signup fails. Registration, login and `GET /session` return the display name. The registration request's `username` is limited to 73 characters so the stored name fits AuthTuna's 80. The passkey itself still carries the chosen name. The temporary Safari debugging (`traced()`, `?noAutofill`, the Create account log) was removed by restoring both frontend files to the last commit.
- Verification: backend ruff, ruff format check and pytest pass. With FastAPI's test client and AuthTuna: `begin` for the existing name "wedewdewd" returns 200; a 74-character name returns 422; two "Anna" accounts are stored as `Anna#25c072` and `Anna#a439e8` and both display as "Anna"; the longest name is stored in exactly 80 characters; the existing "wedewdewd" still displays unchanged. AuthTuna logs "Role 'User' not found" on every signup; that comes from its default role setup, not from this change. Not yet tried in Safari.

## 2026-11-03 — Mark mock data files

- AI assistance: @ElectroluxV2 asked to mark all mock data files with `.mock.ts`. Claude Opus 5.5 found one mock data set, the hard-coded `rentalEquipment` catalogue, which lived in `rental-equipment.ts` next to the real `RentalEquipment` and `RentalDuration` types and the `rentalDurations` config. It moved the catalogue to `frontend/src/app/rental-equipment/rental-equipment.mock.ts` and pointed `RentalEquipmentService` at it. The in-memory storage in `ReservationService` is mock logic inside a real service, not a data file, so it was left as is.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: `tsc --noEmit` on the frontend app, eslint and oxfmt check pass.

## 2026-11-03 — Temporal and Intl in opening hours

- AI assistance: @ElectroluxV2 asked to use the Temporal and Intl APIs in `frontend/src/app/opening-hours/opening-hours.ts`. Claude Opus 5.5 replaced the hard-coded `weekdayNames` list with names built by `Temporal.PlainDate#toLocaleString('en', { weekday: 'long' })` from a known Monday (fixed to English so the server and browser render the same text and the "closed on Mondays" message still reads right), `isoWeekday` now reads `dayOfWeek` from the date as a UTC `Temporal.Instant`, and `widestHours` compares "HH:MM" strings with `Temporal.PlainTime.compare` instead of as text. Callers didn't change.
- Temporal support: Node 24 (SSR, Vercel) has no Temporal and Safari doesn't ship it yet, so `temporal-polyfill` 1.0.6 was added. It installs only when native Temporal is missing. It is in `angular.json`'s `polyfills` for the browser and tests, and imported first in `main.server.ts`, because `polyfills` doesn't reach the server bundle (the route extraction failed with "Temporal is not defined"). Types come from TypeScript's own `ESNext.Temporal` lib, added to `tsconfig.json`.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: eslint, oxfmt check, `ng test` (4 tests) and `ng build` pass. In the browser pane (Chrome 152, native Temporal, so the polyfill is skipped) and in the server-rendered HTML, the contact page shows "Monday – Friday", "Saturday", "Sunday"; the booking page limits today's (Tuesday) start time to 08:00–19:00; no console errors. Run in Node with the polyfill and `TZ=Pacific/Auckland`, the helpers return weekday 2 for 2026-11-03, 7 for 2026-11-08 and 1 for 2026-11-09, null for a closed day, and 07:00–21:00 as the widest hours. Not tried in Safari.
- Follow-up (Node 26 and polyfill only where needed), requested by @ElectroluxV2 with Vercel's "Node.js 26 LTS is now generally available" changelog: Claude Opus 5.5 set `devEngines.runtime` to Node 26 (pnpm now uses 26.13.0 locally and in CI, which has Temporal built in) and added `engines.node: "26.x"`, which Vercel reads ahead of the project's `nodeVersion: 24.x` setting; `@types/node` went to 26. The server no longer loads the polyfill, and the `polyfills` entry in `angular.json` was removed. `main.ts` now runs `await import('temporal-polyfill/global')` only when `Temporal` is missing, which is feature detection rather than a Safari/iOS user-agent check, so the 18.5 kB polyfill is a lazy chunk that other browsers never download. A first version imported the app dynamically after the polyfill, but that delayed the app code by a round trip for every browser, so the imports stayed static and `opening-hours.ts` no longer calls Temporal while loading: `weekdayNames` became `weekdayName(weekday)` plus `isoWeekdays`, used by the contact and booking pages.
- Verification: eslint, oxfmt check, `tsc`, `ng test` (4 tests, Node 26) and `ng build` pass; the build shows the polyfill only as a lazy chunk. In the browser pane (Chrome 152) the contact page loads no polyfill and shows "Monday – Friday", "Saturday", "Sunday", also in the server-rendered HTML. Loading the booking page in a frame with `Temporal` deleted first downloads `temporal-polyfill`, hydrates, and limits the start time to 08:00–19:00. Not tried in a real Safari or on a Vercel deployment.

## 2026-11-03 — Green CI and the review stack

- AI assistance: @ElectroluxV2 asked to get CI/CD green and publish the stacked pull requests (#21 → #22 → #24) for review. The frontend job on #24 failed at the formatting check: the oxfmt action runs the latest oxfmt (0.76.0), which wants `engines` after `devEngines` in `frontend/package.json`; the pinned 0.74 accepted either order. Claude Opus 5.5 reordered the keys, which both versions accept.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: locally, oxfmt 0.74 and 0.76 checks, eslint, `ng test` and `ng build` pass.
- Follow-up (deployed runtime): CI deploys with `vercel deploy --prebuilt`, so the SSR function's runtime comes from `frontend/vercel-output/functions/ssr.func/.vc-config.json`, not from `engines`. It still said `nodejs24.x`, which has no Temporal, so Claude Opus 5.5 changed it to `nodejs26.x` and updated `vercel-output/README.md`. `CONTRIBUTING.md` on `main` (from #27) still says `pnpm runtime set node 24 -g`; it was left alone here because that line isn't on this branch and editing it would conflict.

## 2026-11-03 — Opening hours missing from server-rendered pages on Vercel

- AI assistance: @ElectroluxV2 reported that opening hours flash in after the page loads, as if SSR weren't working. Claude Opus 5.5 found the preview's HTML had the opening-hours response in the transfer state but an empty `<dl>`, and the Vercel function logs (`vercel logs --deployment`) showed `ReferenceError: Temporal is not defined` on every `/contact` render on the `nodejs26.x` runtime: Vercel's Node 26 doesn't expose Temporal, though Node 26.13 locally does. `weekdayName` threw inside the contact page's `openingHours` computed, so the server rendered the list empty and the browser filled it in on hydration; the booking page's closed-day check would throw the same way. Running the production server with `node --no-harmony-temporal` reproduced it. The fix restores `import 'temporal-polyfill/global'` at the top of `main.server.ts`; it installs only when Temporal is missing, and the browser still loads it only when needed.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: with the production build, `node --no-harmony-temporal` and plain `node` both render "Monday – Friday" on `/contact` and `min="08:00" max="19:00"` on the Kayak booking page, with no errors in the server log. eslint, oxfmt 0.74 and 0.76 checks, `ng test` and `ng build` pass. Not yet deployed to the preview.
- Follow-up (Vercel's changelog says Node 26 has Temporal), raised by @ElectroluxV2: to check, Claude Opus 5.5 deployed a throwaway probe function (`nodejs26.x`, prebuilt, preview URLs `rent-n-sail-g5efo6tpw-rent-n-sail.vercel.app` and `rent-n-sail-ki9lsiejb-rent-n-sail.vercel.app`, no aliases). Vercel runs Node v26.13.0 with V8 14.6.202.34, the same as locally, with no flag that disables Temporal, but `typeof Temporal` is "undefined": `process.config.variables` shows Vercel's own build (GCC, shared OpenSSL) with `v8_enable_temporal_support: 0`, while the official build has `1`. So the server polyfill stays; its comment now says why.
- Verification on Vercel (requested by @ElectroluxV2: watch CI/CD and make sure SSR works): the Stack CI/CD run for `3a363a9` passed and deployed the frontend preview. Its server-rendered HTML has the opening hours on `/contact` ("Monday – Friday 08:00 – 20:00"), the start-time limits (`min="08:00" max="19:00"`) on `/1/kayak` and the equipment on `/`. In the browser pane the contact page hydrates without requesting `opening-hours` again (the transfer cache supplied it) and with no console errors. The deployment's Vercel logs from the last 5 minutes have no errors, only Angular's warnings about untrusted `x-forwarded-*` headers, which #21 deals with.

## 2026-11-04 — Review of #24, first files

- AI assistance: @ElectroluxV2 reviewed the first files of #24 and asked Claude Opus 5.5 to apply the review. Changes:
  - `.claude/launch.json` is no longer tracked (kept locally and listed in `.git/info/exclude`).
  - The `linguist-generated` rule moved from the root `.gitattributes` to `.github/actions/.gitattributes` (`_shared/vendor/dist/**`); `git check-attr` still marks `sdk.cjs` as generated.
  - The `*.jpg` ignore moved from the root `.gitignore` to `frontend/public/img/.gitignore`. `angular.json` now skips `**/.gitignore` and `**/*.jpg` when copying `public/`, so neither the ignore file nor the local source photos end up in the build.
  - Sign-in dialog: the error line shows one `error()` signal; an empty username sets "Enter a username to create an account." when Create account is pressed, replacing the `required` validator, `createPressed` and `errors()[0]`. A comment explains the `Canvas`/`CanvasText` system colors. The error line reserves `clamp(1lh, (28rem - 100vw) * 1000, 2lh)`: two lines below a 28rem viewport (where the dialog is narrower than its 26rem), one above. Measured: every message fits one line at full width except "No passkey was used. Pick one, or enter a username to create an account.", which took two lines at every width, so it was shortened to "No passkey was used. Pick one, or create an account." (one line from 28rem up).
  - 404 page: `NotFoundPageComponent` on a `**` route, which sets the response status to 404 through `RESPONSE_INIT` during SSR. `/:id` and `/:id/:slug` get a `canMatch` that only matches existing equipment, so unknown ids show the 404 page at their own URL instead of redirecting home. `/:id`'s redirect moved into an empty-path child, because Angular rejects `redirectTo` with `canMatch` on one route (NG04014).
- Answers to review questions (no code changes): checkout is already shallow (`fetch-depth: 1`, and the change detection uses `--filter=blob:none`), so a treeless clone wouldn't save anything at depth 1, and all LFS files are frontend images the build needs. AuthTuna 0.2.4 indexes `users.username` (unique, `ix_users_username`) and `passkey_credentials.user_id`; a passkey's credential id is the table's primary key, which login looks up. `IMAGE_LOADER`/`IMAGE_CONFIG` only build image URLs and run the same during SSR and in the browser, so neither a server-only provider nor HttpClient is needed. The dialog title's id is used by `aria-labelledby`. A subagent traced the login router history: `login/passkey/begin` and `/complete` are unchanged since Miłosz Chojnacki's d6f0219 except for `without_large_blob` (c9aa18f); the later "feat: alembic migrations" (6f8dbcb, only on `feat/alembic`) doesn't touch login, and in its `backend/main.py` `app.include_router(api_router)` runs before the login and register routers are added to `api_router`, so they would not be registered.
- Author attribution: `@ElectroluxV2` (verified with `gh api user`).
- Verification: eslint, oxfmt 0.74 and 0.76 checks, `tsc`, `ng test` (4 tests) and `ng build` pass. With the dev server, `/999`, `/foo`, `/999/kayak` and `/a/b/c` return 404 with "Page not found", `/1` redirects to `/1/kayak`, and `/1/kayak` and `/contact` return 200. In the browser pane at 375px the error line is 40px (two lines) and showing the message doesn't move the buttons; at 1024px it is 20px.
- Follow-up (second batch of review comments on #24), applied by Claude Opus 5.5:
  - `main.server.ts` now loads the polyfill like `main.ts`: `if (!('Temporal' in globalThis)) await import('temporal-polyfill/global')`, so it is a lazy chunk in the server bundle too. Angular's `polyfills` option only reaches the browser bundle, so `main.server.ts` is the place for it. With the production build, `node --no-harmony-temporal` and plain `node` both render the opening hours with no errors.
  - Colors: `styles.scss` defines `--color-brand`, `--color-brand-dark`, `--color-accent`, `--color-danger`, `--color-white` and `--color-black` on `:root`, and every literal color in the component styles uses them (`rgb(0 0 0 / n%)` became `color-mix` with `--color-black`). Left as is: colors mixed from `currentColor` or `Canvas`, and the `#000` in the discover page's `mask-image`, which only sets alpha.
  - The `& + &` rule on reservation rows got a comment (a divider above every row but the first).
  - `RentalEquipmentService.find` is now `getById`. `RentalImageComponent` loads its item with `resource()` and shows the photo, a pulsing placeholder while loading, or a "Photo unavailable" placeholder with the `hide_image` icon (added to the Material Symbols `icon_names`). SSR still renders all 15 photos on `/`, and a frame that recorded DOM changes from the start of hydration saw no placeholder and no photo removed.
  - `Reservation.date` is a `Temporal.PlainDate`. `parseReservations()` turns the API's JSON (date as "YYYY-MM-DD") into reservations, written for `httpResource`'s `parse` option; the mock stores JSON and runs it through the same function. The booking page converts the date input's value; My reservations groups by `date.toString()` and labels days with `toLocaleString('en-US', { dateStyle: 'full' })` instead of `DatePipe`.
  - Answered without changes: one Google Fonts URL for both families works, but `icon_names` then applies to the whole request, so Google Sans Flex came back as a single 17.6 kB file instead of the full 136 kB Latin font; the links stay separate. `id: string` would only drop the `Number()` calls on route params, so it's better decided with the backend's ids.
- Verification: eslint, oxfmt 0.74 and 0.76 checks, `tsc`, `ng test` (4 tests) and `ng build` pass. In the browser pane, two bookings made out of order list as Tuesday, November 10, 2026 then Wednesday, November 11, 2026 with photos, the `:root` variables resolve to the old values, the discover page looks unchanged, and the `hide_image` icon renders as a 24px glyph; no console errors.

## Commit review feedback and reply to review comments on #24 (@ElectroluxV2)

Claude Code (Claude Opus 5.5) committed and pushed both review batches as 9cf882e, then posted a reply to each of the 20 review comments on PR #24, explaining the change or answering the question.

## Apply the third batch of review comments on #24 (@ElectroluxV2)

Claude Code (Claude Opus 5.5) applied the third review batch: a promise-based `ApiService` with an interceptor that retries transient failures of idempotent requests; reservations through `httpResource` with `parse` and a mock interceptor; a simpler auth guard and `ensureSignedIn` (`Promise.withResolvers`); a `fieldError` pipe for form errors; Temporal for today's date and time arithmetic; item lookup by id instead of `find`; the agenda logic as a pure `agenda()` function with unit tests (asked for in the review); a shared, documented `capacityNoun`; priority loading only for the first photo; `<progress>` and `<span>` placeholders with motion only when allowed; a centred 404 page; the TypeScript lib bumped to ES2024 so `formatRange` needs no hand-written type; comments for `tabular-nums` and `sizes`; and removed the date picker cursor rule that had no effect.

## Commit the third review batch and reply on #24 (@ElectroluxV2)

Claude Code (Claude Opus 5.5) committed and pushed the third review batch as b17e6e7, then posted replies to the 23 new review threads on PR #24.

## Split the contact page's opening hours into a tested pure function (@ElectroluxV2)

Claude Code (Claude Opus 5.5) applied Miłosz Chojnacki's (@Buzeqq) review comment on PR #24: the grouping of consecutive days with the same hours moved from the contact page's `computed` into a pure `weeklyHours()` in `contact-page/weekly-hours.ts`, with 3 unit tests (requested in the review). The component's `computed` now only reads the resource and calls it. eslint, oxfmt, `tsc`, `ng test` (10 tests) and `ng build` pass; not checked in a browser, since the local proxy wasn't running.

## Rebase and squash-merge the stack (@ElectroluxV2)

Claude Code (Claude Opus 5.5) rebased the gh-stack (#21 → #22 → #24) on main, resolving a `CONTRIBUTING.md` conflict with #27 by keeping its `pnpm runtime set node` command with Node 26. After lint, tests and build passed locally and CI passed on all three PRs, it squash-merged #21 and #22 with `gh stack merge 22 --squash`. #24 lost its approvals when the rebased branch was pushed, so it was rebased onto the new main and left for re-review.
