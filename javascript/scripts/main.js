// const myImage = document.querySelector("img");
// myImage.onclick = () => {
//   mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/cycle.jpg") {
//     myImage.setAttribute("src", "images/smile.jpg");
//   } else {
//     myImage.setAttribute("src", "images/cycle.jpg");
//   }
// };

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// myButton.onclick = () => {
//     setUserName();
// };

// function setUserName() {
//     const myName = prompt("Please enter your name:");
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `You are cool, ${myName}`;
// }

// if (!localStorage.getItem("name")) {
//     setUserName();
// } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `Welcome back, ${storedName}`;
// }

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");
// myButton.onclick = function () {
//   setUserName();
// };
// function setUserName() {
//   const myName = prompt("Please enter your name.");
//   if (!myName) {
//     setUserName();
//   } else {
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `${myName}, you're cool!`;
//   }
// }
// if (!localStorage.getItem("name")) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem("name");
//   myHeading.innerHTML = `<i>Hello</i>, ${storedName}!`;
// }
