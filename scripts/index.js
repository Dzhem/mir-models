document
  .querySelector(".menu-btn")
  .addEventListener("click", handleMenuBtnClick);

function handleMenuBtnClick(e) {
  this.classList.toggle("active");
  document.querySelector(".menu").classList.toggle("show");
}
