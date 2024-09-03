import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.8.0", (api) => {
  api.onPageChange(() => {
    // Hide empty .item elements
    document.querySelectorAll(".item").forEach((element) => {
      if (!element.hasChildNodes() || element.innerText.trim() === "") {
        element.style.display = "none";
      }
    });

    // Change text content from "Posters" to "Authors"
    document.querySelectorAll(".sr-only").forEach((element) => {
      if (element.textContent.trim() === "Posters") {
        element.textContent = "Author";
      }
    });
  });
});
