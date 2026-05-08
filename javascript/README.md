# JavaScript Example

This example extracts the full opinion body from SerpApi's Google Scholar Case Law API HTML output and saves it as a Markdown file.

It uses:

- `serpapi` to request the page HTML
- `cheerio` to parse the HTML and select the opinion body
- `turndown` to convert the opinion HTML to Markdown
- `dotenv` to load the SerpApi API key from a `.env` file
- Node.js `fs` and `path` modules to save the Markdown output

## Requirements

- Node.js
- npm
- A SerpApi account
- A SerpApi API key

You can sign up for a free SerpApi account and use the included 250 free monthly searches to test this example.

## Setup

Install dependencies from the `javascript` directory:

```bash
npm install
```

Create a .env file in the javascript directory:

```bash
cp .env.example .env
```

Add your SerpApi API key:

```
SERPAPI_API_KEY=your_api_key_here
```

## Run the example

From the javascript directory, run:

```bash
node index.js
```

### Output

The script writes the extracted opinion body to the root-level output/ directory:

```
../output/js_9174924986185145879_YYYY-MM-DD.md
```

The generated Markdown file contains the opinion body extracted from:

```html
<div id="gs_opinion">
```

## How it works

The script:

1. Requests the Google Scholar Case Law page as HTML using SerpApi.
2. Loads the HTML with Cheerio.
3. Selects the #gs_opinion element.
4. Converts the selected HTML to Markdown using Turndown.
5. Saves the Markdown file to ../output.

## Documentation

- [SerpApi Google Scholar Case Law API documentation](https://serpapi.com/google-scholar-case-law-api)
- [SerpApi JavaScript package](https://serpapi.com/integrations/javascript)
- [Cheerio](https://cheerio.js.org/)
- [Turndown](https://github.com/domchristie/turndown)