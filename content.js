function getCleanParagraphs(paragraphs) {
  const unwantedPatterns = [
    /read more/i,
    /you might like/i,
    /sponsored/i,
    /related articles/i,
    /advertisement/i,
    /click here/i
  ];

  return paragraphs
    .map((p) => p.innerText.trim())
    .filter((text) => text && !unwantedPatterns.some((pattern) => pattern.test(text)));
}

function getArticleText() {
  let paragraphs = [];

  const article = document.querySelector("article");
  if (article) {
    paragraphs = Array.from(article.querySelectorAll("p"));
  } else {
    // Try main tag or fallback to all <p>
    const main = document.querySelector("main");
    if (main) {
      paragraphs = Array.from(main.querySelectorAll("p"));
    } else {
      paragraphs = Array.from(document.querySelectorAll("p"));
    }
  }

  const cleanText = getCleanParagraphs(paragraphs).join("\n");
  return cleanText || "Could not extract meaningful article text.";
}

// Listen for message from popup.js
chrome.runtime.onMessage.addListener((req, _sender, sendResponse) => {
  if (req.type === "GET_ARTICLE_TEXT") {
    const text = getArticleText();
    sendResponse({ text });
  }
});
