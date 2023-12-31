const newEl = document.createElement("p");
newEl.textContent = "Only for test";
document.querySelector("body").appendChild(newEl);

const buttonEl = document.querySelector("button");
buttonEl.textContent = "Its changed";
buttonEl.setAttribute(
  "style",
  "color:yellow; background: purple; border:0; padding: 1rem 2rem; border-radius: 0.25rem;"
);

const ulEl = document.querySelector("ul");
ulEl.innerHTML += `<li class="list">There are ${ulEl.children.length} list</li>`;

const listEl = document.querySelectorAll("li");
for (let list of listEl) {
  list.classList.add("list");
}

const listClass = document.getElementsByClassName("list");
// const listClass = document.getElementsByTagName('li');
// console.log(listClass);

// The QuerySelectorAll can select combination of classes, but it return static collection of node
// getElementsByClassName can select one class name but it return HTMLcollection which is a live collection of elements

// Simple Toggle exercise

buttonEl.addEventListener("click", () => {
  newEl.classList.toggle("styled");
  newEl.textContent = "This is changed now";
});

// setAttributes, getAttributes, removeAttributes

const sectionEl = document.querySelector("section");
sectionEl.setAttribute("class", "container");
// console.log(sectionEl.getAttribute("class"));
sectionEl.removeAttribute("id");

/* children vs childNodes */
// console.log(ulEl.children); // All tags
// console.log(ulEl.childNodes); // All tags including white space
// console.log(ulEl.firstChild); // select white space
// console.log(ulEl.firstElementChild); // select first child element

/* parentNode vs parentElement */
// console.log(ulEl.firstElementChild.parentElement);
// console.log(ulEl.firstElementChild.parentNode);

/* Siblings */
const firstList = ulEl.firstElementChild;
// console.log(firstList.nextSibling) // select white space
// console.log(firstList.nextElementSibling) // select element

// console.log(firstList.previousSibling) // white space
// console.log(firstList.previousElementSibling) // null

const listLink = firstList.nextElementSibling.firstElementChild;
console.log(listLink.textContent)
