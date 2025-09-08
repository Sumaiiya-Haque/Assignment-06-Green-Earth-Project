const categoriesContainer = document.getElementById('categories-container');

const loadCategories =()=>{
  fetch('https://openapi.programming-hero.com/api/categories')
  .then(res => res.json())
  .then(data => {
    const categories = data.categories;
   

    categories.forEach(category => {
      const btn = document.createElement('button');
      btn.textContent = category.category_name;
      btn.classList.add(
        'text-black',             // মূল text কালো
        'px-4', 'py-2',
        'rounded',
        'hover:bg-green-500',      // শুধু hover এ green background
        'hover:text-white',        // hover এ text white
        'transition', 
        'w-full', 
        'text-left'               // text left aligned
      );

      categoriesContainer.appendChild(btn);
    });
  });
};
loadCategories();

// 
const container = document.getElementById('card-container');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let total = 0;

const cart = {};

fetch('https://openapi.programming-hero.com/api/plants')
  .then(res => res.json())
  .then(data => {
    const plants = data.plants || [];

    plants.forEach(plant => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <div class="card bg-base-100 shadow-lg h-full">
          <img src="${plant.image}" class="w-full h-55 object-cover px-4 pt-4" />
          <div class="card-body">
            <h2 class="text-xl font-bold">${plant.name}</h2>
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
      `;

      container.appendChild(card);






      // 
const modal = document.getElementById('plant-modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const closeModal = document.getElementById('close-modal');

// close modal button
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// বা backdrop click করলে modal hide
modal.addEventListener('click', (e) => {
  if(e.target === modal) modal.classList.add('hidden');
});


const plantNameEl = card.querySelector('h2'); // plant.name element
plantNameEl.style.cursor = 'pointer'; // pointer cursor

plantNameEl.addEventListener('click', () => {
  modalImg.src = plant.image;
  modalName.textContent = plant.name;
  modalDescription.textContent = plant.description;
  modalPrice.textContent = plant.price;

  modal.classList.remove('hidden'); // modal দেখানো
});








      const addBtn = card.querySelector('.add-to-cart');
      addBtn.addEventListener('click', () => {
        const price = Number(plant.price);
        const name = plant.name;

        if (cart[name]) {
          cart[name].quantity += 1;
          cart[name].element.querySelector('.quantity').textContent = `×${cart[name].quantity}`;
        } else {
          const cartItem = document.createElement('div');
          cartItem.className = 'cart-item w-[200px]  bg-green-100 p-3 flex justify-between items-center rounded-xl mb-2 shadow-md mx-auto ';
          cartItem.innerHTML = `
            <div class="space-y-3">
              <div><p class="font-semibold">${name}</p></div>
              <div><p>${price} Tk <span class="quantity">×1</span></p></div>
            </div>
            <button class="remove-item text-red-500 font-bold text-4xl">×</button>
          `;

          cartItemsContainer.appendChild(cartItem);

          // remove button
          cartItem.querySelector('.remove-item').addEventListener('click', () => {
            total -= cart[name].price * cart[name].quantity;
            cartTotal.textContent = total;
            cartItemsContainer.removeChild(cartItem);
            delete cart[name];
          });

          cart[name] = {
            price,
            quantity: 1,
            element: cartItem
          };
        }

        total += price;
        cartTotal.textContent = total;
      });
    });
  });




  

  

