const rootElement = document.querySelector("html");
const colorModeButton = document.querySelector(".btn-purple");
const brandIcon = document.querySelector(".brand-icon");

const colorScheme = matchMedia("(prefers-color-scheme: dark)");

// if-else statement shorthand [condition ? truthy : falsy]
colorScheme.matches ? changeColorScheme("dark") : changeColorScheme("light")


colorModeButton.addEventListener("click", () => {
  if (rootElement.getAttribute("data-bs-theme") === 'dark') {
    changeColorScheme("light");
  } else {
    changeColorScheme("dark");
  }
})

colorScheme.addEventListener("change", (event) => {
  if (event.matches) {
    changeColorScheme("dark");
  } else {
    changeColorScheme("light");
  }
})

function changeColorScheme(colorMode) {

  switch (colorMode) {
    case "light":
      rootElement.setAttribute("data-bs-theme", "light");
      brandIcon.classList.add("brand-icon-light");
      brandIcon.classList.remove("brand-icon-dark");
      break;

    case "dark":
      rootElement.setAttribute("data-bs-theme", "dark");
      brandIcon.classList.add("brand-icon-dark");
      brandIcon.classList.remove("brand-icon-light");
      break;

    default:
      console.log(colorMode);
  }

}
