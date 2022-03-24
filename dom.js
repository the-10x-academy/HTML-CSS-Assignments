/** @format */

let mywords = document.getElementById("text");
let showchar = document.getElementById("sp");
mybtn = document.getElementById("btn");
myfetch = document.getElementById("fetch");
let mythread = document.getElementById("th");
let size = 275;
function words() {
  let mytext = mywords.value;
  mythread.innerHTML = Math.ceil(mytext.length / size);
  let count = 0;
  for (let i = 0; i < mytext.length; i++) {
    if (mytext[i] != "") {
      count += 1;
      showchar.innerHTML = count;
    }
  }
}

mybtn.addEventListener("click", function () {
  mydiv = mywords.value;
  console.log(mydiv);
  myfetch.innerHTML = mydiv;
});
