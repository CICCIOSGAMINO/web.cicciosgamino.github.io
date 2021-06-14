cicciosgamino.github.io
=======================
[TOC]

Simple personal Github Page built with [Lit](https://github.com/lit), [Lite](https://github.com/CICCIOSGAMINO/Lite) developed with [Vite](https://vitejs.dev/config/#root).

# Link

https://cicciosgamino.github.io

# Github Code Repo

https://github.com/CICCIOSGAMINO/web.cicciosgamino.github.io.git

# Commands

```bash
npm run dev
npm run build
npm run preview
```

# Deploy on Github Pages
Need to deploy the new version on:

cicciosgamino.github.io
cicciosgamino.web.app

```bash
./deloy
```

This command build with Vite the static assets and push the results of dist folder to cicciosgamino.github.io repo used from Github Pages.

# Deploy on Firebase Hosting
The firebase hosting is create with the:

```bash
# logout and login into right account
firebase logout
firebase login

firebase init hosting

# deploy only hosting functionality
firebase deploy --only hosting
```