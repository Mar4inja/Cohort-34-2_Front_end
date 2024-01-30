const usersBtn = document.getElementById("loadUsersBtn");
const userList = document.getElementById("userList");
const postBtn = document.getElementById("postBtn");
const postList = document.getElementById("postList");
const userDetailsDiv = document.getElementById("userDetails");

usersBtn.onclick = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;

        li.onclick = () => {
          showUserDetails(user);
        };

        userList.appendChild(li);
      });
    })
    .catch((error) => {
      const li = document.createElement("li");
      li.textContent = error.message;
      userList.appendChild(li);
    });
};
postBtn.onclick = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      postList.innerHTML = "";
      posts.forEach((post) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
        postList.appendChild(li);
      });
    })
    .catch((error) => {
      const li = document.createElement("li");
      li.textContent = error.message;
      postList.appendChild(li);
    });
};

function showUserDetails(user) {
  userDetailsDiv.innerHTML = `
      <h2>Детальная информация о пользователе:</h2>
      <p>Email: ${user.email}</p>
      <p>Phone: ${user.phone.replace(/\D/g, "")}</p>
      <p>Website: ${user.website}</p>
      <p>Company: ${user.company.name}</p>
      <p>Address: ${user.address.street}, ${user.address.suite}</p>
    `;
}
// HOMEWORK
/*
    При нажатии на конкретного пользователя из списка должна отображаться
    детальная информация о пользователе:
    1. Email;
    2. Phone (только сам номер, без кода города);
    3. Website;
    4. Company;
    5. Address (улица и дом).
*/
