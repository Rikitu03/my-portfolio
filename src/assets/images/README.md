# Image assets

These live in `src/assets/` rather than `public/` so Astro can optimize them —
anything under `public/` is copied byte-for-byte and never processed.

`src/components/Media.astro` globs this folder at build time and renders an
Astro `<Image>` (WebP, with a srcset); if the file is missing it renders a
labelled placeholder instead. So dropping a file at the listed path is still
enough — no code change needed.

Paths are written the old public-style way (`/images/foo.png`) in
`src/data/content.ts` (About + Projects) and `Hero.astro`; `Media.astro` maps
them onto `src/assets/images/`.

Call sites pass `widths` + `sizes` matching their real CSS slot. Add both when
wiring up a new image — without them Astro emits the image at full resolution.

Note: every file in this folder is bundled, whether or not it is referenced.
Unused screenshots still ship. Keep spares outside `src/` if that matters.

## Hero — wired up

| Path                      | Used for                |
| ------------------------- | ----------------------- |
| `/images/recto_pogs.png`  | Portrait of Jason       |
| `/images/putol_pogs.png`  | Cat sticker             |
| `/images/peace_pogs.png`  | Paw / peace sticker     |

The grain behind the hero is generated in CSS (`feTurbulence`) — no texture file.

## About — carousel (still placeholders)

Six slots, none of them filled yet:

```
/images/about/group-photo.jpg
/images/about/moment-1.jpg  …  moment-5.jpg
```

The carousel expands the active shot and collapses the rest. Every frame crops
to fill (`object-fit: cover`), so images are never squashed — but keep the
subject near the centre, since the sides are what get cropped away.

## Projects — wired up

Each project uses one cover plus three thumbnails, read from `content.ts`:

| Project     | Folder                | Cover       | Thumbnails                    |
| ----------- | --------------------- | ----------- | ----------------------------- |
| Bakerdan    | `/images/bakerdan_/`  | `cover.png` | `bakerdan1–3.png`             |
| OPTIQ       | `/images/optiq/`      | `cover.png` | `optiq1, optiq3, optiq4`      |
| BayanLink   | `/images/bayanlink/`  | `cover.png` | `bayanlink1–3.png`            |
| ADVS        | `/images/advs/`       | `advs1.png` | `advs2–4.png`                 |
| PLP Kiosk   | `/images/kiosk/`      | `cover.png` | `kiosk1–3.png`                |

Two things worth knowing:

- **OPTIQ has no `optiq2.png`** in the export, so the strip runs 1, 3, 4.
- **ADVS has no dedicated cover**, so `advs1.png` (the landing hero) stands in.
  Its files were originally `Screenshot 2026-08-01 ….png`; they were renamed to
  `advs1–5.png` because spaces need URL-encoding and every sibling folder uses
  the flat-numbered convention.

Covers render at roughly 592 × 300, thumbnails at 153 × 87 — both cropped to fill.

## Resume

`/resume.pdf` — linked from the hero and the footer. Not present yet.
