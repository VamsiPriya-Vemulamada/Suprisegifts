// for the main header
let mainEl = document.getElementById("main-box");
console.log(mainEl)
mainEl.style.backgroundColor = "skyblue";
mainEl.innerHTML = "<h1> SupriseGifts </h1>";
mainEl.style.fontStyle ="italic"
mainEl.style.textAlign = "center"
mainEl.classList.add("flex-ctr");
// for tagline
let taglineE1 = document.createElement("h2");
taglineE1.textContent = "feel the love by suprisegifts";
taglineE1.style.fontSize = "25px"
mainEl.appendChild(taglineE1); // this is  parentNode.appendChild(newNode); adding the lines in h1 header and treating h2 element as child element 

// for menu elements
let topmenuEl = document.getElementById("menu");
console.log(topmenuEl);
topmenuEl.style.height = "100%";
topmenuEl.style.backgroundColor = "skyblue";
topmenuEl.classList.add("flex-around");
// for the menu elements instead writing each line in html page/ js, we took  the nested array elements and iterate each element so that we get the all the elements in nav bar
var menuLinks = [
    {text: 'gifts', href: '/gifts'},
    {text: 'forkids', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    
    {text: 'forher', href: '#', subLinks: [
      {text: 'mother', href: '/forher/mother'},
      {text: 'wife', href: '/forher/wife'},
      {text: 'sister', href: '/forher/sister'},
      {text: 'daughter', href: '/forher/daughter'}
    ]},

    {text: 'forhim', href: '#', subLinks: [
        {text: 'father', href: '/forhim/father'},
        {text: 'husband', href: '/forhim/husband'},
        {text: 'brother', href: '/forhim/brother'},
        {text: 'son', href: '/forhim/son'}
      ]},
  ];

  menuLinks.forEach( link => {
    const linkelement =document.createElement("a");
    linkelement.textContent = link.text;
    linkelement.href = link.href;
    topmenuEl.appendChild(linkelement);
});

// for the animation box for getting offers to customer

// For the animation box
const box = document.getElementById('animated-box');
box.style.width = '500px';
box.style.height = '500px';
box.style.backgroundColor = 'pink';

// Create a DocumentFragment
const fragment = document.createDocumentFragment();
const boxInteraction = ["like", "share", "comment"];

// Add elements to the DocumentFragment
boxInteraction.forEach((interaction) => {
    const boxItem = document.createElement('div');
    boxItem.className = 'animated-box-item'; // Apply the animation style
    boxItem.textContent = interaction;
     fragment.appendChild(boxItem);// appending the fragment items in boxitem
     fragment.textAlign = "center";

    console.log(fragment.appendChild(boxItem));
 // Apply flexbox to the container (box) to align items side by side
box.style.display = 'flex';
box.style.justifyContent = 'space-around'; // Even spacing between elements
box.style.alignItems = 'center'; // Vertical alignment (if needed)
  });

// Append the DocumentFragment to the box

console.log(box.appendChild(fragment));

// Animation
let position = 0;
const animation = () => {
    position += 15;
    box.style.transform = `translateX(${position}px)`; // this for the position of the animated box
  //  box.appendChild(fragment)
 
    if (position < 700) {
        requestAnimationFrame(animation); // Continue animating until position reaches 700
    }
};
animation();

// Adding the event listners to the like, share and comment


const boxItems = document.querySelectorAll('.animated-box-item');
boxItems.forEach(item => {
    item.style.padding = '10px';
    item.style.border = '1px solid black';
    item.style.margin = '5px';
    item.style.cursor = 'pointer'; // Show pointer on hover

// Add click event listeners based on the content
// Event listners are the element events, here click is an event and () is nothing followed by arrow function
// arrow function 
// element.addEventListener(event, listener);
// element.addEventListener(event, listener, useCapture);
// element.addEventListener(event, listener, options);

//Arrow Function Syntax: () => {...} is an arrow function, a concise way to define a function in JavaScript. It's part of the ES6 (ES2015) syntax.

// Empty Parentheses ():

// The parentheses in () => {...} are where you define the parameters for the function.
// In this case, the parentheses are empty, meaning the function doesn't expect any parameters.
// If your function required parameters (for example, the event object), you would define them inside the parentheses, like this: event => {...} or (event) => {...}.
// item.onclick = function-- event handler which is used for only one event 
    item.addEventListener('click', () => {
        if (item.textContent === "like") {
            console.log("You liked this!");
        } else if (item.textContent === "share") {
            console.log("You shared this!");
        } else if (item.textContent === "comment") {
            console.log("You commented!");
        }
    });
});

// Assign an event handler (only one handler allowed)
const button = document.getElementById('feedback');
button.onclick = function() {

    console.log("Event Handler: Button clicked");
};
box.append(button);
console.log( box.append(button))
// event handlers are the one which can be used for handling only one event hanler where as event listener can handle multiple events. event hanlder--(element.onclick) event listner-- (addEventListener)

// Adding BOM components: Windows alert
window.alert("click here to see the full page");


// Create footer element
const footer = document.createElement('footer');
// footer.innerHTML = "<h1>SupriseGifts</h1>";
 footer.style.backgroundColor = "skyblue";
 footer.style.padding = '75px';
// footer.style.textAlign = 'center';
footer.style.position = 'fixed'; // Fix the footer at the bottom
footer.style.bottom = '0';
footer.style.width = '100%';

document.addEventListener('DOMContentLoaded', () => {

  // Create the form
  const myForm = document.getElementById('myForm');
  myForm.id = "myForm"; // Ensure the form has the correct ID
 
  // Append the form to the footer
  footer.appendChild(myForm);
  console.log( footer.appendChild(myForm))
  // Add form submission handler
  myForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission
    alert(`You submitted: ${myForm.querySelector("input").value}`);

  });
  
  console.log( document.body.appendChild(footer));
 // created a register button
  const registerButton = document.createElement('button');
  registerButton.id = 'Registerhere';
  registerButton.textContent = "Register Here";
  registerButton.type = "submit"; // This makes it a form submission button
  
  setInterval(() => {
    registerButton.textContent = "Yay! Register to get the offer";
  }, 1000);

  // Add form submission handler
  myForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission
    alert(`You submitted: ${myForm.querySelector("input").value}`);
  });

  myForm.appendChild(registerButton);
  console.log(myForm)
});
  footer.appendChild(myForm);

   // Append footer to the body
   document.body.appendChild(footer);

   