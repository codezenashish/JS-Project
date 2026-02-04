const themeHendler = document.querySelector("#theme-switcher");

themeHendler.addEventListener("click", () => {
  let body = document.querySelector("body");
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeHendler.textContent = "Light Mode";
  } else {
    themeHendler.textContent = "Dark Mode";
  }
});
