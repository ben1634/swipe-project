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
const sidebarContent = document.getElementById("sidebar-content");
const sidelinks = document.querySelectorAll("[data-panel]");
const sidebar2 = document.querySelector(".sidebar2");

console.log(searchBtn);
console.log(searchHead);

// Search Button

searchBtn.addEventListener("click", function () {
  searchHead.classList.toggle("active");
});

sideToggle.addEventListener("click", function () {
  sidebar.classList.toggle("open");
});

outer.addEventListener("click", function () {
  sidebar.classList.remove("open");
});

// Page-load-remove

window.addEventListener("load", () => {
  sidebar.classList.remove("open");
});

// Search Button

// Two functions
function openSearch() {
  searchHead.classList.add("active");

  searchBar.focus();
}

function closeSearch() {
  searchHead.classList.remove("active");
}

searchBtn.addEventListener("click", openSearch);

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key.toLowerCase() == "k") {
    event.preventDefault();

    openSearch();
  }
});

// outside to close searchbar

searchHead.addEventListener("click", (e) => {
  if (e.target === searchHead) {
    closeSearch();
  }
});

// Escape to close searchbar

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSearch();
  }
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

// sidebar2

sideToggle.addEventListener("click", (event) => {
  sidebar2.classList.toggle("open");
});

// FAQ

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

// Second side panel display

sidelinks.forEach((sidelink) => {
  sidelink.addEventListener("click", () => {
    const panel = sidelink.dataset.panel;

    switch (panel) {
      case "dashboard":
        sidebarContent.innerHTML = `
                    <h2 class="topic">Dashboard</h2>
                    <p>Recent activity...</p>
                `;
        break;

      case "analytics":
        sidebarContent.innerHTML = `
                    <h2 class="topic">Search</h2>
                    <input type="search" placeholder="">
                `;
        break;

      case "projects":
        sidebarContent.innerHTML = `
                    <h2 class="topic">Projects</h2>
                    <ul>
                        <li class="topic">Project A</li>
                        <li class="topic">Project B</li>
                    </ul>
                `;
        break;

      case "settings":
        sidebarContent.innerHTML = `
                    <h2 class="topic">Settings</h2>
                    <button>Theme</button>
                `;
        break;
      case "technology":
        sidebarContent.innerHTML = `
                    <h2 class="topic">Technology</h2>
                    <p>Explore the latest technology trends...</p>
                `;
        break;
    }
  });
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

// ctrl k

console.log(searchBtn);
console.log(searchHead);
console.log(searchHead.classList);
