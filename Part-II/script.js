var count = 9;

function printMessage() {
  count++;

  var countLikes = document.querySelector(".countLikes");
  console.log(countLikes.innerText);
  countLikes.innerText = count + " Like(s)";
}

var count = 12;

function printMessage2() {
  count++;

  var countLikes2 = document.querySelector(".countLikes2");
  console.log(countLikes2.innerText);
  countLikes2.innerText = count + " Like(s)";
}

var count = 9;

function printMessage3() {
  count++;

  var countLikes3 = document.querySelector(".countLikes3");
  console.log(countLikes3.innerText);
  countLikes3.innerText = count + " Like(s)";
}
