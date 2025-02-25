fetch('https://random-data-api.com/api/v2/users?size=6').then((response) => {
  console.log(response);
  response.json().then((users) => {
    users.forEach((user) => {
      console.log(user.email);
    });
    console.log(users);
  });
});

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => response.json().then((post) => console.log(post)));
