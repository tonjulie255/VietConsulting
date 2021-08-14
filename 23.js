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
import fetchFollowers from '27.js'
import displayFollowers from '28.js'
import paginate from '29.js'
import displayButtons from '30.js'
const title = document.querySelector('.section-title h1')
const btnContainer = document.querySelector('.btn-container')

let index = 0
let pages = []

const setupUI = () => {
  displayFollowers(pages[index])
  displayButtons(btnContainer, pages, index)
}

const init = async () => {
  const followers = await fetchFollowers()
  title.textContent = 'pagination'
  pages = paginate(followers)
  setupUI()
}

btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-container')) return
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index)
  }
  if (e.target.classList.contains('next-btn')) {
    index++
    if (index > pages.length - 1) {
      index = 0
    }
  }
  if (e.target.classList.contains('prev-btn')) {
    index--
    if (index < 0) {
      index = pages.length - 1
    }
  }
  setupUI()
})

window.addEventListener('load', init)
