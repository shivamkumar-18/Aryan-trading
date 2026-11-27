# Client handover and ownership checklist

Use this after the **final payment** is received. Sign and date the handover note at the end.

## 1. Recommended ownership model
- **Repository:** private GitHub repo. Transfer to the client's GitHub account at handover.
- **Hosting:** Cloudflare Pages in the client's Cloudflare account.
- **Domain and DNS:** registered in the client's name, DNS managed in the client's Cloudflare account.
- **Forms:** form service account created with the client's email address.

Tip: while the project is in progress and unpaid, keep staging on your own accounts (the `pages.dev`
address). Move to the client's accounts at go-live. A Pages project cannot simply be moved between
accounts; recreating it from the repository takes about 15 minutes using DEPLOYMENT.md.

## 2. Before handover: the client must have
- [ ] A GitHub account (or organisation) with two-factor authentication
- [ ] A Cloudflare account with two-factor authentication
- [ ] Access to the domain registrar account
- [ ] A Web3Forms or Formspree account on the client's email
- [ ] A password manager (for example Bitwarden)

## 3. Transfer steps
**GitHub repository**
1. Repository > Settings > General > Danger Zone > **Transfer ownership**.
2. Enter the client's GitHub username and confirm. The client accepts the transfer by email.
3. Check the repo is still private and the history is intact.

**Hosting (Cloudflare Pages)**
1. Client's Cloudflare: create the Pages project from the transferred repository (DEPLOYMENT.md step 4).
2. Re-enter the environment variables (list below).
3. Deploy, test on the `pages.dev` address, then move the domain (next block).
4. Delete the staging project in your own account only after the live site works.

**Domain and DNS**
1. If you bought the domain for the client: use the registrar's **account transfer** or "push" feature to move it into the client's registrar account, or transfer it between registrars with the authorisation code.
2. Add the domain to the client's Cloudflare, update nameservers if needed, and attach it to the Pages project.
3. Turn on auto-renew and add a reminder 30 days before renewal.

**Form service**
1. The client creates a new access key (Web3Forms) or form (Formspree) on **their** email.
2. Update the variable on Cloudflare and redeploy. Submit a test enquiry.
3. Disable the old key that used your email.

**Environment variables to re-create (names only; none are real secrets)**
`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_EMAIL`,
`NEXT_PUBLIC_FORM_PROVIDER`, `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` or `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.

**Credentials:** never send passwords by chat or email. Have the client create their own accounts, or share through a password manager, and ask the client to change any password you ever knew.

## 4. Remove your own access
- [ ] Remove yourself as collaborator on GitHub
- [ ] Remove yourself from the Cloudflare account members
- [ ] Remove yourself from Search Console, Analytics and the form service
- [ ] Revoke any personal API tokens you created
- [ ] Keep a copy of the code only if your agreement allows it

## 5. Handover pack to give the client
- [ ] This repo with README.md, DEPLOYMENT.md and HANDOVER.md
- [ ] Accounts table: service, owner email, what it is for, renewal date, cost
- [ ] Short guide (or video) showing how to: change a phone number, add or edit a course, replace the syllabus, check form enquiries
- [ ] Support terms: what the free support period covers and how to report a problem
- [ ] Signed handover note and final invoice marked paid

## 6. Basic maintenance notes
**Monthly (15 minutes)**
- Open the live site on a phone and send a test enquiry
- Check the form service quota
- Look at Cloudflare Deployments for failed builds
- Check Search Console for errors

**Every 3 months**
- `npm outdated` and `npm audit`. Update packages in a branch, run `npm run build` and `npm run lint`, check the preview, then merge
- Re-read the legal pages and disclosures: rules for trading education change, so the client should review them with a lawyer
- Confirm domain renewal date and payment method

**Editing content:** `lib/content.ts` (courses, FAQs), `lib/site.ts` (address, hours), `public/` (syllabus and images). Commit and push; the site redeploys by itself.

**If something breaks:** roll back in Cloudflare Deployments, or `git revert` the last commit. Static sites have no server or database to repair.

**Not included in this project:** online payments, student login, a database, a CMS. These can be added later as a paid phase.

## 7. Handover note
I confirm that I received the repository, hosting, domain and form accounts listed above.

Client name: ____________________   Signature: ____________   Date: ____________
Developer name: __________________  Signature: ____________   Date: ____________
