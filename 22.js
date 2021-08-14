const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  console.log(links.classList);
  console.log(links.classList.contains("random"));
  console.log(links.classList.contains("links"));
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
  links.classList.toggle("show-links");
});


const reviews = [
  {
    id: 1,
    name: "vũ hương giang",
    job: "front developer",
    img:
      "2.jpg",
    text:
      "Hi there, my name is Huong Giang.",
  },
  {
    id: 2,
    name: "nguyễn việt an",
    job: "developer",
    img:
      "2.jpg",
    text:
      " Hello, I'm Viet An.",
  },
  {
    id: 3,
    name: "lê ngân giang",
    job: "designer",
    img:
      "2.jpg",
    text:
      "Hello everyone, my name is Ngan Giang.",
  },
  {
    id: 4,
    name: "jackie",
    job: "developer",
    img:
      "2.jpg",
    text:
      "Hi, I'm Jackie. ",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
