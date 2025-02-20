fetch('https://random-data-api.com/api/v2/users?size=6').then((response) => {
  console.log(response);
  response.json().then((users) => {
    users.forEach((user) => {
      console.log(user.email);
    });
    console.log(users);
  });
});
