# Image slots

Put image files in this folder and point a content field at them. No file here means the page keeps its built-in drawing.
Nothing is generated for you. Stock photos are chosen and licensed by the founder.

## How to set an image
1. Save the file here, for example `public/images/liposuction-hero.webp`.
2. In the content file (or the Supabase `images` / `cover` column), fill the slot:
   `{ imageSrc: "/images/liposuction-hero.webp", imageAlt: "A consultation room with a desk and two chairs", credit: "Photographer or licence note" }`
3. Rebuild (or wait for the next revalidation). The slot has a fixed aspect ratio, so the page does not jump when the image loads.

## Slots
| Slot name | Where to set it | Ratio | Suggested size (px) | Appears on |
|---|---|---|---|---|
| `hero` | `images.hero` on a treatment (`content/treatments.ts`) | 4:5 | 800 x 1000 | Top of the treatment page and of every city page for it. Only this slot loads first (priority). |
| `operation` | `images.operation` on a treatment | 3:2 | 1200 x 800 | "What the operation involves" block |
| `recovery` | `images.recovery` on a treatment | 3:2 | 1200 x 800 | Recovery calendar block |
| `card` | `images.card` on a treatment | 1:1 | 600 x 600 | "Related treatments" cards |
| `travel` | `images.travel` on a city page (`content/city-pages.ts`, `content/pages.ts`) | 3:2 | 1200 x 800 | "Getting there and staying" block of that city page |
| `cover` | `cover` on a guide (`content/blog/*.ts`) | 16:9 | 1280 x 720 | Top of the guide, and its card on /learn |
| `posterImage` | `posterImage` on a video (`content/videos.ts`) | 16:9 | 1280 x 720 | Video poster before play |

Inline pictures inside a guide's text are not wired yet (a guide body is plain lines). Add a slot to the body markup when the first one is needed.

## Rules (from the image slot spec)
- Size: keep each file under 150 KB. WebP or AVIF are fine. Use the suggested size or smaller.
- Generic scenes only: clinic reception, a consultation room, walking, a gym, fabric or a garment.
- Never show people presented as our patients or our surgeons. No before and after stock images. No images with text claims.
- `imageAlt` describes the picture, not keywords. Leave `imageAlt` empty only for a purely decorative picture.
- Keep a licence or credit note in `credit` for every image. It is shown as a small caption on the picture.
- Check file metadata (EXIF) and file names: no hospital name, no address, no person's name.
