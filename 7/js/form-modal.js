// код неправильный, просто чередует окна
let counter = 0;
const modals = document.getElementsByClassName("page-form__modal");
const modalButtons = document.getElementsByClassName("page-form__modal-button");

document.querySelector(".user-form__button").addEventListener("click", (event) => {
  event.preventDefault();
  showModal();
})

for (let button of modalButtons) {
  button.addEventListener("click", () => {
    closeModal();
  });
}

function showModal() {
  modals[counter % 2].style.display = "block";
  counter++;
}

function closeModal() {
  for (let modal of modals) {
    modal.style.display = "none";
  }
}
