/* -------------------------------------------------------------------------- */
/*                            Navigation Functions                            */
/* -------------------------------------------------------------------------- */
/* -------------------------- Home Page Mobile Menu ------------------------- */

// Show Menu
function showMobileNav() {
  let x = document.getElementById("mobileMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Replace Icon 
function removeHam() {
  let y = document.getElementById("mobileMenu");
  let z = document.getElementById("mobileIcon");

  if (y.style.display === "block") {
    z.classList = 'ion-md-close mobile-menu-icon';
  } else {
    z.classList = 'ion-ios-menu mobile-menu-icon';
  }
}

/* --------------------------- Pricing Mobile Menu -------------------------- */
// Show Menu
function showPricingNav() {
  let x = document.getElementById("pricingMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// Replace Icon
function removePriceHam() {
  let y = document.getElementById("pricingMenu");
  let z = document.getElementById("pricingIcon");

  if (y.style.display === "block") {
    z.classList = 'ion-md-close mobile-menu-icon';
  } else {
    z.classList = 'ion-ios-menu mobile-menu-icon';
  }
}

/* -------------------------- Overview Mobile Menu -------------------------- */
// Show Menu
function showOverviewNav() {
  let x = document.getElementById("overviewMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// Replace Icon 
function removeOverviewHam() {
  let y = document.getElementById("overviewMenu");
  let z = document.getElementById("overviewCloseIcon");

  if (y.style.display === "block") {
    z.classList = 'ion-md-close mobile-menu-icon';
  } else {
    z.classList = 'ion-ios-menu mobile-menu-icon';
  }
}

/* -------------------------------------------------------------------------- */
/*                                 ANIMATIONS                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Typed.JS -------------------------------- */

$(document).ready(function() {
  $("#typed").typed({
    strings: [
      "Testing out this thing.",
      "I feel like it's never going to work!"
    ],
    typeSpeed: 30,
    callback: function(){
      shift();
    }
  });
});


