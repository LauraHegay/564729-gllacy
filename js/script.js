var link = document.querySelector(".feedback-link");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var username = popup.querySelector("[name=feedback-user-name]");
var email = popup.querySelector("[name=feedback-user-email]");
var message = popup.querySelector("[name=feedback-message]");

var isStorageSupport = true;
var storageEmail = "";
var storageUsername = "";

try {
  storageEmail = localStorage.getItem("email");
  storageUsername = localStorage.setItem("username");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storageEmail) {
    email.value = storageEmail;
    username.value = storageUsername;
    message.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
