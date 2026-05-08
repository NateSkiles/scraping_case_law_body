# Python Example

This example extracts the full opinion body from SerpApi's Google Scholar Case Law API HTML output and saves it as a Markdown file.

It uses:

- `serpapi` to request the page HTML
- `beautifulsoup4` to parse the HTML and select the opinion body
- `markdownify` to convert the opinion HTML to Markdown
- `python-dotenv` to load the SerpApi API key from a `.env` file
- Python's standard `pathlib` and `datetime` modules to save the Markdown output

## Requirements

- Python 3
- A SerpApi account
- A SerpApi API key

You can sign up for a free SerpApi account and use the included 250 free monthly searches to test this example.

## Setup

Create and activate a virtual environment from the `python` directory:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a .env file in the python directory:

```bash
cp .env.example .env
```

Add your SerpApi API key:

```
SERPAPI_KEY=your_api_key
```

## Run the example

From the python directory, run:

```bash
python main.py
```

### Output

The script writes the extracted opinion body to the root-level `output/` directory:

```
../output/py_9174924986185145879_YYYY-MM-DD.md
```

The generated Markdown file contains the opinion body extracted from:

```html
<div id="gs_opinion">
```

## How it works

The script:

1. Requests the Google Scholar Case Law page as HTML using SerpApi.
2. Parses the returned HTML with Beautiful Soup.
3. Selects the #gs_opinion element.
4. Converts the selected HTML to Markdown using markdownify.
5. Saves the Markdown file to ../output.

Documentation

- [SerpApi Google Scholar Case Law API documentation](https://serpapi.com/google-scholar-case-law-api)
- [SerpApi Python package](https://github.com/serpapi/google-search-results-python)
- [SerpApi Python documentation](https://serpapi.com/integrations/python)
- [Beautiful Soup documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- [markdownify](https://github.com/matthewwithanm/python-markdownify)