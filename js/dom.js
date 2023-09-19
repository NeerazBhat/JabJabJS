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
ulEl.innerHTML += `<li>There are ${ulEl.children.length} list</li>`;
