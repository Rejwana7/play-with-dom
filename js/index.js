const header = document.getElementById("header");
header.style.color = "red";
// querySelector
// Returns: The first element that matches the CSS selector.
// Type of return value: A single Element object (or null if no match is found).



const uniquepara=document.querySelector("#unique-para")
uniquepara.style.border='2px solid red'

const container1=document.getElementsByClassName('container')
for(const contain of container1){
    contain.style.border="2px solid aqua"
}

/**
 * * Multiple Element Selector
 */

const myTags= document.getElementsByTagName('p')
// console.log(myTags) htmlcollection,index diye access kora zay

for(let i=0; i<myTags.length ; i++){
    const element=myTags[i];
    // console.log(element)
    element.style.backgroundColor = "green";
  element.style.fontSize = "20px";

}

const allClassElements= document.getElementsByClassName("info");
for(const element of allClassElements){
    element.style.border = "3px solid blue";
}
// Gets all elements with the class 'container'
// const myParas = document.querySelectorAll(".info");
// console.log(myParas)


/**
 * * Nodes VS Element in DOM
 */
const container2=document.querySelector(".container2")
// console.log(container2)
// console.log(container2.childNodes)
console.log(container2.children);


/**
 * * children || nextElementSibling Vs nextSibling ||previousElementSibling
 */

const item2 = document.getElementById("item2");

 const parent=item2.parentElement;
// const parent=item2.parentElement.children;
// console.log(parent.childNodes)
// div conatianer3
const previousSibling=item2.previousElementSibling
// console.log(previousSibling)
const nextElementSibling = item2.nextElementSibling;
// console.log(nextElementSibling)
// tagwise 
const nextSomething = item2.nextSibling;
// console.log(nextSomething)
// nextsibling text ,node all count kore

/**
 * * innerText || textContent || innerHTML
 */

const container4 = document.querySelector(".container4");
// console.log(container4)

// console.log(container4.innerText);
//  console.log(container4.textContent);
//  here display none hole o asbe,hidden hole o asbe
// console.log(container4.innerHTML);


// const container4 = document.getElementsByClassName("container4");

// // If there are multiple elements with the class name "container4"
// if (container4.length > 0) {
//     // console.log(container4)
//     console.log(container4[0].innerText); // Access the first element
//     console.log(container4[0].textContent);
//     console.log(container4[0].innerHTML);
// } else {
//     console.log("No elements with the class name 'container4' found.");
// }

/**
 * * setAttribute() || getAttribute()  || removeAttribute()
 */

const myBtn=document.getElementById('myButton')
// myBtn.remove();
myBtn.setAttribute("class", "btn btn-primary common-class")

myBtn.setAttribute('disabled',true);
myBtn.setAttribute("id", "myid");
myBtn.removeAttribute("disabled");
const myLink = document.getElementById("myLink");
const link= myLink.getAttribute('href')
const link1= myLink.getAttribute('id')
//  console.log(link1)


/**
 * * Creating an element and append ||Add class name  || classList[add(),remove()] ||append Child vs append || remove() or remove Child()
 */

const container5 = document.querySelector(".container5");
const p=document.createElement('p')
p.innerText = "I am created by js dynamically ";

container5.appendChild(p);

const h1 = document.createElement("h1");
h1.textContent = "I am h1 , and i can inject to html through js";

// h1.classList.add("common-class");
h1.className = "common-class";
// h1.classList.remove("common-class");
// container5.appendChild(h1);
// Element.append() allows you to also append strings, whereas Node.appendChild() only accepts Node objects. 

container5.append(h1, "Habijibajie ...");

// remove and remove child

// container5.remove();
// container5.removeChild(h1);

// const newItem=document.createElement('li')
// const textnode=document.createTextNode("Item 3")
// newItem.appendChild(textnode); 
//   const list =document.querySelector('.container3')
// console.log(list.childNodes);
// list.insertBefore(newItem,list.childNodes[4])


const newItem = document.createElement('li');
const textnode = document.createTextNode("Item 3");
newItem.appendChild(textnode);
newItem.id ='item3'

const list = document.querySelector('.container3');
console.log(list.childNodes); // Logs all child nodes, including text nodes

// Find the third <li> (ignoring text nodes)
let targetIndex=0
for(let i=0;i< list.childNodes.length;i++){
    if(list.childNodes[i].nodeType === 1){
        // Check if it's an element node
        targetIndex++;
    }
    if(targetIndex ===3){
        list.insertBefore(newItem, list.childNodes[i]);
        break;
    }
}





