console.log("hi");


const metaURL = document.getElementById('metaURL');
const actualURL = window.location.href;
console.log(actualURL);
const replaceURL = metaURL.getAttribute('content').replace('{url}', actualURL);
metaURL.setAttribute('content', replaceURL);


/*

window.oncontextmenu = () => {
  return false;
};

document.onkeydown = e => {
  if (window.event.keyCode === 123 || e.button === 2) return false;
};

*/




//Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
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

fetch("./config.json")
  .then(response => response.json())
  .then(data => {
    const footer = document.getElementById("copyrightYear");
    footer.textContent = `${data.year}`;
  })
  .catch(error => console.error(error));
