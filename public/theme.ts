(function initTheme() {
  var theme = localStorage.getItem("color-theme") || "light";
  if (theme === "dark") {
    const html = document.querySelector("html")!;
    html.classList.add("dark");
  }
})();
