# Penguin Learning

This repository includes a GitHub Pages-only version in `docs/`.

## GitHub Pages version

The static version does not need Flask, Python, a database, or an API key. It uses built-in language exercises and saves the username, XP, penguin color, and leaderboard data in the browser's `localStorage`.

Because GitHub Pages is static hosting, data is local to each browser. Users do not share one leaderboard, and the OpenAI-powered question generation from the original Flask version is not included.

## Publish it on GitHub Pages

1. Commit and push the changes to GitHub.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose the `main` branch and the `/docs` folder.
5. Save and open the Pages URL after GitHub finishes deploying.

The site starts at `docs/index.html`, which is the login page.

## Original Flask version

The original server-backed version remains in `app.py` and `templates/`. It requires a Python host, a database, and an OpenAI API key. It cannot run directly on GitHub Pages.
