var container = document.getElementById("nivea_container");

var data = [
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171042403/1-20210920190608018049-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Nivea Whitening Body Lotion Cool Sensation Spf 15",
        price: "₹ 449",
        strickPrice: "₹ 499"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639554477202_Nivea_Fresh_Natural_Roll_On-50Ml.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Nivea Fresh Natural Deodorant Roll On-50Ml",
        price: "₹ 187",
        strickPrice: "₹ 199"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639223445542_2e5128e8904256008020-1.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Nivea Lemon & Oil Shower Gel 125Ml",
        price: "₹ 125",
        strickPrice: "₹ 130"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639222845481_41Mw3lvPfrL.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Nivea Men Dark Spot Reduction Face Wash 50Gm",
        price: "₹ 117",
        strickPrice: "₹ 125"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639235411877_nivea-men-sensitive-shaving-foam-200-ml-0-20210226.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Nivea Men Sensitive Shaving Foam -200 ml",
        price: "₹ 278",
        strickPrice: "₹ 299"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639289825302_51An4LpVrWL._SL1000_.jpg?tr=f-webp,q-60",
        description: "Nivea Rose & Argan Oil In Lotion for Dry Skin- 200 ml",
        price: "₹ 252",
        strickPrice: "₹ 275"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639299911056_nivea-fresh-active-original-48-hours-deodorant-500x500.jpg?tr=f-webp,q-60",
        description: "Nivea Men Fresh Active Original Deodorant -150 ml",
        price: "₹ 225",
        strickPrice: "₹ 249"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171047243/1-20220412001854936249-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Nivea Strawberry Shine Carrying Lip Balm with Naturals Oils",
        price: "₹ 187",
        strickPrice: "₹ 199"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639303222574_61YzszyeeHL._SL1100_.jpg?tr=f-webp,q-60",
        description: "Nivea Lip Balm, Watermelon Shine, 4.8Gm",
        price: "₹ 187",
        strickPrice: "₹ 199"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639304264145_81ND7J4Gk9L._SL1500_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "NIVEA Men Body Wash, Energy with Mint Extracts, Shower Gel - 250 ml",
        price: "₹ 169",
        strickPrice: "₹ 199"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1642675024828_nivea_menCool_kick_long_lasting_deodorent_150_ml.jpg?tr=f-webp,q-60",
        description: "nivea menCool kick long lasting deodorent 150 ml",
        price: "₹ 192",
        strickPrice: "₹ 210"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1642227024123_61c4fec4005900314321_1.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Nivea Berry Shine Lipcare Balm (24H Melt In Moisture)-4.8Gm",
        price: "₹ 173",
        strickPrice: "₹ 185"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170829863/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Nivea Smooth Milk Body Lotion With Shea Butter- 400Ml",
        price: "₹ 399",
        strickPrice: "₹ 425"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170829915/1-20210920191444633165-large.png?tr=f-webp,q-60",
        description: "Nivea Men Moisturiser Creme- 75Ml",
        price: "₹ 188",
        strickPrice: "₹ 199"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639308330007_611lqIg1ECL._SL1100_.jpg?tr=f-webp,q-60",
        description: "Nivea Men Dark Spot Reduction Creme- 150Ml",
        price: "₹ 328",
        strickPrice: "₹ 349"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639291720593_518VbQs57DL._SL1000_.jpg?tr=f-webp,q-60",
        description: "Nivea Men After Shave Lotion- 100Ml-Sensitive Cooling",
        price: "₹ 265",
        strickPrice: "₹ 269"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639230953709_nivea-men-sensitive-shaving-gel-200-ml-0-20210322_(1).jpg?tr=f-webp,q-60",
        description: "Nivea Men Shaving Gel- 200Ml-Sensitive",
        price: "₹ 369",
        strickPrice: "₹ 399"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639487570307_71oTLufZAOL._SL1500_.jpg?tr=f-webp,q-60",
        description: "Nivea Whitening UV Protect Even Tone Body Lotion- 400 ml",
        price: "₹ 418",
        strickPrice: "₹ 425"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639300029930_71oFgXrPNYL._SL1500_.jpg?tr=f-webp,q-60",
        description: "Nivea Men Deo Fresh Ocean - 150ml",
        price: "₹ 206",
        strickPrice: "₹ 225"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170682679/1-20210920190459999910-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Nivea Men Dark Spot Reduction Face Wash- 100Gm-10X Whitening",
        price: "₹ 202",
        strickPrice: "₹ 225"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639308056677_40010244_7-nivea-men-all-in-1-charcoal-face-wash-detoxify-refresh-skin-with-10x-vitamin-c-effect-for-all-skin-types.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Nivea Men All-In-One Oil Control Face Wash- 50Gm",
        price: "₹ 125",
        strickPrice: "₹ 125"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170859634/1-20210920184941607949-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Nivea Men Moisturiser Creme- 30Ml",
        price: "₹ 70",
        strickPrice: "₹ 99"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639308837599_71kII-TQFBL._SL1500__(1).jpg?tr=f-webp,q-60",
        description: "Nivea Milk Delights Face Wash- 50Ml-Dry Skin-Moisturizing Honey",
        price: "₹ 99",
        strickPrice: "₹ 125"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1641897583071_Nivea_Multi-Purpose_Creme-_100ml.jpg?tr=f-webp,q-60",
        description: "Nivea Multi-Purpose Creme- 100Ml",
        price: "₹ 184",
        strickPrice: "₹ 199"
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
    var nivea_pbox = document.createElement("div");

    // image
    var nivea_cbox1 = document.createElement("div");

    var nivea_image = document.createElement("img");
    nivea_image.setAttribute("src", el.image);
    // nivea_image.setAttribute("class", "nivea_item_images");

    // description
    var nivea_cbox2 = document.createElement("div");

    var nivea_description = document.createElement("p");
    nivea_description.textContent = el.description;

    // price & strickPrice
    var nivea_cbox3 = document.createElement("div");
    
    // price
    var nivea_price = document.createElement("h2");
    nivea_price.textContent = el.price;

    // strickPrice
    var nivea_strickPrice = document.createElement("h4");
    nivea_strickPrice.textContent = el.strickPrice;
    nivea_strickPrice.setAttribute("class", "nivea_item_strickPrice");

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
    var nivea_cbox4 = document.createElement("div");

    var nivea_button = document.createElement("button");
    nivea_button.textContent = "ADD TO CART";

    nivea_button.addEventListener("click", (e) => {
        e.preventDefault();
        let obj = {
            image: el.image,
            description: el.description,
            price: el.price,
            strickPrice: el.strickPrice
        }
        arr.push(obj);
        localStorage.setItem("addToCart data", JSON.stringify(arr));
        nivea_button.innerText = "GO TO CART";
        nivea_button.style.backgroundColor = "green";
        nivea_button.style.color = "white";
    });

    // append all 
    nivea_cbox1.append(nivea_image);
    nivea_cbox2.append(nivea_description);
    nivea_cbox3.append(nivea_price, nivea_strickPrice);
    nivea_cbox4.append(nivea_button);

    nivea_pbox.append(nivea_cbox1, nivea_cbox2, nivea_cbox3,rating, nivea_cbox4);

    container.append(nivea_pbox);
});