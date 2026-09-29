# Penguin Learning

Penguin is a Flask web app with server-side sessions, a SQL database, and OpenAI-powered language activities.

## Important: GitHub Pages is not the app host

GitHub Pages only hosts static files. It cannot run `app.py`, Flask routes, sessions, a database, or the OpenAI API. The app must be deployed to a Python-capable host such as Render. GitHub Pages can only host a separate static frontend, and the OpenAI key must never be placed in browser JavaScript.

## Deploy on Render

1. Create a new Render Blueprint from this repository.
2. Set `OPENAI_API_KEY` to your OpenAI API key when prompted.
3. Render will create the web service and PostgreSQL database from `render.yaml`.
4. Open the web service URL. The health check is available at `/health`.

For local development, install the packages in `requirements.txt`, set `OPENAI_API_KEY`, and run:

```text
python app.py
```

Without an OpenAI key, the login and static pages can still load, but AI activities return a configuration error.
