# PlantAid

Point a photo of a plant at it and get a health assessment back — a demo of image-based crop diagnosis for smallholder farming.

**Live:** https://agroai-demo.vercel.app · React · Vite

---

## The idea

A farmer noticing something wrong with a crop has two options: wait for someone who knows, or guess. Both are expensive. Phone cameras are the one diagnostic instrument that is already in every pocket, and leaf symptoms — discolouration, spotting, wilt patterns — are visual by nature.

This is a demo of that interaction: capture or upload, analyse, get a reading and what to do about it.

## Build

React with React Router on Vite, Lucide for iconography. Deliberately light — the target user is on a mid-range Android phone over mobile data, where a heavy bundle is the difference between a tool and a blank screen.

## Running locally

```bash
npm install
npm run dev
```

## Status

A demo, not a diagnostic tool. It illustrates the capture-and-assess flow; it should not be relied on for decisions about a real crop.

---

Built by [Jeremy Ahamioje](https://github.com/JeremyAhamioje).
