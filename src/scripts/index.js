import '../pages/index.css';
import Validation from '../js/components/Validation.js';

const errorMessages = {
  empty: 'Это обязательное поле',
  wrongLength: 'Должно быть от 2 до 30 символов',
};

const searchForm = document.forms.searchbar;
const formValid = new Validation(searchForm, errorMessages);

searchForm.addEventListener('input', (evt) => {
  formValid.handlerInputForm(evt);
});