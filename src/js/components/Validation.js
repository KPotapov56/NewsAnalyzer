export default class Validation {
  constructor(form, errorMessages, button) {
    this.form = form;
    this.button = button;
    this.empty = errorMessages.empty;
    this.wrongLength = errorMessages.wrongLength;
  }

  checkInputValidity(input) { //Метод показывает ошибку, если инпуты не проходят валидацию. Если проходят — скрывает ошибку.
    this.errorElem = document.getElementById(input.id + '-error');

    input.setCustomValidity("");

    if (input.validity.valueMissing) {
      input.setCustomValidity(this.empty);
      this.errorElem.textContent = input.validationMessage;
      return this.errorElem
    }

    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity(this.wrongLength);
      this.errorElem.textContent = input.validationMessage;
      return false
    }

    this.errorElem.textContent = input.validationMessage;
    return input.checkValidity();
  }

  setSubmitButtonState(state) { //Состояние кнопки сабмита зависит от того, прошли все поля валидацию или нет
    this.button = this.form.querySelector('.search__button');

    if (state) {
      this.button.removeAttribute('disabled');
    } else {
      this.button.setAttribute('disabled', true);
    }
  }

  handlerInputForm(evt) { //Добавляет необходимые для валидации обработчики всем полям формы
    const currentForm = evt.currentTarget;

    this.checkInputValidity(evt.target);

    if (currentForm.checkValidity()) {
      this.setSubmitButtonState(true);
    } else {
      this.setSubmitButtonState(false);
    }
  }

  cleanError() { //очистка ошибок
    const error = this.form.querySelectorAll('.error');
    error.forEach(function (form) {
      form.textContent = '';
    });
  }
}
