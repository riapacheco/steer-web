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

// jQuery needs to finish loading so we can safely
// start doing things
$(document).ready(function() {
  typingMilestone();
  secondMilestone();
  thirdMilestone();
});

function typingMilestone() {
  // make sure we can load it by checking the element is present
  const el = document.getElementById('milestone-text');
  if (!el) return console.log('Expected element not found');

  // make sure Typed exists
  if (!Typed) return console.error('Unable to find Typed.js');

  // see the typed options for this
  const options = {
    strings: [
      "^9000 How we store files makes sense (it isn't a mess for once) &nbsp;"
    ],
    typeSpeed: 70,
  };

  // it's not "really" necessary to declare like this,
  const typingTarget = new Typed('#milestone-text', options);
}

function secondMilestone() {
  // make sure we can load it by checking the element is present
  const el = document.getElementById('second-milestone');
  if (!el) return console.log('Expected element not found');

  // make sure Typed exists
  if (!Typed) return console.error('Unable to find Typed.js');

  // see the typed options for this
  const options = {
    strings: [
      "^4000 When finished, each team member 'knows' the material &nbsp;",
    ],
    typeSpeed: 70,
  };

  // it's not "really" necessary to declare like this,
  const typingTarget = new Typed('#second-milestone', options);
}

function thirdMilestone() {
  // make sure we can load it by checking the element is present
  const el = document.getElementById('third-milestone');
  if (!el) return console.log('Expected element not found');

  // make sure Typed exists
  if (!Typed) return console.error('Unable to find Typed.js');

  // see the typed options for this
  const options = {
    strings: [
      "Orientation considered easy by 6+ customers &nbsp;"
    ],
    typeSpeed: 70,
  };

  // it's not "really" necessary to declare like this,
  const typingTarget = new Typed('#third-milestone', options);
}



/* ---------------------------- Passed Milestones --------------------------- */

function passMilestone1() {
  let mile1 = document.getElementById('milestone1');
  if (mile1.className == 'milestone-rectangle passed-milestone') {
    mile1.className = 'milestone-rectangle';
  } else {
    mile1.className = 'milestone-rectangle passed-milestone';
  }
}

function passMilestone2() {
  let mile2 = document.getElementById('milestone2');
  if (mile2.className == 'milestone-rectangle passed-milestone') {
    mile2.className = 'milestone-rectangle';
  } else {
    mile2.className = 'milestone-rectangle passed-milestone';
  }
}

function passMilestone3() {
  let mile3 = document.getElementById('milestone3');
  if (mile3.className == 'milestone-rectangle passed-milestone') {
    mile3.className = 'milestone-rectangle';
  } else {
    mile3.className = 'milestone-rectangle passed-milestone';
  }
}

/* -------------------------- Fake Metrics Ribbone -------------------------- */

var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}

const input = document.querySelector('.quantity input');
setProgress(input.value);

input.addEventListener('change', function(e) {
  if (input.value < 101 && input.value > -1) {
    setProgress(input.value);
  }  
})

/* ------------------------- Fake ribbon with labels ------------------------ */

function showTimeLeft() {
  let timeVal = document.getElementById('showTimeLeft');
  if (timeVal.style.display === "block") {
    timeVal.style.display = "none";
  } else {
    timeVal.style.display = "block";
  }
}

function hideTimePlaceholder() {
  let timeValShown = document.getElementById('showTimeLeft');
  let timeValPlac = document.getElementById('hideTimeClick');

  if (timeValShown.style.display === "block") {
    timeValPlac.style.display = "none";
  } else {
    timeValPlac.style.display = "block";
  }
}

function showBudgetSpent() {
  let budgetVal = document.getElementById('showBudgetSpent');

  if(budgetVal.style.display === "block") {
    budgetVal.style.display = "none";
  } else {
    budgetVal.style.display = "block";
  }
}

function hideBudgetPlaceholder() {

  let budgetValShown = document.getElementById('showBudgetSpent');
  let hideBudgetPlac = document.getElementById('hideBudgetClick');

  if (budgetValShown.style.display === "block") {
    hideBudgetPlac.style.display = "none";
  } else {
    hideBudgetPlac.style.display = "block";
  }
}

function showGoalMetric() {
  let goalVal = document.getElementById('showGoalMetric');

  if (goalVal.style.display === "block") {
    goalVal.style.display = "none";
  } else {
    goalVal.style.display = "block";
  }
}

function hideGoalPlaceholder() {

  let goalValShown = document.getElementById('showGoalMetric');
  let hideGoalPlac = document.getElementById('goalPlaceholder');

  if (goalValShown.style.display === "block") {
    hideGoalPlac.style.display = "none";
  } else {
    hideGoalPlac.style.display = "block";
  }

}