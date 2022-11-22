const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", formCheck);

function formCheck(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  console.log(formElement)
  const email = formElement.email.value;
  const password = formElement.password.value;
  if (email.length === 0 || password.length === 0) {
    alert("Поля не заповнені");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  formEl.reset();
}


