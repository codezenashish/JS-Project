const themeHendler = document.querySelector("#theme-switcher");
const body = document.querySelector("body");

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  body.classList.add("dark");
  themeHendler.textContent = "Light Mode";
}
themeHendler.addEventListener("click", () => {
  let theme = "light";
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    theme = "dark";
    themeHendler.textContent = "Light Mode";
  } else {
    themeHendler.textContent = "Dark Mode";
  }
  localStorage.setItem("theme", theme);
});
