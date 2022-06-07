$(document).ready(async function () {
    //building product
    $('#page-content').html(await buildProduct());
    //building designs
    $('.product_child_designs').html(await buildDesigns());
    //product adding to cart
    addtoCart();
    //applying design
    changeDesign();
    //changing color
    changeColor();
});

async function buildProduct() {
    var colors = '';
    var sizes = '';
    var result = '';
    await $.getJSON('../../api/get' + getFileName(), (p) => {
        p.forEach((p) => {
            p.color.forEach((c) => { colors += '<option>' + c + '</option>' });
            p.size.forEach((s) => { sizes += '<option>' + s + '</option>' });
            result = `<div class="parent padding-top">
            <div class="product_child_image relative">
                <img class="product_image_img" src="../img/products/` + p.name + `_` + p.color[0] + `.png">
                <img class="product_design_image_img" src="#" alt="">
            </div>
            <div class="product_child_des">
                <h1 id="productname">` + p.name + `</h1>
                <p id="productprice" class="underline">€ ` + p.price + `</p>
                <div>
                    <span>Color:</span>
                    <select id="select-color">
                        ` + colors + `
                    </select>
                    <span>Size:</span>
                    <select id="select-size">
                        <option value="" selected>-</option>
                        ` + sizes + `
                    </select>
                </div>
                <div>
                    <button class="clean-button normal-colors product_addcart_btn">Add to cart</button>
                    <p id="addtoCartmessage" class=""></p>
                </div>
                <p id="productdes">` + p.description + `</p>
            </div>
            <div class="product_child_designs"></div>
        </div>`
        });
    });
    return result;
}

async function buildDesigns() {
    var result = '';
    await $.getJSON('../../api/getalldesigns', (d) => {
        d.forEach((d) => {
            sessionStorage.setItem(d.guid,d.fileEnding)
            result += `<div class="product_designs">
                <img class="product_designs_img" src="../Uploads/` + d.guid + d.fileEnding + `">
                <div class="product_designs_des"> 
                    <h4 id="` + d.guid + `name">` + d.name + `</h4>
                    <h3 id="` + d.guid + `autor">by ` + d.artist + `</h3>
                </div>
                <button class="clean-button normal-colors product_designs_btn" id="` + d.guid + `">Apply</button>
            </div>`;
        });
    });
    return result;
}

function addtoCart() {
    $('.product_addcart_btn').click(function () {
        switch (true) {

            case $('.product_design_image_img').attr('src') == '#' &&
                $('#select-size :selected').val() == '' &&
                document.getElementById("select-size").childElementCount > 1:

                //error no design and size
                $('#addtoCartmessage').html('Please select size and design!');
                $('#addtoCartmessage').attr('class', 'redtext');
                break;

            case $('.product_design_image_img').attr('src') == '#':

                //error no design
                $('#addtoCartmessage').html('Please select a design!');
                $('#addtoCartmessage').attr('class', 'redtext');
                break;

            case $('#select-size :selected').val() == '' &&
                document.getElementById("select-size").childElementCount > 1:

                //error no size
                $('#addtoCartmessage').html('Please select a size!');
                $('#addtoCartmessage').attr('class', 'redtext');
                break;

            default:

                //adding to cart
                var id = $('.product_design_image_img').attr('src').split("/").pop().slice(0, -4);
                
                var cart = JSON.parse(localStorage.cart);

                cart.push([
                    $('#productname').text(),
                    $('#productprice').text(),
                    $('#select-color :selected').text(),
                    $('#select-size :selected').text(),
                    id,
                    $('#' + id + 'name').text(),
                    $('#' + id + 'autor').text(),
                    $('.product_design_image_img').attr('src').split("/").pop().slice(-4)
                ]);

                localStorage.cart = JSON.stringify(cart);

                $('#addtoCartmessage').html('Successfully added to cart!');
                $('#addtoCartmessage').attr('class', 'greentext');

                setTimeout(function () {
                    $('#addtoCartmessage').html('');
                }, 1500);
        }
    });
}

function changeDesign() {
    $('.product_designs_btn').click(function () {
        let guid = $(this).attr('id');
        $('.product_design_image_img').attr('src', '../Uploads/' + guid + sessionStorage.getItem(guid));
    });
}

function changeColor() {
    $('#select-color').click(function () {
        $('.product_image_img').attr('src', "../img/products/" + getFileName() + '_' + $('#select-color :selected').val() + ".png");
    });
}