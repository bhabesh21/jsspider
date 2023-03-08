var container = document.getElementById("cadbury_container");

var data = [
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643456489475_40192009_7-cadbury-oreo-double-stuf-vanilla-creme-chocolatey-sandwich-biscuit.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "CADBURY OREO DOUBLE STUF 75G",
        price: "₹ 18",
        strickPrice: "₹ 20"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643456154133_40196697_2-cadbury-chocobakes-choc-layered-cakes.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "CADBURY CHOCOBAKES CAKES 21G",
        price: "₹ 7",
        strickPrice: "₹ 10"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1644306385738_61OjwhzpWdL._SL1500_.jpg?tr=f-webp,q-60",
        description: "Cadbury Cocoa Powder 150gm",
        price: "₹ 161",
        strickPrice: "₹ 230"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645350454387_267463-2_4-cadbury-dairy-milk-crackle-chocolate-bar.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Crackle -38Gm",
        price: "₹ 45",
        strickPrice: "₹ 50"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643264777603_nnn333.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "CADBURY OREO CHOCO Creme Biscuits 120G",
        price: "₹ 26",
        strickPrice: "₹ 30"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643265119506_bo.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Bournville Rich Cocoa 31 GM",
        price: "₹ 41",
        strickPrice: "₹ 45"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1655208510264_710zJ1LzJEL._SX679_.jpg?tr=f-webp,q-60",
        description: "Cadbury Bournvita Fsm Health Drink (Jar)-500gm",
        price: "₹ 222",
        strickPrice: "₹ 235"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Dhani-Live/product/202107/main/img_16197084210.PNG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Bournvita 5 Star Magic Health Drink Refill Pack- 750gm",
        price: "₹ 325",
        strickPrice: "₹ 335"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645796337851_277866_11-cadbury-powder-mix-hot-chocolate-drink.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadburypowder Mix - Hot Chocolate Drink 200GM",
        price: "₹ 163",
        strickPrice: "₹ 175"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1655207305907_Untitled.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Bournvita Health Drink (Pouch)-1kg",
        price: "₹ 371",
        strickPrice: "₹ 380"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643264380500_ppp111.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Oreo Dipped Cookie 150 GM",
        price: "₹ 65",
        strickPrice: "₹ 70"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645178071919_277584_29-cadbury-oreo-creme-biscuit-vanilla-original.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Oreocreme Biscuit - Vanilla, Original120 Gm",
        price: "₹ 25",
        strickPrice: "₹ 30"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645350288422_-original-imagb9j4u6xd9h39.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Choclairs Gold Pouch -550Gm",
        price: "₹ 195",
        strickPrice: "₹ 200"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645171275901_71wN4gazGNL._SL1500_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Fuse Fit Cranberries 41Gm",
        price: "₹ 49",
        strickPrice: "₹ 50"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645333906214_glucoseperk.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Perk With Glucose -15Gm",
        price: "₹ 4",
        strickPrice: "₹ 5"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645171957853_811qELpPX9L._SL1500_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Shots -4Gm(56Unit)",
        price: "₹ 116",
        strickPrice: "₹ 120"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645170747973_40120135-2_4-cadbury-5-star-3d-chocolate-bar.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Five Star 3D -45Gm",
        price: "₹ 29",
        strickPrice: "₹ 32"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645171845447_cadbury-dairy-milk-roast-almond-chocolate-36-g-0-20201118.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Roast Almond -38Gm",
        price: "₹ 39",
        strickPrice: "₹ 45"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645095723025_-original-imagb9j4wapc9bne.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Choclairs Gold-137Gm (25Units, 5.5Gm Each )",
        price: "₹ 35",
        strickPrice: "₹ 50"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645333906214_glucoseperk.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Perk With Glucose -15Gm",
        price: "₹ 4",
        strickPrice: "₹ 5"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645171275901_71wN4gazGNL._SL1500_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Fuse Fit Cranberries 41Gm",
        price: "₹ 39",
        strickPrice: "₹ 50"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645171452475_100021029-2_4-cadbury-gems-sugar-coated-chocolate.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Gems -11.4Gm",
        price: "₹ 4.5",
        strickPrice: "₹ 5"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1646192662056_Dairy-milk-silk-Bubbly-1.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Cadbury Dairy Milk Silk Bubbly -50Gm",
        price: "₹ 75",
        strickPrice: "₹ 80"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1644306301552_61XWWU0pxIL._SL1500_.jpg?tr=f-webp,q-60",
        description: "Cadbury Chocobakes Choco Filled Cookies 75gm",
        price: "₹ 25",
        strickPrice: "₹ 30"
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
    var cadbury_pbox = document.createElement("div");

    // image
    var cadbury_cbox1 = document.createElement("div");

    var cadbury_image = document.createElement("img");
    cadbury_image.setAttribute("src", el.image);
    // cadbury_image.setAttribute("class", "cadbury_item_images");

    // description
    var cadbury_cbox2 = document.createElement("div");

    var cadbury_description = document.createElement("p");
    cadbury_description.textContent = el.description;

    // price & strickPrice
    var cadbury_cbox3 = document.createElement("div");
    
    // price
    var cadbury_price = document.createElement("h2");
    cadbury_price.textContent = el.price;

    // strickPrice
    var cadbury_strickPrice = document.createElement("h4");
    cadbury_strickPrice.textContent = el.strickPrice;
    cadbury_strickPrice.setAttribute("class", "cadbury_item_strickPrice");

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
    var cadbury_cbox4 = document.createElement("div");

    var cadbury_button = document.createElement("button");
    cadbury_button.textContent = "ADD TO CART";

    cadbury_button.addEventListener("click", (e) => {
        e.preventDefault();
        let obj = {
            image: el.image,
            description: el.description,
            price: el.price,
            strickPrice: el.strickPrice
        }
        arr.push(obj);
        localStorage.setItem("addToCart data", JSON.stringify(arr));
        cadbury_button.innerText = "GO TO CART";
        cadbury_button.style.backgroundColor = "green";
        cadbury_button.style.color = "white";
    });

    // append all 
    cadbury_cbox1.append(cadbury_image);
    cadbury_cbox2.append(cadbury_description);
    cadbury_cbox3.append(cadbury_price, cadbury_strickPrice);
    cadbury_cbox4.append(cadbury_button);

    cadbury_pbox.append(cadbury_cbox1, cadbury_cbox2, cadbury_cbox3,rating, cadbury_cbox4);

    container.append(cadbury_pbox);
});