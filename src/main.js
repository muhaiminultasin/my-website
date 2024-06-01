const hireButton = document.getElementById("hire-btn");
const fiverButton = document.getElementById("fiver-btn");
const linkButton = document.getElementById("linkedin-btn");
const landingName = document.getElementById("name");
const navbarSupportedContent = document.getElementById("navbarSupportedContent")

hireButton.addEventListener("click", function (event) {
    event.preventDefault();
    landingName.scrollIntoView({bihavior:"smooth"})
    if(navbarSupportedContent.classList.contains("show")){
        navbarSupportedContent.classList.remove("show");
    }
});

const portfolioLink = document.getElementById("portfolio-link");
const portfolio = document.getElementById("portfolio");

// portfolio section

portfolioLink.addEventListener("click", function (event) {
    event.preventDefault();
    portfolio.scrollIntoView({ bihavio: "smooth" });
    if(navbarSupportedContent.classList.contains("show")){
        navbarSupportedContent.classList.remove("show");
    }

});

// Contact button

const contactButton = document.getElementById("contact-btn").addEventListener("click", function () {
    contact.scrollIntoView({ bihavior: "smooth" });
    if(navbarSupportedContent.classList.contains("show")){
        navbarSupportedContent.classList.remove("show");
    }
});


// Expertise section

const expertiseLink = document.getElementById("expertise-link");
const expertise = document.getElementById("expertise");

expertiseLink.addEventListener("click", function (event) {
    event.preventDefault();
    expertise.scrollIntoView({ bihavior: "smooth" });
    if(navbarSupportedContent.classList.contains("show")){
        navbarSupportedContent.classList.remove("show");
    }
});

// Services section

const servicesLink = document.getElementById("Services-link");
const services = document.getElementById("services");

servicesLink.addEventListener("click", function (event) {
    event.preventDefault();
    services.scrollIntoView({ bihavior: "smooth" });
    if(navbarSupportedContent.classList.contains("show")){
        navbarSupportedContent.classList.remove("show");
    }
});



// Contact section

const contactLink = document.getElementById("contact-link");
const contact = document.getElementById("contact");

contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    contact.scrollIntoView({ bihavior: "smooth" });
    if(navbarSupportedContent.classList.contains("show")){
        navbarSupportedContent.classList.remove("show");
    }
});


// About section

const aboutLink = document.getElementById("about-link");
const about = document.getElementById("about");

aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    about.scrollIntoView({ bihavior: "smooth" });
    if(navbarSupportedContent.classList.contains("show")){
        navbarSupportedContent.classList.remove("show");
    }
});



//  portfolio data generate section

