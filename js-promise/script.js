const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = false;

    if (success) {
      resolve('It was successful!');
    } else {
      reject('Something is wrong');
    }
  }, 3000);
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

async function fetchData() {
  try {
    // const response = await fetch(
    //   'https://jsonplaceholder.typicode.com/todos/1'
    // );
    // const data = await response.json();

    const message = await myPromise;

    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
