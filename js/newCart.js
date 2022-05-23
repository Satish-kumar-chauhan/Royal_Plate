const productEle = document.getElementById('menu-item-box');
const cartContainerBox = document.getElementById('cart-container');
const totalItemAndPriceEle = document.getElementById('total_cat_amt');
const totalItemMainPageEle = document.getElementById('total_cart_items');
document.getElementById('empty_cart').addEventListener('click', removeAllItemFromCart);

// Display our products in HTML page
function displayProducts() {
    products.forEach((product) => {
        productEle.innerHTML += `<div class="menu-items">
                <img class="item-image" src="${product.imgSrc}"/>
                <div>
                    <h4 class="item-name">${product.name}</h4>
                    <p class="item-desc">${product.description}</p>
                </div>
                <div class="rates">
                    <p onclick="addToCart(${product.id})" class="addToCart">$<span class="item-price">${product.price}</span></p>
                </div>
            </div>
                `;
    })
}
displayProducts();

// Lets take an array to store items data
let itemRow = [];

// When user clicks on addToCart Button, AddToCart Function will call
function addToCart(id) {
    if (itemRow.some((itemData) => itemData.id === id)) {
        // alert("Item already exist");
        changeNumberOfUnits('plus', id);
    } else {
        const itemdata = products.find((product) => product.id === id);
        itemRow.push({
            ...itemdata,
            numberOfUnits: 1
        });
    }

    updateCartBox();
}

// When user cliks on addToCart button, Selected item will added to cartContainer with updated total
function updateCartBox() {
    displayCartItems();
    displayTotal();
    // console.log(itemRow);
    if (itemRow.length >= 1) {
        document.getElementById('checkout_cart').style.visibility = "visible";
        document.getElementById('empty_cart').style.visibility = "visible";
        // document.getElementById('cartOpen').style.visibility= "visible";
        document.getElementById('cartOpen').style.display = "block";
    } else {
        document.getElementById('checkout_cart').style.visibility = "hidden";
        document.getElementById('empty_cart').style.visibility = "hidden";
        // document.getElementById('cartOpen').style.visibility = "hidden";
        document.getElementById('cartOpen').style.display = "none";
    }


}

// Display Slelected items on cartConatiner
function displayCartItems() {
    cartContainerBox.innerHTML = '';
    itemRow.forEach((item) => {
        cartContainerBox.innerHTML += `<div class="cart-item row mt-1">
        <div class="col-sm-1 col-4 h-100">
        <img class="cart-item-img h-100 w-100" src="${item.imgSrc}"/>
        </div>
        <div class="col-sm-6 col-8">
        <p class="cart-item-name ">${item.name}</p>
        <p class="cart-item-desc">${item.description}</p>
        </div>
        <div class="col-sm-2 col-4">
        <p class="cart-item-price">$${item.price}</p>
        </div>
        <div class="col-sm-2 col-4 text-center">
        
        <div class="units col-12 d-flex align-items-center">
            <div class="col-4 btn btn-secondary minus" onclick="changeNumberOfUnits('minus',${item.id})">-</div>
            <div class="col-4 number border">${item.numberOfUnits}</div>
            <div class="col-4 btn btn-secondary plus" onclick="changeNumberOfUnits('plus',${item.id})">+</div>
            </div>
        </div>
        <div class="col-sm-1 col-4">
        <button class="remove-cart-item btn btn-secondary w-100" onclick="removeItemFromCart(${item.id})"><i class="fas fa-times"></i></button>
        </div>
        </div>
        <hr>
        `;
    });
}

// After Item appear in CartContainer this function will calculate the Total Items & Price
function displayTotal() {
    let totalPrice = 0;
    let totalItems = 0;
    itemRow.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });
    totalItemAndPriceEle.innerHTML = `Total Item <i class="fas fa-list-ol"></i> ${totalItems} | Total Amount <i class="fas fa-money-bill-wave"></i> $${totalPrice.toFixed(2)}`;
    totalItemMainPageEle.innerHTML = totalItems;

}
// REMOVE ITEMS FROM CART
function removeItemFromCart(id) {
    itemRow = itemRow.filter((item) => item.id !== id);
    updateCartBox();
}

// REMOVE ALL ITEMS FROM CART
function removeAllItemFromCart(id) {
    itemRow = itemRow.filter((item) => {
        while (itemRow.firstChild) {
            itemRow.removeChild(itemRow.firstChild);
        }
    });
    updateCartBox();
}
// When user change Qunatity of items
function changeNumberOfUnits(action, id) {
    itemRow = itemRow.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "plus" && numberOfUnits < item.instock) {
                numberOfUnits++;
            }
        }
        return {
            ...item,
            numberOfUnits,
        };
    });
    updateCartBox();
}


var checkoutBtn = document.getElementById('checkout_cart');
var cancelPaymentBox = document.getElementById('cancelPaymentBox');
var paymentBox = document.getElementById('paymentBox');
checkoutBtn.onclick = function() {
    paymentBox.style.display = "block";
}
cancelPaymentBox.onclick = function() {
    paymentBox.style.display = "none";
}
