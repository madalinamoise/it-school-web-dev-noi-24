const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();

  return todos.slice(0, 20);
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

const initialize = async () => {
  const todos = await getTodos();
  const { completed, progress } = splitTodos(todos);

  //homework: refactor the following code
  const progressListEl = document.getElementById('progress-list');

  progress.forEach((todo) => {
    const p = document.createElement('p');
    p.innerText = todo.title;
    progressListEl.appendChild(p);
  });

  const completedListEl = document.getElementById('completed-list');

  completed.forEach((todo) => {
    const p = document.createElement('p');
    p.innerText = todo.title;
    completedListEl.appendChild(p);
  });

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
};

initialize();
