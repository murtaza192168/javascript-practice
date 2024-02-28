//  const formId = document.getElementById('my-form');
//  console.log(formId);

// const listItem = document.querySelector('.item');
// console.log(listItem); 

const listItem = document.querySelectorAll('.item');
console.log(listItem); 

document.querySelector('header').style.background = 'lightgreen';
// document.querySelector('header h1').style.color = 'yellow'
document.querySelector('header h1').textContent = 'login'


//
const ul = document.querySelector('.items')
// ul.remove();
// ul.lastElementChild.remove();


// console.log(ul.children[1])
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);



// const ulLooping = document.querySelectorAll('.item');
// ulLooping.forEach((i) => {
//     console.log(i);
// })

//
// const submitBtn = document.querySelector('.btn');
// adding an event listenener
// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     // console.log('clicked', e.target);
//     console.log(e)
//     // when it is been clicked I want to change the color of the form
//     const formStyleChange = document.querySelector('#my-form');
//     formStyleChange.style.background = 'yellow'
//     document.querySelector('body').classList.add('bg-dark')
// })

// GIVE BEHAVIOUR TO THE FORM
const myForm = document.querySelector('#my-form');
const msgIndication = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitBtn = document.querySelector('.btn');
const usersList = document.querySelector('#users');



const onSubmit = ((e) => {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === ''){
         msgIndication.classList.add('error') // class styling already there using css, not creating a new class, its just adding into the class list
         msgIndication.textContent = 'Please enter details';

         setTimeout(() =>{
            msgIndication.remove();
         }, 2000)
    }
    else
    {
        const list = document.createElement('li');
        list.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`))// createTextNode -- <li>""""</li>
        usersList.appendChild(list)
        nameInput.value = '';
        emailInput.value = '';
    }

   
})  
myForm.addEventListener('submit', onSubmit);



 
















