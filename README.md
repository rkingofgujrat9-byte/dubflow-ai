# DubFlow AI — multilingual dubbing prototype

## Run locally
1. Install Node.js 20+.
2. In this folder run:
   npm install
   npm run dev
3. Open http://localhost:3000

## Next production steps
- Add secure object storage for uploads.
- Add FFmpeg worker.
- Connect licensed speech-to-text, translation and text-to-speech providers.
- Add a job queue for long videos.
- Add authentication, rate limits and usage credits.
- Never expose provider API keys in browser code.

The current `/api/dub` endpoint is intentionally a safe placeholder until providers are configured.
