// const submit = document.querySelector('input[type=submit]')
// submit.value = 'SEND'

// queryselector seudo classes seudo selectors

// var list = document.querySelector('.list-group-item')
// list.style.color = 'red'

// // seudo selector children
// var list = document.querySelector('.list-group-item:first-child')
// list.style.color = 'yellow'

// var list = document.querySelector('.list-group-item:last-child')
// list.style.color = 'violet'


// var list = document.querySelector('.list-group-item:nth-child(3)')
// list.style.color = 'magenta'

// // Query selector ALL
// //children odd  / even - alternate styling children styling and stuff

// var oddList = document.querySelectorAll('li:nth-child(odd)')
// oddList.forEach((listItem) => {
//     listItem.style.background = '#ccc'
// })

// var oddList = document.querySelectorAll('li:nth-child(even)')
// oddList.forEach((listItem) => {
//     listItem.style.background = '#f4f4f4'
// })

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// PARENT, CHILD, SIBLINGS 

var listItems = document.querySelector('#items')
console.log(listItems.parentNode);
console.log(listItems.parentNode.parentElement)// parentNode == parentNode

var listItems = document.querySelector('ul')
console.log(listItems.childNodes); // childNodes property will include the whitespaces as well. Not a good practice to use this, Instead..
// used children or childElement //NodeList

var listItems = document.querySelector('#items');
console.log(listItems.children[1]); // htmlCollection

// Now SIBLINGS...

var heading = document.querySelector('.title')
// console.log(heading.nextSibling) 
console.log(heading.nextElementSibling);
console.log(heading.previousElementSibling); // null

//--------------------//

// create elements and classes and attributes using javascript
var newDiv = document.createElement('div')

// add class
newDiv.className = 'complete'
// add id
newDiv.id = 'complete'

// add any attribute and set it
newDiv.setAttribute('type', 'text-content')
console.log(newDiv);
// display string on page:
// I am a container

// var newDivDisplayText = document.createTextNode('I am the secondary title div')
// newDiv.appendChild(newDivDisplayText)
// // assign a container and an element inside it to place my newDiv bfr/aftr that element
// const mainDiv = document.querySelector('#main')
// console.log(mainDiv); 
// const heading2 = document.querySelector('h2 .title') // not working but ok learned it

// // Final Placing
//  mainDiv.insertBefore('newDiv','heading2')
/////////////////////////////////////////////////////////////////////////////////////



 // Click events
 
//  var clickeHereBtn = document.querySelector('#btnbtn')
//  console.log(clickeHereBtn); 

//  var onClick = (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.className);

//  }

//  clickeHereBtn.addEventListener('click', onClick)




// Event Types
// const button = document.querySelector('#btnbtn')
// function eventType(e){
   
//     console.log('Type Of Event: ' + e.type);
// }
// button.addEventListener('click', eventType)



//EVENT TYPES without clicking any button
// const bBox = document.querySelector('#box')
// bBox.addEventListener('mouseenter', eventType)
// bBox.addEventListener('mouseleave', eventType)

// bBox.addEventListener('mouseover', eventType)
// bBox.addEventListener('mouseout', eventType)

// // difference in event behaviours with this..
// bBox.innerHTML = "<h2>This</h2>"
////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////
// const bBox = document.querySelector('#box')
// bBox.addEventListener('mousemove', eventType)

// function eventType(e){
//     const output = document.querySelector('div #output')
//     // const inDiv = document.querySelector('#main')
//     // const output = document.createElement('h2')
//     // output.className = "op"
//     // console.log('EVENT TYPE:' + e.type);
//     output.innerHTML = '<h2>  MouseX:' +e.offsetX+ '</h2> <h2>MouseY:' +e.offsetY+'</h2> '
    
//     // inDiv.appendChild(output)
// }

///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// KEYBOARD & INPUT EVENTS ***************************8888

// 1) keydown , keyup, keypress...etc

// const inputValue = document.querySelector('input[type="text"]')
// // console.log(inputBox);
// const form = document.querySelector('form')
// const func = (e) =>{
//     console.log(e.type);
//     console.log(e.target.value);
//     const output = document.querySelector('div #output')
//     output.innerHTML = '<h4>'+e.target.value+'</h4>'

// }
// inputValue.addEventListener('keydown', func)

////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// change input, ..

// const selectOption = document.querySelector('select')

// const changeFunc = (e) => {
//     console.log(e.type); 
//     console.log(e.target.value);  // 4 5 6 

// }
// selectOption.addEventListener('change', changeFunc)

/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// submit event for FORM

const form = document.querySelector('form')

const submitAction = (e) => {
    e.preventDefault()
    console.log(e.type);
}
form.addEventListener('submit', submitAction)






