
const cartbtn = document.getElementById("cartOpen");
const cartItems = document.getElementById("cartItems");
const cartClose = document.getElementById("closeCart");
cartbtn.onclick=function()
{   
if(cartbtn.classList.toggle('active'))
{
    cartItems.style.height = "500px";
    cartItems.style.transition = "all 0.6s ease-in-out";
}
else
{
    cartItems.style.height = "0px";
    cartItems.style.transition = "all 0.6s ease-in-out";
}
}

cartClose.onclick=function()
{
    cartItems.style.height="0px";
    cartbtn.classList.remove('active');
}


// On product click
/*const btns = document.getElementsByClassName('addToCart');
for(var i=0;i<btns.length;i++)
{
    btns[i].addEventListener('click',addToCartBtn);
}
function addToCartBtn()
{
    var buttonClicked = this.parentElement.parentElement;
    var itemImage = buttonClicked.getElementsByClassName('item-image')[0].src;
    var itemName = buttonClicked.getElementsByClassName('item-name')[0].innerText;
    var itemDesc = buttonClicked.getElementsByClassName('item-desc')[0].innerText;
    var itemPrice = buttonClicked.getElementsByClassName('item-price')[0].innerText;
    var Price = parseFloat(itemPrice);
    addToCartItem(itemImage,itemName,itemDesc,Price);
    updateTotalCart(itemName);
}
function addToCartItem(itemImage,itemName,itemDesc,Price)
{
    var cartContainer = document.getElementById('cart-container');
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    var cartContent = `
                    <div class="row h-100">
                    <div class="col-sm-2 h-100">
                    <img class="cart-item-img h-100 w-100" src="${itemImage}"/>
                    </div>
                    <div class="col-sm-6">
                    <p class="cart-item-name fs-4">${itemName}</p>
                    <p class="cart-item-desc fs-6">${itemDesc}</p>
                    </div>
                    <div class="col-sm-2 text-center">
                    <p class="cart-item-price">$${Price}</p>
                    <input class="cart-item-qty w-25" value="1" type="number"/>
                    </div>
                    <div class="col-sm-2 d-flex align-items-center">
                    <button class="remove-cart-item btn btn-primary w-100" >Remove</button>
                    </div>
                    </div>
                     `;
    

    cartItem.innerHTML = cartContent;
    cartContainer.appendChild(cartItem);
    
    
    cartItem.getElementsByClassName('cart-item-qty')[0].addEventListener('change',quantityChanged);
    cartItem.getElementsByClassName('remove-cart-item')[0].addEventListener('click',removeCartItem);
    // document.getElementById('total_cart_items').innerText = Qunatity;
}

function updateTotalCart()
{
    var cartContainerBox = document.getElementById('cart-container');
    var itemRows = cartContainerBox.getElementsByClassName('cart-item');


    var total = 0;
      
    for(var i=0;i<itemRows.length;i++)
    {
        var items = itemRows[i];
        var itemsRate = items.getElementsByClassName('cart-item-price')[0].innerText;
         var Rate = parseFloat(itemsRate.replace('$',''));
         var itemsQuantity = items.getElementsByClassName('cart-item-qty')[0];
         var Qunatity = itemsQuantity.value;
         total = total+(Qunatity*Rate);
    }
      document.getElementsByClassName('total_cat_amt')[0].innerText = "$ "+total;
      
}
 function removeCartItem()
{
  
     this.parentElement.parentElement.parentElement.remove();
     updateTotalCart();
 }
 function quantityChanged(event)
 {
     var input = event.target;
     if(isNaN(input.value) || input.value<=0)
     {
         input.value =1;
     }
     updateTotalCart();
 }

 var emptyCartBtn = document.getElementById('empty_cart');
 emptyCartBtn.addEventListener('click',emptyCart)
 function emptyCart()
 {
    var cartList = document.getElementById('cart-container');
    while (cartList.firstChild) {
        cartList.removeChild(cartList.lastChild);
      }
    updateTotalCart();
 }*/