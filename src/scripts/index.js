import '../pages/index.css';
import Validation from '../js/components/Validation.js';
import NewsApi from '../js/modules/NewsApi.js';

const errorMessages = {
  empty: 'Это обязательное поле',
  wrongLength: 'Должно быть от 2 до 30 символов',
};

const today = new Date();
const date = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);
const dateFrom = date.toISOString().slice(0,10);
const searchInput = document.querySelector('.search__input');
const apiKey = '51841194b29c48c28c7a6afccd5b9d4b';
const config = {
  url: `https://newsapi.org/v2/everything?language=ru`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

const newsApi = new NewsApi(config);
const searchForm = document.forms.searchbar;
const formValid = new Validation(searchForm, errorMessages);

searchForm.addEventListener('input', (evt) => {
  formValid.handlerInputForm(evt);
});

searchForm.addEventListener('submit', () => {
  event.preventDefault();
  console.log(dateFrom);
  newsApi.getNews(dateFrom, apiKey, searchInput.value);
  });

