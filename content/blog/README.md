# Blog post body markup

Files: `gynecomastia.ts` exports `gynecomastiaPosts`, `liposuction.ts` exports `liposuctionPosts` (both `BlogPost[]`).
Both are SAMPLE content pending surgeon review (`reviewerId: "sample-reviewer"`, `published: true` for staging only).
`BlogPost.body` is a `string[]`: one array item per line below. A line is one block.

| Line starts with | Meaning |
|---|---|
| `## text` | H2 heading (the page title is the H1) |
| `- text` | List item. Consecutive `- ` lines form one `<ul>` |
| `> text` | Callout (render as a note box) |
| `[[reviewer]]` | Placeholder for the reviewer line. Render from `reviewerId` (name, credential, date). Always the first line |
| `[[faq: question | answer]]` | One FAQ entry. Collect all of a post's FAQ lines into one `<details>` list and emit `FAQPage` JSON-LD from the same text. Render them as a group where they appear (after the last H2 section) |
| `[[sources: text]]` | Sources line, render as a small "Sources" paragraph at the end |
| anything else | Normal paragraph (the closing line is the WhatsApp / quote checker call to action; put the real buttons beside it) |

Inline, inside any line:

- `[[link: /path | anchor text]]` renders an internal link. Targets are only URLs from the strategy URL map; with `LINK_MODE=live`, drop the link (keep the anchor text) when the target page is not live.
- No other inline markup is used. Text is plain; do not treat `*` or `_` as formatting.

Notes: FAQ answers and questions contain no `|` other than the separator (split on the first ` | `). Prices are not used in these posts.
