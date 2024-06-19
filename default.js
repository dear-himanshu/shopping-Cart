document.addEventListener("DOMContentLoaded", () => {
    // Select the shopbag button
    let shop_click = document.querySelector(".shopbag_button");

    // Check if the button exists
 
        // Add click event listener to the button
       // Navigate to the checkout page

       if(cartItems_array.length === 0){

            const container = document.querySelector(".checkout-container");
                    while (container.firstChild) {
                        container.removeChild(container.firstChild);
                    }

                    let default_session = document.querySelector(".checkout-container");
                            let img_cont = document.createElement("div");

                  let no_items_on_cart_image = document.createElement("img");
                  let heading_for_empty_cart = document.createElement("h1");
                  heading_for_empty_cart.classList.add("head_i");
                  heading_for_empty_cart.textContent = "Your Cart is Empty";
                  
                  no_items_on_cart_image.classList.add("no_item_image");
                  no_items_on_cart_image.src = "https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png";
                  img_cont.appendChild(no_items_on_cart_image);
                  img_cont.appendChild(heading_for_empty_cart);

                  default_session.appendChild(img_cont);

                  default_session.style.display = "block";
                
                }

});
