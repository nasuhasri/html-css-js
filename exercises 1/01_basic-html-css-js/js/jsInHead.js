function initializeInHead() {
  const headingTextElement = document.getElementById("headingText");
  console.log("JS at the head ->", headingTextElement);
  console.log("JS at the head ->", headingTextElement.innerHTML);
}
addEventListener("DOMContentLoaded", (event) => {
  initializeInHead();
});
