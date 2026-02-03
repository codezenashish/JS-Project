const btn = document.querySelector("#color-btn");
const body = document.querySelector("body");
const hex = "0123456789ABCDEF";
btn.addEventListener("click", () => {
  let colorHex = "#";
  for (let i = 0; i < 6; i++) {
    const rendomColor = Math.floor(Math.random() * hex.length);
    
    colorHex += hex[rendomColor];
  }
  console.log(colorHex)
  body.style.backgroundColor = colorHex;
});
