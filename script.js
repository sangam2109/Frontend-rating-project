// Function to set the button identifier
function setButtonId(buttonId) {
    localStorage.setItem('buttonId', buttonId);
  }
  
  // Function to get the button identifier
//   function getButtonId() {
//     return localStorage.getItem('buttonId');
//   }
  function toggleButton(button) {
    button.classList.toggle('active');
  }
  