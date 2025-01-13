// Display loading screen on page load
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
  }, 2000); // Loading screen will stay visible for 2 seconds
});

// Show loading screen when navigating to another page
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default navigation temporarily
    document.getElementById("loading-screen").style.display = "flex";
    setTimeout(() => {
      window.location.href = this.href; // Redirect after delay
    }, 1000); // Adjust delay as needed
  });
});

//ProductName and Image linked to whatsapp
function buyNow(productName) {
  var phoneNumber = "+2348122086954";
  var message = encodeURIComponent("Hello, I am interested in " + productName);
  var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + message;
  window.open(whatsappUrl, "_blank");
}

//Header
const header = document.getElementById("mainHeader");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    header.classList.add("hidden");
  } else {
    // Scrolling up
    header.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});

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

document.getElementById("view-more").addEventListener("click", function () {
  const hiddenReviews = document.querySelector(".hidden-content");
  if (hiddenReviews.style.display === "none") {
    hiddenReviews.style.display = "block";
    this.textContent = "View Less ";
  } else {
    hiddenReviews.style.display = "none";
    this.textContent = "View More ";
  }
});
