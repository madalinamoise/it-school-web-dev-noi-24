const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();

  return todos.slice(0, 40);
};

const getUser = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();

  return user;
};

const getUsersQueryParamString = (uniqueUserIds) => {
  // [1,2] => 'userId=1&userId=2'

  //solution 1
  // let queryParamsString = '';
  // uniqueUserIds.forEach((id, index) => {
  //   if (index > 0) {
  //     queryParamsString = queryParamsString + '&';
  //   }

  //   queryParamsString = queryParamsString + 'userId=' + id;
  // });

  //solution 2
  return uniqueUserIds.reduce((acc, curr, currIndex) => {
    if (currIndex > 0) {
      acc = acc + '&';
    }
    acc = acc + 'id=' + curr;
    return acc;
  }, '');
};

const getUniqueUsers = async (users) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?${getUsersQueryParamString(
      users
    )}`
  );
  return await response.json();
};

const getUsers = async (todos) => {
  const uniqueUsers = todos.reduce((acc, curr) => {
    if (!acc.find((el) => el === curr.userId)) {
      acc.push(curr.userId);
    }

    return acc;
  }, []);

  // uniqueUsers.forEach(async (id) => await getUser(id));

  await getUniqueUsers(uniqueUsers);
};

const splitTodos = (todos) => {
  let completedTodos = [];
  let inProgressTodos = [];

  todos.forEach((todo) =>
    todo.completed ? completedTodos.push(todo) : inProgressTodos.push(todo)
  );

  return {
    completed: completedTodos,
    progress: inProgressTodos,
  };
};

const generateTodosContent = (elementId, todos) => {
  const listEl = document.getElementById(elementId);

  todos.forEach((todo) => {
    const p = document.createElement('p');
    p.innerText = todo.title;
    listEl.appendChild(p);
  });
};

const displayTodos = (todos) => {
  const { completed, progress } = splitTodos(todos);
  generateTodosContent('progress-list', progress);
  generateTodosContent('completed-list', completed);
};

const main = async () => {
  const todos = await getTodos();
  const users = await getUsers(todos);
  displayTodos(todos);

  // uniquesIDs = [1,2]
};

main();

// const filteredTodos = todos.reduce(
//   (prev, curr) => {
//     const x = curr.completed
//       ? prev.completed.push(curr)
//       : prev.progress.push(curr);
//     console.log(x);
//     return x;
//   },
//   {
//     completed: [],
//     progress: [],
//   }
