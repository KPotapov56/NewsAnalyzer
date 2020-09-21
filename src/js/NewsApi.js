export default class NewsApi {
  constructor(config, searchInput) {
    this.url = config.url;
    this.searchInput = searchInput;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  };

  getNews() {
    return fetch(this.url + `&q=${this.searchInput.value}`)
      .then(this._getResponseData);
  }
}