const snaps = document.querySelector("#snaps");
const øl = document.querySelector("#øl");
const frem = document.querySelector("#sodavand1");
const abrikos = document.querySelector("#sodavand2");

snaps.addEventListener("click", tjekAlkohol);
øl.addEventListener("click", tjekAlkohol);
frem.addEventListener("click", tjekAlkohol);
abrikos.addEventListener("click", tjekAlkohol);

function tjekAlkohol() {
  console.log(this.id);
  if (this.id == "øl" || this.id == "snaps") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}
