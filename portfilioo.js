
var text = "Hi, i'm gasser adel";
var span = document.getElementById("span");

const writing = document.getElementById("writing");
const elements = document.querySelectorAll("#part1, .myBrojects, #part2");

const imageOverlay = document.getElementById("imageOverlay");
const bigImage = document.getElementById("bigImage");
const closeBtn = document.getElementById("closeBtn");

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

const servicesBox = document.querySelector("#computer").parentElement;
const servicesTitle = document.getElementById("services");
const serviceComputer = document.getElementById("computer");
const serviceCards = document.querySelectorAll(".section-services .shadow");

const contactSection = document.querySelector(".contact-section");

const text1 = `I create responsive websites that combine a unique user experience with comfort,  
simplicity, and professional quality. My goal is to build websites that are visually appealing, 
easy to use, and carefully designed to meet the needs of different users.`;

let index = 0;
let index1 = 0;


/* =========================================
   HOME TYPING    Hi, i'm gasser adel
========================================= */

// Starts the typing animation for the main introduction.
document.querySelector(".section").addEventListener("animationend", function () {

    const typing = setInterval(() => {

        span.textContent += text[index];
        index++;

        if (index >= text.length) {

            clearInterval(typing);
            span.classList.add("finished");

        }

    }, 100);

}, { once: true });


/* =========================================
   ABOUT ME TYPING
========================================= */

// Types the About Me text character by character.
function typing() {

    if (index1 < text1.length) {

        writing.textContent += text1[index1];
        index1++;

        setTimeout(typing, 50);

    } else {

        setTimeout(deleting, 2000);

    }
}


// Deletes the About Me text character by character.
function deleting() {

    if (writing.textContent.length > 0) {

        writing.textContent = writing.textContent.slice(0, -1);

        setTimeout(deleting, 30);

    } else {

        index1 = 0;

        setTimeout(typing, 500);

    }
}

typing();


/* =========================================
   SCROLL ANIMATION
========================================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        } else {

            entry.target.classList.remove("show");

        }

    });

}, {
    threshold: 0.2
});

elements.forEach((element) => {

    observer.observe(element);

});


/* =========================================
   IMAGE OVERLAY
========================================= */

// Opens the selected image in the image overlay.
function openImage(image) {

    bigImage.src = image.src;
    imageOverlay.classList.add("show");

}


// Closes the image overlay.
function closeImage() {

    imageOverlay.classList.remove("show");

}

closeBtn.addEventListener("click", closeImage);


/* =========================================
   MOBILE NAVBAR
========================================= */

// Opens and closes the mobile navigation menu.
menuBtn.addEventListener("click", function () {

    menuBtn.classList.toggle("active");
    nav.classList.toggle("active");

});


/* =========================================
   NAVBAR LINKS
========================================= */

// Closes the mobile menu when a navigation link is clicked.
navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menuBtn.classList.remove("active");
        nav.classList.remove("active");

    });

});


/* =========================================
   SERVICES SCROLL ANIMATION
========================================= */

let servicesAnimated = false;


// Shows the Services animation.
function showServices() {

    if (servicesAnimated) return;

    servicesAnimated = true;

    servicesTitle.classList.add("services-show");

    serviceComputer.classList.add("services-show");

    serviceCards.forEach((card) => {
        card.classList.add("services-show");
    });

}

// Resets the Services animation.
function resetServices() {

    servicesAnimated = false;

    servicesTitle.classList.remove("services-show");

    serviceComputer.classList.remove("services-show");

    serviceCards.forEach((card) => {
        card.classList.remove("services-show");
    });

}

// Detects when the Services section enters the screen.
const servicesObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                showServices();

            } else if (entry.boundingClientRect.top > 0) {

                resetServices();

            }

        });

    },
    {
        threshold: 0.15
    }
);


servicesObserver.observe(servicesBox);
/*MY LINKS TO CONTACT ME*/

function openWhatsApp() {
  window.open("https://wa.me/201013464781", "_blank");
}

function openFaceBook() {
  window.open("https://www.facebook.com/share/14mzRptm3sc/?mibextid=wwXIfr", "_blank");
}

function opengithub() {
  window.open("https://github.com/Gasseradel", "_blank");
}

function openInstgram() {
  window.open("https://www.instagram.com/gaser___22?igsi=MWdpaWFwYmdwanNtaw==", "_blank");
}


/* =========================================
   CONTACT SCROLL ANIMATION
========================================= */



const contactObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                contactSection.classList.add("contact-show");

            } else {

                contactSection.classList.remove("contact-show");

            }

        });

    },
    {
        threshold: 0.2
    }
);

contactObserver.observe(contactSection);


/* SEND CONTACT FORM TO WHATSAPP */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const message = document.getElementById("message").value.trim();

    const whatsappMessage =
        "New message from your portfolio\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Number: " + number + "\n\n" +
        "Message:\n" + message;

    const whatsappURL =
        "https://wa.me/201013464781?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
    contactForm.reset();

});
