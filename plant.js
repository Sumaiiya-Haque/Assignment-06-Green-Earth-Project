const loadAllPlants=()=>{
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res=>res.json())
    .then(data=>displayAllPlants(data.plants))
}

loadAllPlants();

const displayAllPlants=(plants)=>{
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
              <button class="bg-green-700 w-full text-white text-xl rounded-3xl py-2 add-to-cart">Add to Cart</button>
            </div>
          </div>
     </div>
  `
   cardContainer.append(card)
})
}
   

const loadCategories = ()=>{
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
const categoryBtn =document.createElement('div')
categoryBtn.innerHTML=`
<div id="category-btn-${category.id}" onclick="loadCategoryCard('${category.id}')" class=" category-btn text-black px-4 py-2 rounded hover:bg-green-500
 hover:text-white transition w-full text-left">${category.category_name}</div>`

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
              <button class="bg-green-700 w-full text-white text-xl rounded-3xl py-2 add-to-cart">Add to Cart</button>
            </div>
          </div>
     </div>`

     categoryCardContainer.append(div)
})
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
  detailBox.innerHTML='assalamualaikum.....';
  document.getElementById("plant_modal").showModal();

}





loadCategories();

