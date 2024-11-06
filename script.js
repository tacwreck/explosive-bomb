// Selecting the bomb element and click counter display
const bombEmoji = '💣';
const clickCounterElement = document.getElementById('click-counter');
let clickCount = 0;

// Function to update the click counter on the screen
function updateClickCounter() {
  clickCount++;
  clickCounterElement.textContent = `Clicks: ${clickCount}`;
}

// Function to handle bomb click (increase counter only)
function handleBombClick() {
  updateClickCounter();
}

// Event listener for bomb click (no animation or text, just count)
document.getElementById('bomb').addEventListener('click', handleBombClick);

 
