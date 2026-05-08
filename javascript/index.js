const fs = require("fs");
const path = require("path");
const { getHtml } = require("serpapi");
const cheerio = require("cheerio");
const TurndownService = require("turndown");
require("dotenv").config();

const caseId = "9174924986185145879";
const outputDir = path.join(__dirname, "..", "output");

if (!process.env.SERPAPI_KEY) {
    throw new Error("SERPAPI_KEY is required.");
}

getHtml({
    api_key: process.env.SERPAPI_KEY,
    engine: "google_scholar_case_law",
    case_id: caseId,
}, (html) => {
    const $ = cheerio.load(html);

    const opinionHtml = $("#gs_opinion").html();

    if (!opinionHtml) {
        console.error("Could not find case opinion in the search results.");
        return;
    }

    const turndownService = new TurndownService({
        headingStyle: "atx",
        codeBlockStyle: "fenced",
        strongDelimiter: "**",
        emDelimiter: "*",
        linkStyle: "inlined",
    });

    const markdown = turndownService.turndown(opinionHtml);

    const isoDate = new Date().toISOString().split("T")[0];
    const outputPath = path.join(outputDir, `js_${caseId}_${isoDate}.md`);

    fs.mkdirSync(outputDir, { recursive: true })
    fs.writeFileSync(outputPath, markdown, "utf8");

    console.log(`Saved case opinion to ${outputPath}`);
});