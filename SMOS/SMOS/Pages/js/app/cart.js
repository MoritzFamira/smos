$(document).ready(function () {
    //building products
    $('#products').html(buildCart());
    //calculate total
    $('#total').html(calcTotal());
    //removing item
    removeItem();


});

function buildCart() {
    var result = '';
    var cart = JSON.parse(localStorage.cart);
    cart.forEach(function (item, index) {
        result += `<div class="cart_product_parent">
            <div class="cart_product_image_child">
                <img class="cart_product_image_img" src="../img/products/` + item[0] + `_` + item[2] + `.png">
                <img class="cart_product_image_design_img" src="../Uploads/` + item[4] + `.png">
            </div>
            <div class="cart_product_des_child">
                <h2>` + item[0] + `</h2>
                <div>
                    <span class="bold">Size</span><span>: ` + item[3] + `</span>
                </div>
                <div>
                    <span class="bold">Color</span><span>: ` + item[2] + `</span>
                </div>
                <div>
                    <span class="bold">Design</span><span>: ` + item[5] + ` ` + item[6] + `</span>
                </div>
                </div>
                <div class="cart_product_right_child">
                    <h3 id="productprice">` + item[1] + `</h3>
                    <button class="clean-button normal-colors cart_remove_btn" id="` + index + `">Remove</button>
                </div>
        </div>`;
    });
    return result;
}

function calcTotal() {
    var cart = JSON.parse(localStorage.cart);
    var totprice = 0;
    cart.forEach((item) => {
        totprice += Number(item[1].substring(2));
    });
    return `<div class="cart_product_parent align_center flex-space-between">
        <div>
            <h2>Total</h2>
        </div>
        <div class="cart_total">
            <span>Quantity: </span><span>` + cart.length + `</span>
        </div>
        <div>
            <span>Price: € </span><span>` + totprice.toFixed(2) + `</span>
        </div>
        <div>
            <button class="clean-button normal-colors cart_checkout_btn"><a href="https://www.google.com">Checkout</a></button>
        </div>
    </div>`;
}

function removeItem() {
    $('.cart_remove_btn').click(function () {
        var cart = JSON.parse(localStorage.cart);
        cart.splice($(this).attr('id'), 1);
        localStorage.cart = JSON.stringify(cart);
        reloadJS("cart.js");
    });
}

function buildNavbarCart() { }