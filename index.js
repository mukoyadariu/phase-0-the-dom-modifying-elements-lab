// Write your code here!
// index.js

// Remove the <main> element with id "main"
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id attribute of the new <h1> element to "victory"
newHeader.id = "victory";

// Set the text content of the new <h1> element
// Replace "YOUR-NAME" with your actual name
const yourName = "Your Name"; // Replace "Your Name" with your actual name
newHeader.textContent = `${yourName} is the champion`;

// Append the new <h1> element to the body
document.body.appendChild(newHeader);
