## 2. README.md
```markdown
# Modality Ranker

A simple web app for comparing therapeutic modalities using an ELO-style ranking system.

## Features

- Compare two therapeutic approaches
- Add your own modalities via text input
- Results saved to Google Sheets via Google Apps Script
- Clean, mobile-friendly interface

## Setup

1. **Create Google Apps Script:**
   - Go to [script.google.com](https://script.google.com)
   - Create new project with the code from `google-script.js`
   - Deploy as web app
   - Copy the deployment URL

2. **Update the website:**
   - Replace `YOUR_APPS_SCRIPT_URL_HERE` in `index.html` with your deployment URL

3. **Create Google Sheet:**
   - Create a new Google Sheet
   - Note the Sheet ID from the URL
   - Replace `YOUR_SHEET_ID` in the Apps Script

## Deploy

Deploy to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## Usage

Users can either:
- Click on suggested modalities to compare them
- Type their own modalities in the input fields
- Skip comparisons they can't answer

All choices are recorded with timestamps to your Google Sheet.
```

Don't forget to:
- Replace `YOUR_APPS_SCRIPT_URL_HERE` with your actual Google Apps Script URL
