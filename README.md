# 🧠 AI Summary and Translation for Articles (Chrome Extension)

This Chrome extension allows you to **summarize** and **translate** online articles using **Google Gemini (2.0 Flash)**. It extracts article content from any webpage and provides concise summaries or translations in your preferred language — all with the click of a button.

---

## 🚀 Features

- 🔍 **Extracts article text** from the current web page.
- ✍️ **Summarizes** the content in:
  - Brief (2–3 sentences)
  - Detailed
  - Bullet points (5–7 key points)
- 🌐 **Translates** content into:
  - English (`en`)
  - French (`fr`)
  - Spanish (`es`)
  - Hindi (`hi`)
- 📋 **Copy to Clipboard** support
- ⚡ Powered by **Google Gemini API** (`gemini-1.5-flash`)

---

## 📦 Files Overview
```
├── manifest.json # Chrome extension manifest
├── popup.html # Extension UI
├── popup.js # UI logic: summary, translation, copy
├── content.js # Extracts article content from webpage
├── options.html # Options page to input Gemini API key
├── options.js # Logic to save and load API key
├── styles.css # Styling for popup and options
└── README.md # This file
```
