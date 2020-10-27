export default class NewsApi {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  };

  getNews(dateFrom, apiKey, query) {
    return fetch(`${this.url}&from=${dateFrom}&apiKey=${apiKey}&q=${query}`, {
      headers: this.headers
    })
      .then(this._getResponseData);
  }
}