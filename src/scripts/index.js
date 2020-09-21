import '../pages/index.css';
import FormValidator from '../js/FormValidator.js';
import NewsApi from '../js/NewsApi.js';

const formSearch = document.forms.searchbar;
const searchInput = formSearch.elements.input;
const searchButton = formSearch.elements.button;

const config = {
  url: `https://newsapi.org/v2/everything?language=ru&from=2020-09-12&to=2020-09-19&pageSize=100&apiKey=51841194b29c48c28c7a6afccd5b9d4b`,
};

const formSearchValid = new FormValidator(formSearch);
const newsApi = new NewsApi(config, searchInput);



searchInput.addEventListener('input', (event) => {
  event.preventDefault();
  formSearchValid.handlerInputForm(event);
  console.log('ввод текста')
});

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  formSearchValid.handlerInputForm(event);
  newsApi.getNews();
  console.log(searchInput.value);
});