var count = 0;

function printMessage() {
  count++;

  var countLikes = document.querySelector(".countLikes");
  console.log(countLikes.innerText);
  countLikes.innerText = count + " Like(s)";
}
