//Q1.
const element= document.getElementById('header');
console.log(element.textContent);

//Q2.

const image = document.getElementsByTagName("img");
console.log(image.removeAttribute=('src'));
console.log(image.setAttribute=('id','newImage.jpg'));


//Q3.
const btn =document.querySelector("button");
console.log(btn.classList);
btn.classList.add("myButton");
console.log(btn.classList);

//Q4.
const divbox = document.getElementById("text");
divbox.innerHTML = "Hello,World!";
