const loadAllPlants=()=>{
// manageSpinner(true);
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res=>res.json())
    .then(data=>displayAllPlants(data.plants))
}

loadAllPlants();

const displayAllPlants=(plants)=>{
//  manageSpinner(true);
const cardContainer=document.getElementById('card-container')
cardContainer.innerHTML='';
plants.forEach(plant=>{
    
  // console.log(plant)
    const card = document.createElement('div')
    card.innerHTML=` 
        <div class="card bg-base-100 shadow-lg h-full">
          <img src="${plant.image}" class="w-full h-55 object-cover px-4 pt-4" />
          <div class="card-body">
            <h2 onclick="loadPlantDetail(${plant.id})" class="text-xl font-bold hover:cursor-pointer">${plant.name}</h2>
            <p>${plant.description}</p>
            <div class="card-actions justify-between space-y-2">
              <div class="bg-green-200 rounded-2xl px-3 py-2">${plant.category}</div>
              <div>
                <p class="text-xl font-bold"><span class="price">${plant.price}</span> Tk</p>
              </div>
              <button onclick="addToCart({name:'${plant.name}', price:${plant.price}})"  class=" hover:cursor-pointer bg-green-700 w-full text-white text-xl rounded-3xl py-2 add-to-cart">Add to Cart</button>
            </div>
          </div>
     </div>
  `
   cardContainer.append(card)
});
// manageSpinner(false);
};

const manageSpinner=(status)=>{
if(status==true){
  document.getElementById('spinner').classList.remove("hidden");
  document.getElementById('card-container').classList.add("hidden")

}else{
   document.getElementById('card-container').classList.remove("hidden");
  document.getElementById('spinner').classList.add("hidden")
}
};
   

const loadCategories = ()=>{
  // manageSpinner(true);
    fetch('https://openapi.programming-hero.com/api/categories')
.then(res=>res.json())
.then(data=>{
  // const clickBtn=document.getElementById(`category-btn-${id}`)
  displayCategories(data.categories)
});
}

loadCategories();


const displayCategories=(categories)=>{
// 1.get container & empty container
const categoriesContainer=document.getElementById('categories-container')
categoriesContainer.innerHTML=" ";
// 2. get into every category
categories.forEach(category=>{
  
    // create element
const categoryBtn =document.createElement('button')
categoryBtn.innerHTML=`

<button id="category-btn-${category.id}" onclick="loadCategoryCard('${category.id}')" class=" category-btn text-black px-4 py-2 rounded hover:bg-green-500
 hover:text-white hover:cursor-pointer transition w-full text-left">${category.category_name}</button>`

categoriesContainer.append(categoryBtn);
})
};










const removeActive=()=>{
  const categoryButtons = document.querySelectorAll('.category-btn');
  // console.log(categoryButtons);
  categoryButtons.forEach(btn=>btn.classList.remove("active"));
}

// load category card
const loadCategoryCard=(id)=>{
  // manageSpinner(true);
const url=`https://openapi.programming-hero.com/api/category/${id}`
fetch(url)
.then(res=>res.json())
.then(data=>{
  removeActive();
   const clickBtn=document.getElementById(`category-btn-${id}`)
  //  console.log(clickBtn);
  clickBtn.classList.add("active");
    displayCategoryCard(data.plants);
})
};

const displayCategoryCard=(cards)=>{
  // manageSpinner(true);
  // console.log(cards)
  const categoryCardContainer = document.getElementById('card-container')
  categoryCardContainer.innerHTML='';
cards.forEach(card=>{
  // console.log(card)
    const div = document.createElement('div')
  div.innerHTML=`<div class="card bg-base-100 shadow-lg h-full">
          <img src="${card.image}" class="w-full h-55 object-cover px-4 pt-4" />
          <div class="card-body">
            <h2 onclick="loadPlantDetail(${card.id})" class="text-xl font-bold hover:cursor-pointer">${card.name}</h2>
            <p>${card.description}</p>
            <div class="card-actions justify-between space-y-2">
              <div class="bg-green-200 rounded-2xl px-3 py-2">${card.category}</div>
              <div>
                <p class="text-xl font-bold"><span class="price">${card.price}</span> Tk</p>
              </div>
              <button onclick="addToCart({name:'${card.name}', price:${card.price}})"  id="" class=" hover:cursor-pointer bg-green-700 w-full text-white text-xl rounded-3xl py-2 add-to-cart">Add to Cart</button>
            </div>
          </div>
     </div>`

     categoryCardContainer.append(div)
});
// manageSpinner(false);
}




// modal function

 const loadPlantDetail=async(id)=>{
  const url=`https://openapi.programming-hero.com/api/plant/${id}`
  // console.log(url);
  const res=await fetch(url);
  const details=await res.json();
  displayPlantDetails(details.plants);
 };

const  displayPlantDetails=(plant)=>{
  console.log(plant);
  const detailBox=document.getElementById('details-container');
  detailBox.innerHTML=`
   <div class="card bg-base-100  h-full">
           <h2 class="text-xl font-bold pl-4">${plant.name}</h2>
          <img src="${plant.image}" class="w-full h-55 object-cover px-4 pt-4" />
           <div class="card-actions justify-between space-y-2">
              <div>
              <p class="text-sm pl-4 pt-4 font-bold">Category : <span class="text-base font-normal">${plant.category}</span></p>
               </div>
              </div>
         <p class="text-sm pl-4 font-bold">Price : <span class="text-base font-normal">${plant.price}</span> <span class="text-base font-normal">Tk</span></p>
            <p class="text-sm font-bold pl-4">Description : <span class="text-base font-normal">${plant.description}</span></p>
            </div>
          </div>
        </div>`;
  document.getElementById("plant_modal").showModal();

}

loadCategories();



// Cart array to store items with quantity
let cart = [];

// Add to cart function
function addToCart(plant) {
    // Check if plant already in cart
    const existingItem = cart.find(item => item.name === plant.name);
    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity
        existingItem.totalPrice = existingItem.quantity * parseFloat(existingItem.price);
    } else {
        cart.push({
            name: plant.name,
            price: parseFloat(plant.price),
            quantity: 1,
            totalPrice: parseFloat(plant.price)
        });
    }
    renderCart();
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// Render cart
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach((item, index) => {
        total += item.totalPrice;

        const div = document.createElement('div');
        div.classList.add('flex', 'justify-between', 'items-center', 'bg-green-100', 'p-3', 'rounded', 'mb-4', 'mx-2');
        div.innerHTML = `
            <div>
                <p class="font-bold">${item.name} </p>
                <p>${item.totalPrice.toFixed(2)} Tk  (x${item.quantity})</p>
            </div>
            <button onclick="removeFromCart(${index})" class="text-red-500 font-bold hover:text-red-700 text-xl hover:cursor-pointer">&times;</button>
        `;
        cartItemsContainer.append(div);
    });

    totalPriceEl.textContent = total.toFixed(2);
}

