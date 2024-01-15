/*window.onscroll =() => {
    //sticky header
    let header =document.querySelector("header");

    header.classList.toggle('sticky',window.scrollY > 100);
}*/

document.getElementById("form").addEventListener("Login", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting
  
    // Get form values
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
   
   
    // You can customize the success message here
    var successMessage = `Thank you, It's great to connect with you!!`;
  
    // Display the success message
    var messageStatus = document.getElementById("message-status");
    messageStatus.textContent = successMessage;
  
    // Clear form fields
   
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });

  /* Get a reference to the button element
const sum = document.getElementById("sum");

// Event handling function
function handleButtonHover() {
  sum.style.backgroundColor ="white" ; // Change to desired color
 sum.style.color =" blue"; // Change to desired text color
}

function handleButtonHoverOut() {
 sum.style.backgroundColor = ""; // Reset background color
  sum.style.color = ""; // Reset text color
}

// Add event listeners
sum.addEventListener("mouseover", handleButtonHover);
sum.addEventListener("mouseout", handleButtonHoverOut);*/