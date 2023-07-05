// Function to set the button identifier
function setButtonId(buttonId) {
  localStorage.setItem('buttonId', buttonId);
}

let activeButton = null;
let previous=null


function hoverprevious(button) {
  if (previous != null) {
  
    previous.classList.remove('previousrate');
  }

  if (previous !== button) {
    button.classList.add('previousrate');
    previous = button;
  } else {
    previous = null;
  }
}

function toggleButton(button) {
  if (activeButton !== null) {
    let previous = activeButton;
    hoverprevious(previous);
    previous.classList.remove('active');
  }

  if (activeButton !== button) {
    button.classList.add('active');
    activeButton = button;
  } else {
    activeButton = null;
  }
}

function handlesubmit() {
  let submitButton = document.getElementById("submit-button");
  let ratingButtons = document.querySelectorAll(".box");

  for (let i = 0; i < ratingButtons.length; i++) {
    let button = ratingButtons[i];
    if (button.classList.contains("active")) {
      submitButton.disabled = false;
      window.location.href = 'thankyou.html';
      return; 
    }
  }

  
  window.alert("Please select a rating button");
}
