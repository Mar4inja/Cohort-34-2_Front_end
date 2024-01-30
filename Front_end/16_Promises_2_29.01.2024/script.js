// function getFiveAfterSevenSeconds() {
//     setTimeout(() => {
//         return 5;
//     }, 7000)
// }

// let res = getFiveAfterSevenSeconds();
// console.log(res);

// console.log('****************');

// console.log('PROMISE');

// const promise =  new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return reject('Error');
//     }, 7000)

// })

// promise
// .then(value => console.log(value))
// .catch(err => console.log(err))
// .finally(console.log('Thank you for using our service!'));

// const button = document.getElementById('addBtn');
// const input = document.getElementById('taskInput');
// const list = document.getElementById('taskList');

// addBtn.onclick = () => {
//     const taskName = taskInput.value.trim();

//     if (taskName !== "") {
//         const li = document.createElement("li");
//         const checkbox = document.createElement("input");
//         checkbox.type = "checkbox";

//         const span = document.createElement("span");
//         span.textContent = taskName;

//         const deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.addEventListener("click", deleteTask);

//         li.appendChild(checkbox);
//         li.appendChild(span);
//         li.appendChild(deleteBtn);

//         taskList.appendChild(li);

//         taskInput.value = "";
//     }
// };

// function deleteTask(event) {
//     const listItem = event.target.parentNode;
//     taskList.removeChild(listItem);
// }

//TODO LIST App
const tasks = [];

const button = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

list.onclick = (e) => {
  console.log(e);
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }

  if (e.target.type === "checkbox") {
    const spanElement = e.target.previousElementSibling;

    if (spanElement) {
      if (e.target.checked) {
        spanElement.style.textDecoration = "line-through";
      } else {
        spanElement.style.textDecoration = "none";
      }
    }
  }
};

button.onclick = () => {
  const task = input.value.trim();
  if (task) {
    tasks.push(task);
    const li = document.createElement("li");
    li.innerHTML = `
          <span>${tasks.length}. ${task}</span>
            <input type='checkbox'>
            <button>Delete</button>
        `;
    list.appendChild(li);
    tasks.push(task);
  }
  input.value = "";
};
