//WELCOME MESSAGE
function showWelcomeMessage() {
  const hours = new Date().getHours();
  let message;

  if (hours < 12) {
    message = "HELLO, GOOD MORNING! ";
  } else if (hours < 18) {
    message = "HELLO, GOOD AFTERNOON! ";
  } else {
    message = "HELLO, GOOD EVENING!  ";
  }

  document.getElementById("welcomeMessage").textContent = message;
}

// Call the function on page load
window.onload = showWelcomeMessage;



//SIDE BAR
document.getElementById("sidebarToggle").addEventListener("click", function () {
  document.getElementById("sidebar").style.right = "0"; // Show sidebar
  document.body.classList.add("no-scroll");
});

document.getElementById("closeSidebar").addEventListener("click", function () {
  document.getElementById("sidebar").style.right = "-100%"; // Hide sidebar
  document.body.classList.remove("no-scroll");
});



//CURRENT PAGE INDICATOR
document.addEventListener("DOMContentLoaded", function () {
  // Get the current URL path
  const currentPath = window.location.pathname.split("/").pop();

  // Get all links in the navigation menu
  const links = document.querySelectorAll(".nav-menu a");

  // Loop through the links and highlight the active one
  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});


//HIDDEN REVIEWS

document.getElementById('view-more').addEventListener('click', function() {
  const hiddenReviews = document.querySelector('.hidden-content');
  if (hiddenReviews.style.display === 'none') {
    hiddenReviews.style.display = 'block'; 
    this.textContent = 'View Less '; 
  } else {
    hiddenReviews.style.display = 'none'; 
    this.textContent = 'View More '; 
  }
  
});



