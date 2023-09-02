//Create a button that adds 1 to a botScore stored in localStorage
if (!localStorage.getItem("botScore")) {
  localStorage.setItem("botScore", 0);
}

document.querySelector("button").addEventListener("click", addToScore);

function addToScore() {
  let ourScore = Number(localStorage.getItem("botScore"));
  console.log(ourScore);
  ourScore += 1;
  localStorage.setItem("botScore", ourScore);
}
