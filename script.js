"use strict";

const Form = document.querySelector("form");
const emailField = document.querySelector("input");
const smallMessage = document.querySelector("small");
const emailDiv = document.querySelector("#emailDiv");
const ModalDiv = document.querySelector("#ModalDiv");
const closeModel = document.querySelector("#closeModel");
const addEmail = document.querySelector(".addEmail");

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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    smallMessage.textContent = "valid email required";
    emailField.parentElement.classList.remove("border-black-300");
    emailField.parentElement.classList.add("border-red-300", "bg-[#ff6257]/20");
    // console.log(emailField.parentElement);
    return;
  } else {
    ModalDiv.classList.toggle("hidden");
    ModalDiv.classList.toggle("sm:flex");
    addEmail.textContent = `${email}`;
  }

  emailField.value = "";
});

const closeIt = function (e) {
  e.preventDefault();
  ModalDiv.classList.add("hidden");
  ModalDiv.classList.remove("sm:flex");
};

ModalDiv.addEventListener("click", closeIt);
closeModel.addEventListener("click", closeIt);
