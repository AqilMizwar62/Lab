// Automatic Slideshow for Hero Section
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Hide all slides
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex-1].style.display = "block";  // Show current slide
  setTimeout(showSlides, 4000); // Change slide every 4 seconds (adjust as needed)
}

// Close the form overlay
function closeForm() {
  document.querySelector('.form-overlay').style.display = 'none';
}

// Email Validation (Real-time) for Login
function validateEmail() {
  const email = document.getElementById('email');
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const errorMessage = document.getElementById('email-error');
  
  if (!regex.test(email.value)) {
    email.classList.add('input-error');
    if (!errorMessage) {
      const errorMsg = document.createElement('span');
      errorMsg.id = 'email-error';
      errorMsg.style.color = 'red';
      errorMsg.textContent = 'Please enter a valid email address.';
      email.parentElement.appendChild(errorMsg);
    }
  } else {
    email.classList.remove('input-error');
    if (errorMessage) {
      errorMessage.remove(); // Remove error message if the input is correct
    }
  }
}

// Password Validation (Minimum 6 characters) for Login
function validatePassword() {
  const password = document.getElementById('password');
  const errorMessage = document.getElementById('password-error');
  
  if (password.value.length < 6) {
    password.classList.add('input-error');
    if (!errorMessage) {
      const errorMsg = document.createElement('span');
      errorMsg.id = 'password-error';
      errorMsg.style.color = 'red';
      errorMsg.textContent = 'Password must be at least 6 characters long.';
      password.parentElement.appendChild(errorMsg);
    }
  } else {
    password.classList.remove('input-error');
    if (errorMessage) {
      errorMessage.remove(); // Remove error message if the input is correct
    }
  }
}

// Email Validation (Real-time) for Sign-up
function validateSignupEmail() {
  const email = document.getElementById('signup-email');
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const errorMessage = document.getElementById('signup-email-error');
  
  if (!regex.test(email.value)) {
    email.classList.add('input-error');
    if (!errorMessage) {
      const errorMsg = document.createElement('span');
      errorMsg.id = 'signup-email-error';
      errorMsg.style.color = 'red';
      errorMsg.textContent = 'Please enter a valid email address.';
      email.parentElement.appendChild(errorMsg);
    }
  } else {
    email.classList.remove('input-error');
    if (errorMessage) {
      errorMessage.remove(); // Remove error message if the input is correct
    }
  }
}

// Password Validation (Minimum 6 characters) for Sign-up
function validateSignupPassword() {
  const password = document.getElementById('signup-password');
  const errorMessage = document.getElementById('signup-password-error');
  
  if (password.value.length < 6) {
    password.classList.add('input-error');
    if (!errorMessage) {
      const errorMsg = document.createElement('span');
      errorMsg.id = 'signup-password-error';
      errorMsg.style.color = 'red';
      errorMsg.textContent = 'Password must be at least 6 characters long.';
      password.parentElement.appendChild(errorMsg);
    }
  } else {
    password.classList.remove('input-error');
    if (errorMessage) {
      errorMessage.remove(); // Remove error message if the input is correct
    }
  }
}

// Form submission and validation handling
function submitForm(event, isSignup = false) {
  event.preventDefault(); 

  // For Login validation
  if (!isSignup) {
    validateEmail();
    validatePassword();
  }
  // For Sign-up validation
  else {
    validateSignupEmail();
    validateSignupPassword();
  }

  // Check if there are any validation errors (i.e., input error class added)
  const isValid = !document.querySelector('.input-error');
  if (isValid) {
    // For successful login/signup, store user info in localStorage
    if (!isSignup) {
      const email = document.getElementById('email').value;
      localStorage.setItem('userEmail', email); 
      alert('Login successful! Welcome back!');
    } else {
      const email = document.getElementById('signup-email').value;
      localStorage.setItem('userEmail', email);
      alert('Sign-up successful! Welcome!');
    }

    // Hide the form overlay after successful login/signup
    document.querySelector('.form-overlay').style.display = 'none';

    // Optionally, you can show a success message or redirect to the shopping page:
    // window.location.href = "shopping.html";  // Redirect to shopping page
  } else {
    // If validation fails, ask user to re-enter
    alert('Please correct the highlighted errors before submitting.');
  }
}

// Event listeners for form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  submitForm(event, false); // false indicates it's a login form
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
  submitForm(event, true); // true indicates it's a signup form
});

// JavaScript to toggle between login and sign-up forms
function toggleForms() {
  var loginForm = document.getElementById('login-form');
  var signupForm = document.getElementById('signup-form');
  
  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  }
}

// JavaScript to simulate store's business progress (Sales Target)
window.onload = function() {
  var progressBar = document.getElementById("business-progress-bar");
  var progressPercentage = document.getElementById("progress-percentage");
  
  // Example: Progress towards sales target (e.g., 75% target completed)
  var targetProgress = 75;  // Change this value based on actual data
  
  // Simulate loading the progress
  var width = 0;
  var interval = setInterval(function() {
    if (width >= targetProgress) {
      clearInterval(interval);  // Stop when progress reaches target
    } else {
      width++;
      progressBar.style.width = width + "%";  // Update progress bar width
      progressPercentage.textContent = width + "%";  // Display percentage
    }
  }, 20);  // Adjust the interval speed (milliseconds) as needed
}

// JavaScript to toggle collapsible content
document.addEventListener('DOMContentLoaded', function() {
  var collapsibles = document.querySelectorAll('.collapsible');

  collapsibles.forEach(function(button) {
    button.addEventListener('click', function() {
      var content = this.nextElementSibling;

      // Toggle between hiding and showing the collapsible content
      if (content.style.display === 'block') {
        content.style.display = 'none';
        this.textContent = 'Show FAQs';  // Change button text
      } else {
        content.style.display = 'block';
        this.textContent = 'Hide FAQs';  // Change button text
      }
    });
  });
});
