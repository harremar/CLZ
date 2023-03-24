function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");

  if (pageID == "") {
    model.placeholder("home");
    console.log("Grabbing:" + pageID);
  } else {
    model.placeholder(pageID);
    console.log("Grabbing:" + pageID);
  }
}

function initListeners() {
  $(window).on("hashchange", route);
  $("a").click(function (e) {
    console.log("clicked");
    // route();
  });
  route();
}

$(document).ready(function () {
  initListeners();
});




// I created a button.js file
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const link = document.querySelector(".links a");

//when hamburger is clicked activate mobileMenu function
hamburger.addEventListener("click", mobileMenu);
navMenu.addEventListener("click", mobileMenu);

//this function makes menu active
function mobileMenu() {
  // turns hamburger into X
  hamburger.classList.toggle("active");
  // opens up navigation links
  navMenu.classList.toggle("active");
}
