const usersBtn = document.getElementById("loadUsersBtn");
const userList = document.getElementById("userList");
const postBtn = document.getElementById("postBtn");
const postList = document.getElementById("postList");
const details = document.getElementById("userDetails");

usersBtn.onclick = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      userList.innerHTML = "";
      users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        li.style.cursor = "pointer";
        li.onclick = () => {
          displayUserDetails(user);
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

function displayUserDetails({
  name,                           // Destructirization
  email,
  phone,
  website,
  company: { name: companyName },
  address: { city, street, suite },
}) {
  details.innerHTML = `
  <h2>${name}</h2>
  <p><strong>Email: </strong>${email}</p>
  <p><strong>Phone: </strong>${phone.split(" ")[0]}</p>   // work without keys
  <p><strong>Website: </strong>${website}</p>
  <p><strong>Company: </strong>${companyName}</p>
  <p><strong>Address: </strong>${city}, ${street}, ${suite}</p>
 
  `;
}

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
