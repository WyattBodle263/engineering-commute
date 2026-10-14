# The Engineering Commute — Website

A simple one-page site for the podcast. No build tools needed. It works as-is on GitHub Pages.

## What's in here

| File | What it is |
| --- | --- |
| `index.html` | The page itself |
| `style.css` | Colors, fonts and layout |
| `episodes.js` | **The only file you normally edit.** Listen links and the episode list. |
| `site.js` | Builds the buttons and episode list from `episodes.js`. Leave it alone. |
| `assets/` | Cover art, social-share image and icons |
| `.nojekyll` | Tells GitHub Pages to serve the files exactly as they are |

## Put it online with GitHub Pages

1. Sign in at github.com and click **New repository**.
2. Name it something like `engineering-commute`, set it to **Public**, and click **Create repository**.
3. On the new repo page, click **uploading an existing file**.
4. Drag in everything from this folder: `index.html`, `style.css`, `episodes.js`, `site.js`, `.nojekyll`, `README.md`, and the whole `assets` folder. Click **Commit changes**.
   - Windows hides files that start with a dot. If `.nojekyll` doesn't show up, the site will still work without it.
5. In the repo, go to **Settings → Pages**.
6. Under **Build and deployment**, set **Source** to **Deploy from a branch**, pick the **main** branch and the **/ (root)** folder, and click **Save**.
7. Wait a minute or two, then refresh that page. Your site address appears at the top, something like `https://YOUR-USERNAME.github.io/engineering-commute/`.

## Updating the site

Open `episodes.js` on GitHub (click the file, then the pencil icon), make your change, and click **Commit changes**. The site updates within a minute or two.

- **Listen buttons:** paste your Spotify show link, Apple Podcasts link and RSS link into the `SHOW` section. Any link left empty is hidden.
- **Releasing an episode:** change that episode's `status` from `"soon"` to `"out"`, and paste its Spotify and Apple episode links into `spotify` and `apple`.
- **Adding an episode:** copy one episode block (from `{` to `},`), paste it at the bottom of the list, and change the number, title, minutes and description.

## Optional

- **Link previews** already point to theengineeringcommute.com. If you ever change domains, update the `og:image`, `og:url` and `canonical` lines in `index.html`.
- **Your own domain:** in **Settings → Pages → Custom domain**, enter a domain you own and follow GitHub's DNS instructions.
