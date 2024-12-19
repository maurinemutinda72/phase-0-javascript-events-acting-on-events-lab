// Select the dodger element
const dodger = document.getElementById("dodger");

// Function to move the dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) { // Ensure the dodger doesn't go past the left edge
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const rightLimit = 400 - 40; // Game width (400px) - Dodger width (40px)

  if (left < rightLimit) { // Ensure the dodger doesn't go past the right edge
    dodger.style.left = `${left + 1}px`;
  }
}

// Add event listener for keydown events
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
