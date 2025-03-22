document.addEventListener("DOMContentLoaded", function () {
  function resizeIframe() {
  const iframe = document.getElementById("dashboard");
  if (!iframe) return; // only run if the dashboard iframe exists
  const header = document.getElementById("header-container");
  const footer = document.getElementById("footer-container");
  const headerHeight = header ? header.offsetHeight : 0;
  const footerHeight = footer ? footer.offsetHeight : 0;
  const availableHeight = window.innerHeight - headerHeight - footerHeight - 10;
  iframe.style.height = availableHeight + "px";
}


  fetch("https://windycitybirdlab.github.io/chicagobirdmigration.net/pages/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
      resizeIframe();
    })
    .catch(error => console.error("Error loading header:", error));

  fetch("https://windycitybirdlab.github.io/chicagobirdmigration.net/pages/footer.html")
    .then(response => response.text())
    .then(data => {
    const footerElement = document.getElementById("footer-container");
    if (footerElement) {
      footerElement.innerHTML = data;
      resizeIframe();
    }
    })
    .catch(error => console.error("Error loading footer:", error));

  const markdownContainer = document.getElementById("markdown-content");
  if (markdownContainer) {
    fetch('https://windycitybirdlab.github.io/chicagobirdmigration.net/README.md')
      .then(response => response.text())
      .then(text => {
        markdownContainer.innerHTML = marked.parse(text);
      })
      .catch(error => {
        markdownContainer.innerHTML = "<p>Error loading content.</p>";
        console.error("Error fetching markdown:", error);
      });
  }

  window.addEventListener('resize', function() {
    resizeIframe();
  });
});
