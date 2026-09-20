# Qalam Online Madrasa: website

Next.js (App Router) + Tailwind CSS 4. Fully static, so it deploys on Vercel with no backend.
Design language taken from the LearnHouse UI (Wix Madefor Text, blueprint grid, `nice-shadow` cards, black buttons).

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Deploy on Vercel
1. Push this folder to a GitHub repo, then "Add New Project" in Vercel and import it (no settings to change).
2. Name the project `qalamonline` to get `qalamonline.vercel.app` (if the name is taken Vercel adds a suffix).
3. If the final URL differs, set the environment variable `NEXT_PUBLIC_SITE_URL` to it (e.g. `https://qalamonline-xyz.vercel.app`) and redeploy.
   It drives canonical links, sitemap, Open Graph and structured data.
4. Add the site in Google Search Console and Bing Webmaster Tools, submit `/sitemap.xml`.
   Paste the verification codes into `NEXT_PUBLIC_GSC_VERIFICATION` / `NEXT_PUBLIC_BING_VERIFICATION`.

## Where to edit content
| File | What |
|---|---|
| `lib/site.ts` | Name, phone, WhatsApp, email, social links, teachers |
| `lib/courses.ts` | The 4 course pages |
| `lib/countries.ts` | Gulf country pages and time zones |
| `lib/faqs.ts` | FAQ page and home FAQ |
| `lib/posts.ts` | Blog posts (add an object, page + sitemap + llms.txt update themselves) |
| `lib/glossary.ts` | Glossary terms |
| `app/globals.css` | Colours (green accent is `--color-qalam-*`) |

## Please confirm before launch
- Phone `+91 73066 85324` is used as the WhatsApp number.
- The Malayalam text on the home page should be checked by a native speaker.
- Course topics and FAQ answers are drafted from the provided brief. Fees, class length, age range and demo classes are not stated anywhere.
