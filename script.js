"use strict";

const Form = document.querySelector("form");
const emailField = document.querySelector("input");
const smallMessage = document.querySelector("small");
const emailDiv = document.querySelector("#emailDiv");

emailField.addEventListener("click", (e) => {
  if (emailDiv.classList.contains("border-red-300")) {
    smallMessage.textContent = "";
    console.log(true);
    emailDiv.classList.add("border-black-300");
    emailDiv.classList.remove("border-red-300", "bg-[#ff6257]/20");
  }
});

Form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const { email } = Object.fromEntries(formData);

  if (!email) {
    smallMessage.textContent = "valid email required";
    emailField.parentElement.classList.remove("border-black-300");
    emailField.parentElement.classList.add("border-red-300", "bg-[#ff6257]/20");
    console.log(emailField.parentElement);
  }

  emailField.value = "";
});
