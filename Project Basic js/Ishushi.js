document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// Helllo i am as developer learn about javascript basic project .
//____________________________________________________________________________________________________________________________________________________

// let's start dark mode/light mode

// let isDark = false;
// let changer = document.querySelector("#Mode");
// let icon = document.querySelector("#img1");
// let tex = document.querySelector("#modeText");

// changer.addEventListener("click", () => {
//   isDark = !isDark;
//   document.body.style.backgroundColor = isDark ? "#262222" : "white";
//   document.body.style.color = isDark ? "white" : "black";
//   tex.textContent = isDark ? "Light Mode" : "Dark Mode";
//   icon.src = isDark ? "img/dark.png" : "img/light.png";
// });
let isDark = false;
let changer = document.querySelector("#Mode");
let icon = document.querySelector("#img1");
let tex = document.querySelector("#modeText");

changer.addEventListener("click", () => {
  isDark = !isDark;

  document.body.style.backgroundColor = isDark ? "#262222" : "white";
  document.body.style.color = isDark ? "white" : "black";

  icon.src = isDark ? "img/darkmode.jpg" : "img/lightmode.jpg";
  tex.textContent = isDark ? "Light Mode" : "Dark Mode";
});

//NOTE :' ! ' is the value define true or false when true to false when false to true;

//____________________________________________________________________________________________________________________________________________________
//let's start background changer with normal index

let index = 0;
let bg_color = ["lightgray", "lime", "skyblue", "pink", "brown"];

let bg_changer = document.querySelector("#bg_changer");
let b = document.querySelector("#cg");

bg_changer.addEventListener("click", () => {
  b.innerHTML = bg_color[index];

  b.style.backgroundColor = bg_color[index++];
  b.style.color = "black";

  if (index >= bg_color.length) {
    index = 0;
  }
});
//____________________________________________________________________________________________________________________________________________________

//let's start random bg_changer with random index  // and second method is ternay operator

let rang = ["red", "green", "blue", "yellow", "orange"];
let last = null;
// let last = -1;
let random;

let dif = document.querySelector("#bg_changer2");
let c = document.querySelector("#c");

dif.addEventListener("click", () => {
  do {
    random = Math.floor(Math.random() * rang.length);
    //use ternary operator
    // random = random === last ? (random +1) % rang.length : random;
  } while (rang[random] == last);
  c.style.backgroundColor = rang[random];
  c.style.color = "black";
  c.textContent = rang[random];
  last = rang[random];
});

//____________________________________________________________________________________________________________________________________________________
//let's start hex color bg changer

let hex_color = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "D",
  "F",
];

let chango = document.querySelector("#hex_color");
let d = document.querySelector("#d");
chango.addEventListener("click", () => {
  let hex_code = "";
  for (let i = 0; i < 6; i++) {
    let random_val = Math.floor(Math.random() * hex_color.length);

    hex_code += hex_color[random_val];
  }
  d.style.backgroundColor = "#" + hex_code;
  d.style.color = "black";
  d.textContent = "#" + hex_code;
});
//____________________________________________________________________________________________________________________________________________________
// let's start the Gane rock paper scissors

let userscore = 0;
let computerscore = 0;
let choices = document.querySelectorAll(".choice");

let computer = () => {
  let options = ["Rock", "Paper", "Scissors"];
  let random_idx = Math.floor(Math.random() * 3);
  return options[random_idx];
};
let uscore = document.querySelector(".uscore");
let cscore = document.querySelector(".cscore");
let result = document.querySelector(".result");
result.style.backgroundColor = "white";

let Drawgame = () => {
  result.innerText = "Game is draw ! Please play again";
  result.style.backgroundColor = "yellow";
};

let playgame = (user_choice) => {
  // user choice

  //computer choice
  let computer_choice = computer();

  let showwinner = (userwin) => {
    if (userwin === true) {
      userscore++;
      uscore.innerText = userscore;
      result.innerText = `Game is win ! Your ${user_choice} beats ${computer_choice}`;
      result.style.backgroundColor = "#0fba29";
    } else {
      computerscore++;
      cscore.innerText = computerscore;
      result.innerText = `Game is loss ! ${computer_choice} beats your ${user_choice}`;
      result.style.backgroundColor = "red";
    }
  };

  if (user_choice === computer_choice) {
    Drawgame();
  } else {
    let userwin = true;
    if (user_choice === "Rock") {
      // paper or scissors
      userwin = computer_choice === "Paper" ? false : true;
    } else if (user_choice === "Paper") {
      //rock or scissors
      userwin = computer_choice === "Scissors" ? false : true;
    } else {
      // rock or paper
      userwin = computer_choice === "Rock" ? false : true;
    }
    showwinner(userwin);
  }
};

choices.forEach((choice) => {
  let user_choice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    playgame(user_choice);
  });
});

//____________________________________________________________________________________________________________________________________________________

//let's start with Text Genrate

const text = document.querySelector("#genrate");
const typedText = document.querySelector("#typedText");

text.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && text.value.trim() !== "") {
    event.preventDefault();

    const li = document.createElement("li");
    li.textContent = text.value;

    // Create delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "100px";
    delBtn.style.color = "red";

    // Add event listener to delete this li when clicked
    delBtn.addEventListener("click", () => {
      typedText.removeChild(li);
    });

    li.appendChild(delBtn);
    typedText.appendChild(li);

    text.value = "";
  }
});
//If your input is inside a form, pressing Enter might submit the form and reload the page.

// Even if there's no form, browsers can sometimes do unexpected things with the Enter key — especially if you're using buttons, form controls, etc.

// more code is use sprike wevsite must useful
