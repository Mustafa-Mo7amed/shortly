import { shortenUrl } from "./api.js";

const shortenBtn = document.querySelector(".shorten-btn");

function toggleShortenBtnLoadingSpinner(hide) {
  const shortenBtnText = document.querySelector(".shorten-btn span");
  const spinner = document.querySelector(".shorten-btn .spinner");
  if (hide) {
    shortenBtnText.classList.add("hidden");
    spinner.classList.remove("hidden");
  } else {
    shortenBtnText.classList.remove("hidden");
    spinner.classList.add("hidden");
  }
}

function addShortLinkCard(url, shortUrl) {
  const template = document.getElementById("link-card-template");
  const cardClone = template.content.cloneNode(true);
  cardClone.querySelector(".original-link").textContent = url;
  cardClone.querySelector(".short-link").textContent = shortUrl.link;
  

  const copyLinkBtn = cardClone.querySelector(".copy-btn");
  copyLinkBtn.addEventListener("click", (event) => {
    const currentCopyBtn = event.currentTarget;
    navigator.clipboard.writeText(shortUrl.link);
  });

  const cardsContainer = document.querySelector(".short-link-cards-container");
  cardsContainer.appendChild(cardClone);
}

shortenBtn.addEventListener("click", async () => {
  const url = document.getElementById("shorten-link-input").value;

  toggleShortenBtnLoadingSpinner(true);

  const shortUrl = await shortenUrl(url);
  addShortLinkCard(url, shortUrl);

  document.getElementById('shorten-link-input').value = '';

  toggleShortenBtnLoadingSpinner(false);
});
