# studydeck

Single-file study apps. One app per subject, each app is a static HTML file served
by its own Cloudflare Worker.

## Layout

```
apps/<subject>/          one app = one Cloudflare Worker
  public/index.html      the study material (self-contained HTML)
  cloudflare.config.ts   worker name + compatibility date
  wrangler.config.ts     static assets directory
archive/<name>/          retired snapshots, kept for reference only
```

## Live

| app | worker | url |
| --- | --- | --- |
| discourse-analysis | nono | https://nono.sllty.com |

## Deploy one app

```sh
cd apps/discourse-analysis
npm install
cf deploy --profile <profile>
```

`npm install` is per app. There is no root install and no workspace hoisting, so
deploying one app can never affect another.

## Add a subject

```sh
cp -r apps/discourse-analysis apps/<new-subject>
```

Then set `worker.name` in the new app's `cloudflare.config.ts`, replace
`public/index.html`, and deploy. Each app targets a different worker, so adding
one does not touch any existing site.

## Archive

`archive/` holds snapshots of retired versions. They are not deploy targets and
are not wired to anything.