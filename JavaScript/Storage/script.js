localStorage.setItem("Name", "Aniket");

let bodyElement = document.querySelector("body");

let allBtns = document.querySelectorAll("button");

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {

    localStorage.setItem("COLORTHEME", btn.innerHTML.toLowerCase());
    setColorThemeBody();

  });
});

let setColorThemeBody = () => {
  let color = localStorage.getItem("COLORTHEME");
  bodyElement.style.background = color
};

setColorThemeBody();
