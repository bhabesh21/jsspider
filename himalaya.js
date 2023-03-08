var container = document.getElementById("himalaya_container");

var data = [
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171036703/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Mentat Tablet-60",
        price: "₹ 123 ",
        strickPrice: "₹ 322 "
    },
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171037491/1-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Anti-Dandruff Shampoo-100Ml",
        price: "₹ 44 ",
        strickPrice: "₹ 545 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171038548/1-20210920191441575574-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Rumalaya Tablet-60",
        price: "₹ 23 ",
        strickPrice: "₹ 423 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171039947/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Bonnisan Liquid-100ml",
        price: "₹ 122 ",
        strickPrice: "₹ 423"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171040026/1-20210920191403483445-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Bresol Tablet-60",
        price: "₹ 122 ",
        strickPrice: "₹ 323 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639224942556_Himalaya_Moisturizing_Aloe_Vera_Face_Wash-50_ml.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Moisturizing Aloe Vera Face Wash-50 ml",
        price: "₹ 123 ",
        strickPrice: "₹ 342 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171042690/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Gentle Exfoliating Scrub Apricot-50gm",
        price: "₹ 232 ",
        strickPrice: "₹ 433 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171043213/1-large.PNG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Q-Dee Immunity-8 Tablet",
        price: "₹ 333 ",
        strickPrice: "₹ 444 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171045255/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Quista Active Chocolate",
        price: "₹ 333 ",
        strickPrice: "₹ 535 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171027877/1-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Oxitard Capsule-30",
        price: "₹ 223 ",
        strickPrice: "₹ 434 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639224077432_Himalaya_Nourishing_Skin_Cream-50ml_5454.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Nourishing Skin Cream-50ml",
        price: "₹ 123 ",
        strickPrice: "₹ 434 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1653115016001_himalaya-olive-extra-nourishing-body-lotion-100-ml.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Neem Peel Off Mask 50Gm",
        price: "₹ 232 ",
        strickPrice: "₹ 434 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1653115519500_71F5AYQdPSL._SY450_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Wellness Pure Herbs Tulasi Respiratory Wellness Tablet",
        price: "₹ 232 ",
        strickPrice: "₹ 535 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1653115043640_71amVPIzV0L._SL1500_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Personal Care Fresh Start Oil Clear Face Wash-100ml-Lemon",
        price: "₹ 323 ",
        strickPrice: "₹ 5354 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171026092/1-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Almond & Rose Soap Pack Of 3",
        price: "₹ 121 ",
        strickPrice: "₹ 323 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171026167/1-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Clear Complexion Whitening Day Cream-50Gm",
        price: "₹ 123 ",
        strickPrice: "₹ 342 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171040277/1-large.PNG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Tentex Royal Capsule-10",
        price: "₹ 276 ",
        strickPrice: "₹ 754 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171035974/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Gentle Baby Wash-100ml",
        price: "₹ 454 ",
        strickPrice: "₹ 925 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1641895141032_HIMALAYA_HADJOD_TABLET-60.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "HIMALAYA HADJOD TABLET-60",
        price: "₹ 323 ",
        strickPrice: "₹ 987 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171039947/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Bonnisan Liquid-100ml",
        price: "₹ 122 ",
        strickPrice: "₹ 423"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171040026/1-20210920191403483445-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Bresol Tablet-60",
        price: "₹ 122 ",
        strickPrice: "₹ 323 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639224942556_Himalaya_Moisturizing_Aloe_Vera_Face_Wash-50_ml.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Moisturizing Aloe Vera Face Wash-50 ml",
        price: "₹ 123 ",
        strickPrice: "₹ 342 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171042690/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Gentle Exfoliating Scrub Apricot-50gm",
        price: "₹ 232 ",
        strickPrice: "₹ 433 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171043213/1-large.PNG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Q-Dee Immunity-8 Tablet",
        price: "₹ 333 ",
        strickPrice: "₹ 444 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171045255/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Quista Active Chocolate",
        price: "₹ 333 ",
        strickPrice: "₹ 535 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171027877/1-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Oxitard Capsule-30",
        price: "₹ 223 ",
        strickPrice: "₹ 434 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639224077432_Himalaya_Nourishing_Skin_Cream-50ml_5454.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Nourishing Skin Cream-50ml",
        price: "₹ 123 ",
        strickPrice: "₹ 434 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1653115016001_himalaya-olive-extra-nourishing-body-lotion-100-ml.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Neem Peel Off Mask 50Gm",
        price: "₹ 232 ",
        strickPrice: "₹ 434 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1653115519500_71F5AYQdPSL._SY450_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Wellness Pure Herbs Tulasi Respiratory Wellness Tablet",
        price: "₹ 232 ",
        strickPrice: "₹ 535 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1653115043640_71amVPIzV0L._SL1500_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Personal Care Fresh Start Oil Clear Face Wash-100ml-Lemon",
        price: "₹ 323 ",
        strickPrice: "₹ 5354 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171026092/1-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Almond & Rose Soap Pack Of 3",
        price: "₹ 121 ",
        strickPrice: "₹ 323 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171036703/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Mentat Tablet-60",
        price: "₹ 123 ",
        strickPrice: "₹ 322 "
    },
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171037491/1-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Anti-Dandruff Shampoo-100Ml",
        price: "₹ 44 ",
        strickPrice: "₹ 545 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171038548/1-20210920191441575574-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Rumalaya Tablet-60",
        price: "₹ 23 ",
        strickPrice: "₹ 423 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171039947/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Bonnisan Liquid-100ml",
        price: "₹ 122 ",
        strickPrice: "₹ 423"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171040026/1-20210920191403483445-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Himalaya Bresol Tablet-60",
        price: "₹ 122 ",
        strickPrice: "₹ 323 "
    }

];

var arr = [];
var oldData = JSON.parse(localStorage.getItem("addToCart data"));
if(oldData === null) {
    arr = [];
} else {
    for(var key in oldData) {
        arr.push(oldData[key]);
    }
}

data.map(function(el){
    var himalaya_pbox = document.createElement("div");

    // image
    var himalaya_cbox1 = document.createElement("div");

    var himalaya_image = document.createElement("img");
    himalaya_image.setAttribute("src", el.image);
    // himalaya_image.setAttribute("class", "himalaya_item_images");

    // description
    var himalaya_cbox2 = document.createElement("div");

    var himalaya_description = document.createElement("p");
    himalaya_description.textContent = el.description;

    // price & strickPrice
    var himalaya_cbox3 = document.createElement("div");
    
    // price
    var himalaya_price = document.createElement("h2");
    himalaya_price.textContent = el.price;

    // strickPrice
    var himalaya_strickPrice = document.createElement("h4");
    himalaya_strickPrice.textContent = el.strickPrice;
    himalaya_strickPrice.setAttribute("class", "himalaya_item_strickPrice");

    // rating start
    var rating = document.createElement("div");
    rating.innerHTML = `
    <div id="rating" class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
    `;
    // rating end
    
    // add to cart 
    var himalaya_cbox4 = document.createElement("div");

    var himalaya_button = document.createElement("button");
    himalaya_button.textContent = "ADD TO CART";

    himalaya_button.addEventListener("click", (e) => {
        e.preventDefault();
        let obj = {
            image: el.image,
            description: el.description,
            price: el.price,
            strickPrice: el.strickPrice
        }
        arr.push(obj);
        localStorage.setItem("addToCart data", JSON.stringify(arr));
        himalaya_button.innerText = "GO TO CART";
        himalaya_button.style.backgroundColor = "green";
        himalaya_button.style.color = "white";
    });

    // append all 
    himalaya_cbox1.append(himalaya_image);
    himalaya_cbox2.append(himalaya_description);
    himalaya_cbox3.append(himalaya_price, himalaya_strickPrice);
    himalaya_cbox4.append(himalaya_button);

    himalaya_pbox.append(himalaya_cbox1, himalaya_cbox2, himalaya_cbox3,rating, himalaya_cbox4);

    container.append(himalaya_pbox);
});