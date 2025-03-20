// Load the header on all pages
document.addEventListener("DOMContentLoaded", function () {
  fetch("/chicagobirdmigration.net/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
    });
})
// If #markdown-content exists, load README.md into it
  const markdownContainer = document.getElementById("markdown-content");
  if (markdownContainer) {
    fetch('README.md')
      .then(response => response.text())
      .then(text => {
        markdownContainer.innerHTML = marked.parse(text);
      })
      .catch(error => {
        markdownContainer.innerHTML = "<p>Error loading content.</p>";
        console.error("Error fetching markdown:", error);
      });
  };
document.addEventListener("DOMContentLoaded", function () {
  fetch("/chicagobirdmigration.net/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });
});
