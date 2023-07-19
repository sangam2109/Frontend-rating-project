// Function to set the button identifier
function setButtonId(buttonId) {
  localStorage.setItem('buttonId', buttonId);
}

let activeButton = null;
let previous = null


function hoverprevious(button) {
  if(button>0){
    const previousButton = document.getElementById(button)

    if (previous != null) {
      previous.classList.remove('previousrate');
    }
    console.log(button)
    previousButton.classList.add('previousrate');
    previous = previousButton;
  }
}


function toggleButton(button) {
  if (activeButton != null) {
    activeButton.classList.remove('active');
  }
  button.classList.add('active');
  activeButton = button;
  hoverprevious(activeButton.id - 1);
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
