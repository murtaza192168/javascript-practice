const products = [
    {
      name: 'Sony Playstation 5',
      url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
      category: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung Galaxy',
      url: 'https://i.ibb.co/rFFMDH7/samsung-galaxy.png',
      category: 'smartphones',
      price: 399.99,
    },
    {
      name: 'Cannon EOS Camera',
      url: 'https://i.ibb.co/mhm1hLq/cannon-eos-camera.png',
      category: 'cameras',
      price: 749.99,
    },
    {
      name: 'Sony A7 Camera',
      url: 'https://i.ibb.co/LS9TDLN/sony-a7-camera.png',
      category: 'cameras',
      price: 1999.99,
    },
    {
      name: 'LG TV',
      url: 'https://i.ibb.co/QHgFnHk/lg-tv.png',
      category: 'televisions',
      price: 799.99,
    },
    {
      name: 'Nintendo Switch',
      url: 'https://i.ibb.co/L0L9SdG/nintendo-switch.png',
      category: 'games',
      price: 299.99,
    },
    {
      name: 'Xbox Series X',
      url: 'https://i.ibb.co/C8rBVdT/xbox-series-x.png',
      category: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung TV',
      url: 'https://i.ibb.co/Pj1nm4B/samsung-tv.png',
      category: 'televisions',
      price: 1099.99,
    },
    {
      name: 'Google Pixel',
      url: 'https://i.ibb.co/5F58zmH/google-pixel.png',
      category: 'smartphones',
      price: 499.99,
    },
    {
      name: 'Sony ZV1F Camera',
      url: 'https://i.ibb.co/5Wy3RZ9/sony-zv1f-camera.png',
      category: 'cameras',
      price: 799.99,
    },
    {
      name: 'Toshiba TV',
      url: 'https://i.ibb.co/FxM6rXq/toshiba-tv.png',
      category: 'televisions',
      price: 499.99,
    },
    {
      name: 'iPhone 14',
      url: 'https://i.ibb.co/5vc7J6s/iphone-14.png',
      category: 'smartphones',
      price: 999.99,
    },
  ];



// Select the DOM elements
const searchInput = document.querySelector('#search')
const cartCount = document.querySelector('#cart-count')
const filterContainer = document.querySelector('#filters-container')
const checkboxes = document.querySelectorAll('.check')
// console.log(checkboxes);
const productsWrapper = document.querySelector('#products-wrapper')

// Initialize the Cart Item Count 
let cartItemCount = 0;
//Initialize the products element array
const productElements = [];

// Add Event Listeners for Filtering the products
searchInput.addEventListener('input', filterProducts)
filterContainer.addEventListener('change', filterProducts)

// // convert this Json data into Javascript object to send data over a network
// const products = JSON.parse(jsonProducts)
// Loop through the productss javascript object to traverse through evety element

const createProductElement = (product) =>{
    const productElement = document.createElement('div')
    productElement.className = 'item space-y-2'
    productElement.innerHTML = `
    <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
       <img src="${product.url}" alt="${product.name}" class="w-full h-full object-cover">
       <button class="status bg-gray-800 text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">Add to Cart</button>
    </div>
    <p class="text-xl">${product.name}</p>
    <strong>$${product.price.toLocaleString()}</strong>
    `
    // Giving a functionality to the "Add to Cart" button
     const cartStatusButton = productElement.querySelector('.status')
     cartStatusButton.addEventListener('click', updateCart) // implementation of updateCart() before loop

    return productElement
}
// Add or remove item from Cart
const updateCart = (e) => {
    const statusEle = e.target
    console.log(statusEle);
    if(statusEle.classList.contains('added')){
         // Remove from cart by a click
         statusEle.classList.remove('added')
         statusEle.innerText = 'Add to Cart'
         statusEle.classList.add('bg-gray-800')
         statusEle.classList.remove('bg-red-600')
         cartItemCount--
         
    }else{
        // Add to Cart by a click
        statusEle.classList.add('added')
        statusEle.innerText = 'Remove From Cart'
        statusEle.classList.remove('bg-gray-800')
        statusEle.classList.add('bg-red-600')
        cartItemCount++
    }
    //update the cart count 
    cartCount.innerText = cartItemCount.toString()
}

products.forEach((product) => {
    // console.log(product);
    // Call the method:
    const productElement = createProductElement(product) // function call
    // Now push each productElement inside the array i.e. productElements
    productElements.push(productElement)
    // Since productsWrapper is the parent element, we need to append it inside it
    productsWrapper.appendChild(productElement)
})

// Filter the Products by search input and checkboxes

function filterProducts(){
    const searched_word = searchInput.value.trim().toLowerCase()
    // checked checkboxes
    const checkedCategories = Array.from(checkboxes)
                              // and now we want all the checked items: so filter it
                              .filter((check) => check.checked)
                               // only he actual category name i.e. id, with the help of which filtering will work
                              .map((check) => check.id)

// Loop over the products and check for matches
productElements.forEach((productElement, index) => {
    const product = products[index] // bczz we will need to access the actual JS object properties to match

    // Check if the actual productName matches the user entered value
    const matchesSearchTerm = product.name.toLowerCase().includes(searched_word)

    // Check if the checkedCategories matches the actual category
      // initially check that if no boxes are checked, then display all products
    const isInCheckedCategory =  checkedCategories.length === 0 || checkedCategories.includes(product.category)

    // Actual condition
    if(matchesSearchTerm && isInCheckedCategory){
        productElement.classList.remove('hidden')
    }else{
        productElement.classList.add('hidden')
    }
})

}

