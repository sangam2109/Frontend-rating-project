// Function to set the button identifier
function setButtonId(buttonId) {
    localStorage.setItem('buttonId', buttonId);
  }
  
  // Function to get the button identifier
//   function getButtonId() {
//     return localStorage.getItem('buttonId');
//   }
let activeButton = null;

function toggleButton(button) {
  if (activeButton !== null) {
    activeButton.classList.remove('active');
  }

  if (activeButton !== button) {
    button.classList.add('active');
    activeButton = button;
  } else {
    activeButton = null;
  }
}

function handlesubmit() {
  let submitButton = document.getElementById("submit");
  submitButton.disabled = true;

  let ratingButtons = document.querySelectorAll(".box");
  for (let i = 0; i < ratingButtons.length; i++) {
    let button = ratingButtons[i];
    if (button.classList.contains("active")) {
      submitButton.disabled = false;
      window.location.href='thankyou.html';
      return; // Exit the function and prevent navigation
    }
  }

  // If no rating button is active, show an alert message
  window.alert("Please select a rating button");
}

  
  
    

  