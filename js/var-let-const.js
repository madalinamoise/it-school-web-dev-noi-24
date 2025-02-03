function varExample() {
  var number = 20;
  if (true) {
    console.log(number); //visible -> 20
    var number = 30;
  }
  console.log(number); //visible -> 30
}

varExample();

function letExample() {
  let x = 10;
  if (true) {
    // console.log(x); //visible ->10
    let x = 20;
  }
  console.log(x); //visible -> 10
}
letExample();
