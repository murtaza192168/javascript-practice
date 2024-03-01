const form = document.querySelector('#addForm')
const itemList = document.querySelector('#items')

const addItem = (e) => {
    e.preventDefault()
    // console.log(e.type);
    
    // extract the inputBox where in you wil enter your value, here
    const inputValue = document.getElementById('item').value
    if(inputValue){ // WOW
         // create new li so that I can write new tasks
    const li = document.createElement('li')
    li.className = 'list-group-item'
    

    const writeText = document.createTextNode(inputValue) // what ever I will write in inputBox, will be created and added in list
    li.appendChild(writeText) 
    


    // create new element - deleteBtn for new input using js
    const removeBtn = document.createElement('button')
    removeBtn.className = 'btn btn-danger btn-sm float-right delete'
    // console.log(removeBtn);
    removeBtn.appendChild(document.createTextNode(' X'))
    
    li.appendChild(removeBtn)
    itemList.appendChild(li)
    
    //As soon as as I press submit, the value entered in textBox must vanish
    
    
    // Delete that list item when I click tha button
    }
    
    
  
}
 form.addEventListener('submit', addItem)

  // Delete that list item when I click that button
  const removeItem = (e) => {
    // console.log(e.target);
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?')) // if yes then go inside if
        {
        
            //itemList is the ParentElement of li
            const li = e.target.parentElement // li is the parent element of button(target)
            itemList.removeChild(li)
            
        }
    }

  } 
  itemList.addEventListener('click', removeItem)

  ////////////
  // FILTERING ITEMS
  const filterItems = document.querySelector('#filter')
//   console.log(filterItems);

const filter_It = (e) =>{
    // console.log(e.type);

    //First we want to grab this target ni value itself i.e. (text value that will be entered everytime in either searching or adding items in the list)
    const textInputValue = e.target.value.toLowerCase()
    console.log(textInputValue);
    // Now grab all list items from itemList
    const itemss = itemList.querySelectorAll('li')
    Array.from(itemss).forEach((i) => {
        // li and button are siblings.. so we only need the first child i.e. <li>item 1 to n</li>
        const itemString = i.firstChild.textContent.toLowerCase()
        
        // ACTUAL FILTERING VISIBILITY 
        //CONDITION
        if(itemString.indexOf(textInputValue) != -1){
            i.style.display = 'block'
        }
        else{ // empty
            i.style.display = 'none'
        }
    })
}

filterItems.addEventListener('keyup', filter_It)

// Save the information Locally
// function saveData(){
//     localStorage.setItem("data", itemList.innerHTML);
// }
// //Display existing and new tasks added whenever we refresh or open the browser in local storage
// function showData(){
//     itemList.innerHTML = localStorage.getItem("data");
// }