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

function handleSubmit() {
  let submitButton = document.getElementById("submit");
  submitButton.disabled = true;

  let ratingButtons = document.querySelectorAll(".box");
  for (let i = 0; i < ratingButtons.length; i++) {
    let button = ratingButtons[i];
    if (button.classList.contains("active")) {
      submitButton.disabled = false;
      window.location.href = 'thankyou.html';
      return; // Exit the function and prevent navigation
    }
  }

  // If no rating button is active, show an alert message
  window.alert("Please select a rating button");
}

function init() {
  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", handleSubmit);

  let ratingButtons = document.querySelectorAll(".box");
  for (let i = 0; i < ratingButtons.length; i++) {
    let button = ratingButtons[i];
    button.addEventListener("click", function () {
      toggleButton(button);
    });
  }
}

// Call the init function when the document is loaded
document.addEventListener("DOMContentLoaded", init);