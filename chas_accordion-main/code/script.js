// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);
const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);
const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);


let fetchCode = fetch("https://jsonplaceholder.typicode.com/posts");
fetchCode.then((code) => code.json())
  .then((data) => {
    data.forEach((item) => {
    const titleDiv = document.createElement("div");
      titleDiv.className = "section";
      titleDiv.textContent = item.title;
    
    const bodyDiv = document.createElement("div");
      bodyDiv.className = "description";
      bodyDiv.textContent = item.body;
      
      document.body.appendChild(bodyDiv);
      document.body.appendChild(titleDiv);
      titleDiv.addEventListener("click", toggle);
    });
  });
  