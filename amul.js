var container = document.getElementById("amul_container");

var data = [
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643186880027_Amul_Cow_Ghee_1_L.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Cow Ghee 1 L",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643187083820_Amul_Cow_Ghee_5_L.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Cow Ghee 5",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643187276639_Amul_Pure_Ghee_1_L.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Pure Ghee 1 L",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643279764916_Amul_kool_Milk_Shake_-_Badam_200_Ml.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul kool Milk Shake - Badam 200 Ml",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643629221134_download_(90).jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul kool Milk Shake - Badam 200 Ml",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643629537648_images_(6).jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Cashew Nankhatai -50Gm",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643631390558_download_(92).jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Chocolate Syrup -250Gm ",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643632051321_download_(94).jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: " Amul Chocozoo -250Gm",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643632380421_20005992_2-amul-kool-cafe-milk-coffee.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Kool Café -200Ml Can ",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643632442567_20005989_2-amul-kool-cafe.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Kool Cafe -200Ml Pet Bottle ",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643632495902_40164808_1-amul-kool-cafe-cinnamon.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "mul Kool Café Cinnamon -200Ml Can",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },
    
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643750055242_Amul_Kool_Koko_180Ml_Pet_Btl_f.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Kool Koko -180Ml Pet Bottle",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643750576575_Amul_Kool_Man_Ms_200Ml_Can_f.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Kool Man Ms -200Ml Can",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643750967563_Amul_Kool_Str_Ms_200Ml_Can_f.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Kool Str Ms -200Ml Can",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643751068310_Amul_Kool_Sugarfree_Elaichi_180Ml_Pet_f.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Kool Sugarfree Elaichi -180Ml Pet",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643631093489_Amul_Milk_Rusk_-30Gm.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Butter Toast Milk -100Gm",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643788997209_228899_3-amul-spray-infant-milk-foodsubstitute_(1).jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amulspray 100G Pouch",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643197985374_104609_2-amul-processed-cheese.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Processed Cheese 400 G",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643189376018_Amul_Cheese_-_Slices_750_G.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "mul Cheese - Slices 750  ",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1647943010469_454545.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Creami - Cheese Spread 180 G ",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643189971238_40069116_2-amul-unsalted-butter.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Unsalted Butter 100 G",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643188382383_Amul_Butter_-_Pasteurised_200_G.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "this is a amul powder ",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643186880027_Amul_Cow_Ghee_1_L.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Cow Ghee 1 L",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643187083820_Amul_Cow_Ghee_5_L.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Amul Cow Ghee 5",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
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
    var amul_pbox = document.createElement("div");

    // image
    var amul_cbox1 = document.createElement("div");

    var amul_image = document.createElement("img");
    amul_image.setAttribute("src", el.image);
    // amul_image.setAttribute("class", "amul_item_images");

    // description
    var amul_cbox2 = document.createElement("div");

    var amul_description = document.createElement("p");
    amul_description.textContent = el.description;

    // price & strickPrice
    var amul_cbox3 = document.createElement("div");
    
    // price
    var amul_price = document.createElement("h2");
    amul_price.textContent = el.price;

    // strickPrice
    var amul_strickPrice = document.createElement("h4");
    amul_strickPrice.textContent = el.strickPrice;
    amul_strickPrice.setAttribute("class", "amul_item_strickPrice");

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
    var amul_cbox4 = document.createElement("div");

    var amul_button = document.createElement("button");
    amul_button.textContent = "ADD TO CART";

    amul_button.addEventListener("click", (e) => {
        e.preventDefault();
        let obj = {
            image: el.image,
            description: el.description,
            price: el.price,
            strickPrice: el.strickPrice
        }
        arr.push(obj);
        localStorage.setItem("addToCart data", JSON.stringify(arr));
        amul_button.innerText = "GO TO CART";
        amul_button.style.backgroundColor = "green";
        amul_button.style.color = "white";
    });


    // append all 
    amul_cbox1.append(amul_image);
    amul_cbox2.append(amul_description);
    amul_cbox3.append(amul_price, amul_strickPrice);
    amul_cbox4.append(amul_button);

    amul_pbox.append(amul_cbox1, amul_cbox2, amul_cbox3,rating, amul_cbox4);

    container.append(amul_pbox);
});