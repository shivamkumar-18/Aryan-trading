# Deployment guide: GitHub + Cloudflare Pages

Result: a fast static site on the client's domain with HTTPS. Allow 1 to 2 hours the first time.

## 0. Before you start
- Node.js 22 LTS (20.9 or newer works), Git, VS Code
- Accounts: GitHub, Cloudflare, a domain registrar, and Web3Forms **or** Formspree
- Run locally first: `npm install`, then `npm run build`. It must finish without errors.

## 1. Set up the form service (about 10 minutes)
**Web3Forms (default).** Go to web3forms.com, enter the email address that should receive enquiries
(use the **client's** email, not yours), and copy the access key that arrives by email.
The key is designed to be public. In the Web3Forms dashboard, lock it to the final domain if your plan offers that.
**Formspree.** Create a form, copy its endpoint (`https://formspree.io/f/xxxx`), and set
`NEXT_PUBLIC_FORM_PROVIDER=formspree`.
Free plans have monthly limits (at the time of writing: Web3Forms about 250 submissions, Formspree about 50). Check the current pricing pages.

## 2. Configure locally
```bash
cp .env.example .env.local
```
Fill in every value in `.env.local`. Then check:
```bash
npm run dev
```
Submit the form once on http://localhost:3000 and confirm the email arrives.

## 3. Push to GitHub
Create an **empty private repository** on GitHub, then:
```bash
git init                      # skip if the folder is already a Git repo
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR-NAME/aryan-trading-classes.git
git push -u origin main
```
Confirm that `.env.local` is **not** in the repository (it is listed in `.gitignore`).

## 4. Create the Cloudflare Pages project
1. Log in to the Cloudflare dashboard, open **Workers & Pages**, and create a **Pages** project by importing an existing Git repository.
   (Menu names change from time to time. Cloudflare's guide: "Deploy a static Next.js site" in the Pages docs.)
2. Authorise GitHub and pick the repository.
3. Build settings:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npx next build` |
| Build output directory | `out` |
| Production branch | `main` |

4. Add **Environment variables** (Production, and Preview if you want working previews). Use the same names as `.env.example`:
   `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_EMAIL`,
   `NEXT_PUBLIC_FORM_PROVIDER`, and the Web3Forms key or Formspree endpoint.
   The `.node-version` file selects Node 22. If the build reports a Node version problem, add `NODE_VERSION` = `22`.
5. Click **Save and Deploy**. You get an address like `your-project.pages.dev`.

## 5. Connect the custom domain with HTTPS
1. In the Pages project open **Custom domains** and add `www.clientdomain.com`.
2. If the domain's DNS is on Cloudflare, the record is added for you. Otherwise add a **CNAME** record
   `www` pointing to `your-project.pages.dev` at the registrar.
3. For the bare domain (`clientdomain.com`), Cloudflare requires the domain's nameservers to be on Cloudflare.
   Easiest path: add the domain to Cloudflare and change the nameservers at the registrar as instructed, then add both names and redirect one to the other.
4. HTTPS certificates are issued automatically. Wait until the domain shows as active (minutes to a few hours).
5. Set `NEXT_PUBLIC_SITE_URL` to the final address (for example `https://www.clientdomain.com`) and **redeploy**, so the canonical links, share image and sitemap use the real domain.

## 6. Verify build and runtime
- [ ] `npm run check:launch` passes (run it with the real values in `.env.local`)
- [ ] The Deployments tab shows a green successful build
- [ ] `https://yourdomain/` opens over HTTPS, and `http://` redirects to `https://`
- [ ] Menu works on a real phone; WhatsApp buttons open the right chat
- [ ] Submit the demo form on the **live** site: success message shown and the email arrives
- [ ] Syllabus PDF downloads
- [ ] `/sitemap.xml`, `/robots.txt` open and show the real domain
- [ ] A wrong address (for example `/abc`) shows the 404 page
- [ ] View source: title, description, `og:image` and canonical use the real domain
- [ ] Share the link in WhatsApp and check the preview card (previews are cached, so test once the domain is final)
- [ ] Chrome DevTools > Lighthouse: check performance, accessibility, SEO
- [ ] Add the site in Google Search Console and submit `sitemap.xml`

## 7. Everyday workflow
- `git push` to `main` triggers a new production deployment automatically.
- Work in a branch for risky changes. Cloudflare creates a preview address for the branch.
- To undo a bad release, open **Deployments** and roll back to an earlier successful deployment, or revert the commit in Git.

## 8. Free vs paid: what the client should know
| Item | Free | Paid or extra | Notes |
| --- | --- | --- | --- |
| Cloudflare Pages | $0: 500 builds per month, unlimited static requests and bandwidth, 100 custom domains per project, 20,000 files per site | Pro plan (about $20 to $25 per month) raises builds to 5,000 per month and adds concurrent builds | A brochure site rarely needs Pro. We checked these limits in Cloudflare's docs; confirm them again and read Cloudflare's current terms for commercial use before launch |
| Uptime | Static files are served from Cloudflare's global network, with no server for us to keep alive | Business or Enterprise plans for formal support commitments | Free plans normally carry no uptime guarantee in writing |
| Form service | Web3Forms about 250 per month, Formspree about 50 per month | Paid plans for more enquiries, spam filters and integrations | If the site gets more enquiries than the limit, extra ones are lost. Watch the quota and upgrade early |
| Domain | none | About one yearly renewal fee | Must stay in the client's name and be renewed on time |
| Alternatives | Vercel Hobby is meant for personal, non-commercial use. A client site needs a paid Vercel plan | Netlify and others have their own limits | We chose Cloudflare Pages because static traffic is not metered |

## 9. Common deploy problems
| Problem | Fix |
| --- | --- |
| Build fails on Cloudflare but works locally | Run `npm run build` locally. Fix the error, push again. Check file name capitalisation (Linux is case-sensitive) |
| Page shows old phone number or key | `NEXT_PUBLIC_*` values are baked in at build time. Update the variable and redeploy |
| Form says "not switched on yet" | The form key or endpoint variable is missing on Cloudflare for that environment |
| Form fails on the live site only | Check the Web3Forms key is locked to a different domain, or the monthly quota is used |
| Domain stuck on "pending" | Check the CNAME or nameservers at the registrar and wait for DNS to update |
