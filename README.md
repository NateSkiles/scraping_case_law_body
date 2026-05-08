# Scraping Case Law Opinion Text with SerpApi

This repository contains JavaScript and Python examples for extracting full opinion text from SerpApi's Google Scholar Case Law API HTML output.

SerpApi's Google Scholar Case Law API returns structured case law data. For workflows that need the full opinion body, the opinion text is available in the raw HTML response. These examples show how to:

1. Request a Google Scholar Case Law page from SerpApi as HTML.
2. Parse the returned HTML.
3. Select the `#gs_opinion` element.
4. Convert the opinion body to Markdown.
5. Save the Markdown output locally.

## Examples

This repo includes two implementations:

- [`/javascript`](./javascript) - JavaScript example using `serpapi`, `cheerio`, and `turndown`
- [`/python`](./python) - Python example using `serpapi`, `beautifulsoup4`, and `markdownify`

Both examples use the same sample Google Scholar Case Law `case_id`:

```
9174924986185145879
```

## Requirements

To run the examples, you will need:

- A SerpApi account
- A SerpApi API key
- Node.js for the JavaScript example
- Python 3 for the Python example

You can sign up for a free SerpApi account and use the included 250 free monthly searches to test these examples.

## Project structure

```
.
├── javascript/
│   ├── index.js
│   ├── package.json
│   └── README.md
├── python/
│   ├── main.py
│   ├── requirements.txt
│   └── README.md
├── output/
├── .gitignore
└── README.md
```

## Environment variables

Both examples expect your SerpApi API key to be available as an environment variable:

```
SERPAPI_KEY=your_serpapi_api_key
```

Each language-specific README includes setup instructions.

## Documentation

- [SerpApi sign up](https://serpapi.com/users/sign_up)
- [SerpApi Google Scholar Case Law API documentation](https://serpapi.com/google-scholar-case-law-api)
- [SerpApi dashboard](https://serpapi.com/dashboard)

## Blog post

[Link Blog]

