// fetch('https://random-data-api.com/api/v2/users?size=6').then((response) => {
//   console.log(response);
//   response.json().then((users) => {
//     users.forEach((user) => {
//       console.log(user.email);
//     });
//     console.log(users);
//   });
// });

const container = document.querySelector('.container');

function addUserEmail(email) {
  const newP = document.createElement('p');
  newP.innerText = email;
  container.appendChild(newP);
}

async function getUsers() {
  const response = await fetch(
    'https://random-data-api.com/api/v2/users?size=6'
  );

  const users = await response.json();

  users.forEach((user) => addUserEmail(user.email));
}

getUsers();
