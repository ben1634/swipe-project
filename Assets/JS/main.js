console.log("JavaScript loaded");
const sideToggle = document.querySelector(".navy");
const sidebar = document.querySelector(".sidebar");
const outer = document.querySelector(".nav-conty");
const searchBtn = document.querySelector(".search-btn");
const searchHead = document.querySelector(".s-head");
const answer = document.querySelector(".answer");
const faqs = document.querySelectorAll(".faq");
const faqIcon = document.querySelectorAll(".faqy");
const ques = document.querySelectorAll(".ques");
const content = document.querySelector(".content");
const dashboardBtn = document.querySelector(".label1");
const searchBar = document.getElementById("search-input");

console.log(searchBtn);
console.log(searchHead);



// Search Button
searchBtn.addEventListener("click", function () {
  searchHead.classList.toggle("active");
});

sideToggle.addEventListener("click", function () {
  sidebar.classList.toggle("collapsed");
});

outer.addEventListener("click", function () {
  sidebar.classList.add("collapsed");
});

// Page-load-remove

window.addEventListener("load", () => {
  sidebar.classList.add("collapsed");
});


// ctrl plus k search



document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === "k") {
        event.preventDefault();

        searchHead.classList.add("active");
        searchBar.focus();
    }


});


// Open

searchHead.classList.add("active");
document.body.style.overflow = "hidden";

// Close
searchHead.classList.remove("active");
document.body.style.overflow = "";


// Click outside the search box closes it
searchHead.addEventListener("click", (event) => {
    if (event.target === searchOverlay) {
        searchHead.classList.remove("active");
        searchBar.value = "";
    }
});

// Escape key closes it
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        searchHead.classList.remove("active");
        searchBar.value = "";
    }
});





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const hamBtn = document.querySelector(".ham");
const navbar = document.querySelector(".navbar");
const navlinks = document.querySelector(".navlinks");

hamBtn.addEventListener("click", function () {
  hamBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  navlinks.classList.toggle("active");
});

/*
questions.forEach(question => {
  question.addEventListener("click", () => {

    const answer =
      question.nextElementSibling.querySelector(".answer");

    answer.classList.toggle("show");
  });
});


faqIcon.addEventListener("click", function(e) {
faqIcon.classList.toggle('active')


})



document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === "k") {
        event.preventDefault();

        searchHead.classList.add("active");
        searchBar.focus();
    }
});




*/

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
    } else {
      faq.classList.add("active");
    }
  });
});

faqIcon.forEach((faqy) => {
  faqy.addEventListener("click", () => {
    faqy.classList.toggle("active");
  });
});

// ctrl k

console.log(searchBtn);
console.log(searchHead);
console.log(searchHead.classList);
