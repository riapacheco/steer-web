
/* -------------------------------------------------------------------------- */
/*                            Navigation Functions                            */
/* -------------------------------------------------------------------------- */

/* ------------------------- Mobile Menu Click Events ----------------------- */

// show menu
function showMobileNav() {
  let x = document.getElementById("mobileMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// replace hamburger icon with close icon only when menu is showing
function removeHam() {
  let y = document.getElementById("mobileMenu");
  let z = document.getElementById("mobileIcon");

  if (y.style.display === "block") {
    z.classList = 'ion-md-close mobile-menu-icon';
  } else {
    z.classList = 'ion-ios-menu mobile-menu-icon';
  }
}
