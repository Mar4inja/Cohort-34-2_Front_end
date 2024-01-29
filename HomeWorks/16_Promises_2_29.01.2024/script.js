
const button = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

button.onclick = () => {
  const task = input.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.innerHTML = `
            <input type='checkbox'>
            <span>${task}</span>
            <button>Delete</button>
        `;
    list.appendChild(li);
  }
  input.value = "";
};

list.onclick = (event) => {
  if (event.target.type === "checkbox") {
    const taskSpan = event.target.nextElementSibling;
    if (event.target.checked) {
      taskSpan.style.textDecoration = "line-through";
    } else {
      taskSpan.style.textDecoration = "none";
          }
      } else if (event.target.tagName.toLowerCase() === 'button') {
          const listItem = event.target.parentElement;
          list.removeChild(listItem);
  }
};
