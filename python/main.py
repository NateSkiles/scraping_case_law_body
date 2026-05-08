import os
from datetime import date
from pathlib import Path

import serpapi
from bs4 import BeautifulSoup
from dotenv import load_dotenv
from markdownify import markdownify

CASE_ID = "9174924986185145879"

BASE_DIR = Path(__file__).resolve().parent
OUTPUT_DIR = BASE_DIR.parent / "output"


def main():
    load_dotenv()

    api_key = os.getenv("SERPAPI_KEY")

    if not api_key:
        raise RuntimeError("SERPAPI_KEY is required.")

    html = serpapi.search(
        api_key=api_key,
        engine="google_scholar_case_law",
        case_id=CASE_ID,
        output="html",
    )

    soup = BeautifulSoup(html, "html.parser")
    opinion = soup.select_one("#gs_opinion")

    if not opinion:
        raise RuntimeError("Could not find case opinion in the search results.")

    markdown = markdownify(
        str(opinion),
        heading_style="ATX",
        bullets="-",
    ).strip()

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    iso_date = date.today().isoformat()
    output_path = OUTPUT_DIR / f"py_{CASE_ID}_{iso_date}.md"

    output_path.write_text(markdown, encoding="utf-8")

    print(f"Saved case opinion to {output_path}")


if __name__ == "__main__":
    main()
