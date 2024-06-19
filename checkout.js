
// // Wait until the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", () => {
//         // Select the shopbag button
//         let shop_click = document.querySelector(".shopbag_button");
    
//         // Check if the button exists
//         if (shop_click) {
//             // Add click event listener to the button
//             shop_click.addEventListener("click", () => {
//                 // Navigate to the checkout page
//                 // window.location.href = 'checkout.html';










                
                
//                 window.alert("hello");

                
//             });
//         } else {
//             console.error("Shopbag button not found");
//         }
//     });

let shop_click = document.querySelector(".shopbag_button");

let canvas = document.querySelector(".checkout-container");
// let canvas = document.querySelector(".checkout-container");

const cartItems_array = JSON.parse(localStorage.getItem('cart')) || [];


document.addEventListener("DOMContentLoaded", () => {

        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsContainer = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total-price');
      
        let totalPrice = 0;
      
        cartItems.forEach(item => {

          canvas.style.display = "block"; 

          const cartItemElement = document.createElement('div');
          cartItemElement.classList.add('cart-item');
      
          const price = parseFloat(item.price.replace(/[^\d.-]/g, ''));
          totalPrice += price;
      
          cartItemElement.innerHTML = `
            <div style="position:relative;">
            <img src="${item.image1}" alt="${item.title}">
            <button style="position: absolute; top: 10px; left:105px" class="remove_item"><span class="material-symbols-outlined">delete</span></button>
            </div>
            <div class="cart-item-details">
              <div class="cart-item-title">${item.title}</div>
              <div class="cart-item-price">₹<span class="item-price">${price.toFixed(2)}</span></div>
              <div class="cart-item-quantity">
                <label for="quantity-${item.id}">Quantity:</label>
                <input type="number" id="quantity-${item.id}" name="quantity-${item.id}" value="1" min="1" data-price="${price}">
              </div>
              <div class="cart-item-size">
                <label for="size-${item.id}">Size: (in UK)</label>
                <select id="size-${item.id}" name="size-${item.id}">
                  <option value="2">2</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="9.5">9.5</option>
                  <option value="10">10</option>
                  <option value="10.5">10.5</option>
                  <option value="11">11</option>
                  <option value="11.5">11.5</option>

                </select>
              </div>
            </div>
          `;
      
          cartItemsContainer.appendChild(cartItemElement);
      
          const quantityInput = cartItemElement.querySelector(`#quantity-${item.id}`);
          quantityInput.addEventListener('input', () => updateTotalPrice());
        });


      
        function updateTotalPrice() {
          let newTotalPrice = 0;
          document.querySelectorAll('.cart-item-quantity input').forEach(input => {
            const quantity = parseInt(input.value);
            const price = parseFloat(input.getAttribute('data-price'));
            newTotalPrice += quantity * price;
          });
          totalPriceElement.innerText = `₹${newTotalPrice.toFixed(2)}`;
        }
      
        totalPriceElement.innerText = `₹${totalPrice.toFixed(2)}`;
      
        document.querySelector('.checkout-button0').addEventListener('click', (event) => {
          event.preventDefault();
          alert('Order completed successfully!');
        //   cartItemsContainer.remove();
        //   totalPriceElement.remove() ; 
          const container = document.querySelector(".checkout-container");
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }

          let default_session = document.querySelector(".checkout-container");
                  let img_cont = document.createElement("div");

                  let no_items_on_cart_image = document.createElement("img");
                  let heading_for_empty_cart = document.createElement("h1");
                  heading_for_empty_cart.classList.add("head_i");
                  heading_for_empty_cart.textContent = "Order Successful";
                  
                  no_items_on_cart_image.classList.add("no_item_image");
                  no_items_on_cart_image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_MOp8oUXi_u2IpWNcwzTxbrakApI2fV3BG2OwIEVPUWo7FvNHymTcmMioifnZVUwyaZ8&usqp=CAU";
                  img_cont.appendChild(no_items_on_cart_image);
                  img_cont.appendChild(heading_for_empty_cart);

                  default_session.appendChild(img_cont);

                  default_session.style.display = "block";

          
        //   window.location.href = 'index.html';
          localStorage.clear();
        });

        
      });

// Function to load header HTML content
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// Call the function to load the header
loadHeader();
      
document.addEventListener("DOMContentLoaded", () => {
        // Select the shopbag button
        let shop_click = document.querySelector(".shopbag_button");
    
        // Check if the button exists
        if (shop_click) {
            // Add click event listener to the button
            shop_click.addEventListener("click", () => {
                // Navigate to the checkout page
                window.location.href = 'checkout.html';
                
            });
        } else {
            console.error("Shopbag button not found");
        }
    });
