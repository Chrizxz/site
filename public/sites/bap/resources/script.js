console.log("hi");







//Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction(),
    bottom();
};

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// -------------------

/*
const contentBttn = document.getElementById("scrollDown");

function bottom() {
  if (document.body.scrollTop < 120 || document.documentElement.scrollTop < 120) {
    contentBttn.getElementById("scrollDown").style.display = "block";
  } else {
    contentBttn.getElementById("scrollDown").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the bottom of the document
function bottomScroll() {
  document.getElementById('harvestTown').scrollIntoView({behavior: 'smooth'});
}
*/