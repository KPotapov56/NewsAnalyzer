export default class FormValidator {
  constructor(form, button) {
    this.form = form;
    this.button = button;
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

    if (currentForm.checkValidity()) {
      this.setSubmitButtonState(true);
    } else {
      this.setSubmitButtonState(false);
    }
  }
}