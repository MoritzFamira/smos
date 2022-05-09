$(document).ready(function () {
    //product adding to cart
    addtoCart();
    //applying design
    changeDesign();
    //changing color
    changeColor();
});

function addtoCart(){
    $('.product_addcart_btn').click(function () {
        if ($('.product_design_image_img').attr('src') == '#') {
            //error no design
            $('#addtoCartmessage').html('Please select a design!');
            $('#addtoCartmessage').attr('class', 'redtext');
            return;
        }
        else if ($('#select-size :selected').val() == '' && document.getElementById("select-size").childElementCount > 1) {
            //error no size
            $('#addtoCartmessage').html('Please select a size!');
            $('#addtoCartmessage').attr('class', 'redtext');
            return;
        } else {
            //adding to cart
            var id = $('.product_design_image_img').attr('src').split("/").pop().slice(0, -4);

            console.log($('#productname').text(),
                $('#productprice').text(),
                $('#select-color :selected').text(),
                $('#select-size :selected').text(),
                id,
                $('#' + id + 'name').text(),
                $('#' + id + 'autor').text());

            $('#addtoCartmessage').html('Successfully added to cart!');
            $('#addtoCartmessage').attr('class', 'greentext');
            
            setTimeout(function () {
                $('#addtoCartmessage').html('');
            }, 1500);
        }

        //var cart = JSON.parse(localStorage.cart);

        //cart.push([getFileName(),
        //$('.productprice').text(),
        //$('#select-color :selected').text(),
        //$('#select-size :selected').text(),
        //$('.product_design_image_img').attr('src').split("/").pop().slice(0, -4),
        //$('.123name').text(),
        //$('.123autor').text()]);

        //localStorage.cart = JSON.stringify(cart); 
    });
}   

function changeDesign(){
    $('.product_designs_btn').click(function () {
        $('.product_design_image_img').attr('src', '../uploads/' + $(this).attr('id') + '.png');
    });
}

function changeColor() {
    $('#select-color').click(function () {
        $('.product_image_img').attr('src', "../img/products/" + getFileName() + '_' + $('#select-color :selected').val() + ".png");
    });
}