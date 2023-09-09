(function initTheme() {
  var theme = localStorage.getItem("color-theme");
  if (theme === "dark") {
    const html = document.querySelector("html")!;
    html.classList.add("dark");
  }
})();
