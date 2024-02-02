const marks = document.querySelectorAll(".subj");
const button = document.querySelector(".btn");
const button1 = document.querySelector(".btn1");
const newElement = document.createElement("p");
let arr = [];
let sum = 0;

let check = () => {
  let count = 0;
  for (let j = 0; j < marks.length; j++) {
    if (marks[j].value === "") {
      count++;
    }
  }
  if (count === 0) {
    return true;
  } else {
    alert("Please enter all marks");
    return false;
  }
};
button.addEventListener("click", () => {
  if (check()) {
    for (let i = 0; i < marks.length; i++) {
      arr[i] = marks[i].value;
      sum += parseFloat(arr[i]);
    }
    var percentage = sum / 5;
    newElement.style.fontSize = "1.2rem";
    newElement.style.color = "red";
    newElement.innerText = `You Score ${percentage}% and your  Total marks is ${sum} out of 500`;
    button.after(newElement);
    sum=0;
  }
});

button1.addEventListener("click", () => {
  newElement.innerText = "";
  sum = 0;
  for (let i = 0; i < marks.length; i++) {
    marks[i].value = "";
  }
});
