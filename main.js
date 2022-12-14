const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorMessage = document.querySelector(".errorMessage");

const inputs = [email, phone, password, confirmPassword];

inputs.forEach((item) => {
  item.addEventListener("focusin", () => {
    errorMessage.textContent = "";
    item.classList.remove("error");
    if (item == password || item == confirmPassword) {
      password.classList.remove("error");
      confirmPassword.classList.remove("error");
    }
  });
});

const submit = (e) => {
  e.preventDefault();
  console.log("submit");
};

const form = document.querySelector("form");
form.addEventListener("submit", submit);
