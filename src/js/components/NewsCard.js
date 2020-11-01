export default class NewsCard {
  constructor(searchResult, newsDate) {
    this.image = searchResult.urlToImage;    
    this.title = searchResult.title;
    this.text = searchResult.description;
    this.media = searchResult.source.name;
    this.date = newsDate;
  }

  create() {
    const templateCard = `<div class="serch-result__card">
    <img src="" alt="" class="serch-result__image">
    <p class="serch-result__date"></p>
    <h2 class="serch-result__subtitle"></h2>
    <p class="serch-result__news"></p>
    <p class="serch-result__source"></p>
  </div>`;

    const newsCard = document.createElement("div");
    newsCard.insertAdjacentHTML('beforeend', templateCard.trim());
    dataCard.querySelector(".news-card__image").src = (this.image);
    newsCard.querySelector('.serch-result__date').textContent = this.date;
    newsCard.querySelector('.serch-result__subtitle').textContent = this.title;
    newsCard.querySelector('.serch-result__news').textContent = this.text;
    newsCard.querySelector('.serch-result__source').textContent = this.media;
    return newsCard.firstChild;
  }
}