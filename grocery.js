var container = document.getElementById("grocery_container");

// grocery data 
var data = [
    {
    image:
    "https://static-assets-prod.dhani.com/pharmacy/images/product-images/1GPBALM1/1-20220506193010599266-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    description: "Gladful Almondy Cookies 150 g.",
    price: "₹ 260 ",
    strickPrice: "₹ 300 "
    },


    {
    image:
    "https://static-assets-prod.dhani.com/pharmacy/images/product-images/1GPBCHO1/1-20220506213018638293-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    description: "Gladful Chocolatey  Cookies 150 g",
    price: "₹ 260 ",
    strickPrice: "₹ 300 "
    },


    {
    image:
    "https://static-assets-prod.dhani.com/pharmacy/images/product-images/1GPBCHO2/1-20220506213019762429-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",

    description: "Gladful Chocolatey Protein Cookies 150 g Pack of 2",
    price: "₹ 450 ",
    strickPrice: "₹ 600 "
    },

    {
    image:                            
    "https://static-assets-prod.dhani.com/pharmacy/images/product-images/1GPBIND2/1-20220506213021890595-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    description: "Gladful Indian Masala Biscuit 150g Pack of 2",
    price: "₹ 399 ",
    strickPrice: "₹ 600 "
    },


    {
    image:
    "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643202992738_Red_Label_Tea_-_Natural_Care_1_Kg.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    description: "Red Label Tea - Natural Care 1 Kg",
    price: "₹ 590 ",
    strickPrice: "₹ 590 "
    },


    {
    image:
    "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643262477770_40158060_3-keya-himalayan-kala-namak.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",

    description: "Keya Salt - Black, Himalayan 200 G",
    price: "₹ 45 ",
    strickPrice: "₹ 45 "
    },

    {
    image:
    "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643261624639_Knorr_Italian_Mushroom_Soup_48G.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    description: "Knorr International  Mushroom Soup 48G",
    price: "₹ 42 ",
    strickPrice: "₹ 65 "
    },


    {
    image:
    "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Chocochip_400/1-20220510153859403511-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    description: "Frozit Chocochip Cookies 400gm Buy 1, Get 1 Free",
    price: "₹ 190 ",
    strickPrice: "₹ 200 "
    },


    {
    image:
    "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171049329/1-20220412000315527947-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    description: "Hersheys Chocolate Syrup 200 G",
    price: "₹ 84",
    strickPrice: "₹ 95 "
    },


    {
    image:
    "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643203096511_Red_Label_Tea_-_Natural_Care_100_G.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    description: "Brooke Bond Red Label Tea Natural Care 100Gm",
    price: "₹ 65 ",
    strickPrice: "₹ 65 "
    },


    {
    image:
    "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643261624639_Knorr_Italian_Mushroom_Soup_48G.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    description: "Knorr International Premium Italian Mushroom Soup 48G",
    price: "₹ 42 ",
    strickPrice: "₹ 65 "
    },


    {
    image:
    "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643202829320_40125386_5-tata-sampann-unpolished-kabuli-chana.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    description: "Tata Sampann Unpolished Kabuli Chana 1 Kg",
    price: "₹ 184 ",
    strickPrice: "₹ 200 "
    },



    // {
    // image:
    // "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643184859530_40015847-3_9-dr-oetker-funfoods-green-chilli-sauce.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    // description: "Dr. Oetker Funfoods Green Chilli Sauce 200 G",
    // price: "₹ 53 ",
    // strickPrice: "₹ 55"
    // },


    // {
    // image:
    // "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643787960155_61rJkC01yPL._SL1100_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    // description: "Thums Up Pop Can cold drink -180Ml",
    // price: "₹ 105 ",
    // strickPrice: "₹ 150 "
    // },


    // {
    // image:
    // "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645609199486_71gVmaKpxUL._SL1500__(1).jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    // description: "Weikfield Cornflour -5Kg Bag",
    // price: "₹ 398 ",
    // strickPrice: "₹ 450 "
    // },


    // {
    // image:
    // "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1646300366412_71rkvuk2y7L._SL1500_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    // description:"Weikfield Cornflour -5Kg Bag",
    // price: "₹ 132 ",
    // strickPrice: "₹ 132 "
    // },


    // {
    // image:
    // "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643460690637_124871_12-britannia-cheezza-cheese-block-for-pizza.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    // description: "BRITANNIA CHEEZZA FOR PIZZA 200GM",
    // price: "₹ 132 ",
    // strickPrice: "₹ 150 "
    // },


    // {
    // image:
    // "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1644239946558_Rage_Coffee_-_Original_Blend_-_Premium_Arabica_Instant_Coffee-_50_GM.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    // description: "Rage Coffee Arabica Instant Coffee- 50 GM",
    // price: "₹ 239 ",
    // strickPrice: "₹ 299 "
    // },


    // {
    // image:
    // "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643206173176_LIPTON-GREEN-PURELIGHT-25S-TB-32.5GV-INHU500152-Pic1.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    // description: "Lipton Green Pure&Light 25S Tb 32.5G[V]",
    // price: "₹ 158 ",
    // strickPrice: "₹ 165 "
    // },


    // {
    // image:
    // "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1644240130940_Rage_Coffee_Creme_Caramel_Flavour_-_Premium_Arabica_Instant_Coffee-_50_GM.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    // description: "Rage Coffee with Natural Vitamin-50Gm Glass Bottle",
    // price: "₹ 279 ",
    // strickPrice: "₹ 349 "
    // },


    // {
    // image:
    // "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1647068939324_Capture.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    // description: "Dabur Capsico Red Peppe 60gm",
    // price: "₹ 63 ",
    // strickPrice: "₹ 65 "
    // },

    // {
    // image:
    // "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1652949021006_rage-coffee-premium-100-ethiopian-arabica-32-5-gms-250x250.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    // description: "Rage Coffee shots 3.25Gm Each (10 Sachets)",
    // price: "₹ 199 ",
    // strickPrice: "₹ 249 "
    // },
    
    // {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/1GPBALM1/1-20220506193010599266-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Gladful Almondy Cookies 150 g.",
    //     price: "₹ 260 ",
    //     strickPrice: "₹ 300 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/1GPBCHO1/1-20220506213018638293-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Gladful Chocolatey  Cookies 150 g",
    //     price: "₹ 260 ",
    //     strickPrice: "₹ 300 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/1GPBCHO2/1-20220506213019762429-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    
    //     description: "Gladful Chocolatey Protein Cookies 150 g Pack of 2",
    //     price: "₹ 450 ",
    //     strickPrice: "₹ 600 "
    //     },
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/1GPBIND2/1-20220506213021890595-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Gladful Indian Masala Biscuit 150g Pack of 2",
    //     price: "₹ 399 ",
    //     strickPrice: "₹ 600 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643202992738_Red_Label_Tea_-_Natural_Care_1_Kg.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Red Label Tea - Natural Care 1 Kg",
    //     price: "₹ 590 ",
    //     strickPrice: "₹ 590 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643262477770_40158060_3-keya-himalayan-kala-namak.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    
    //     description: "Keya Salt - Black, Himalayan 200 G",
    //     price: "₹ 45 ",
    //     strickPrice: "₹ 45 "
    //     },
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643261624639_Knorr_Italian_Mushroom_Soup_48G.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Knorr International  Mushroom Soup 48G",
    //     price: "₹ 42 ",
    //     strickPrice: "₹ 65 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Chocochip_400/1-20220510153859403511-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Frozit Chocochip Cookies 400gm Buy 1, Get 1 Free",
    //     price: "₹ 190 ",
    //     strickPrice: "₹ 200 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171049329/1-20220412000315527947-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Hersheys Chocolate Syrup 200 G",
    //     price: "₹ 84",
    //     strickPrice: "₹ 95 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643203096511_Red_Label_Tea_-_Natural_Care_100_G.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Brooke Bond Red Label Tea Natural Care 100Gm",
    //     price: "₹ 65 ",
    //     strickPrice: "₹ 65 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643261624639_Knorr_Italian_Mushroom_Soup_48G.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Knorr International Premium Italian Mushroom Soup 48G",
    //     price: "₹ 42 ",
    //     strickPrice: "₹ 65 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643202829320_40125386_5-tata-sampann-unpolished-kabuli-chana.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Tata Sampann Unpolished Kabuli Chana 1 Kg",
    //     price: "₹ 184 ",
    //     strickPrice: "₹ 200 "
    //     },
    
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643184859530_40015847-3_9-dr-oetker-funfoods-green-chilli-sauce.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Dr. Oetker Funfoods Green Chilli Sauce 200 G",
    //     price: "₹ 53 ",
    //     strickPrice: "₹ 55"
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643787960155_61rJkC01yPL._SL1100_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Thums Up Pop Can cold drink -180Ml",
    //     price: "₹ 105 ",
    //     strickPrice: "₹ 150 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645609199486_71gVmaKpxUL._SL1500__(1).jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Weikfield Cornflour -5Kg Bag",
    //     price: "₹ 398 ",
    //     strickPrice: "₹ 450 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1646300366412_71rkvuk2y7L._SL1500_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description:"Weikfield Cornflour -5Kg Bag",
    //     price: "₹ 132 ",
    //     strickPrice: "₹ 132 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643460690637_124871_12-britannia-cheezza-cheese-block-for-pizza.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "BRITANNIA CHEEZZA FOR PIZZA 200GM",
    //     price: "₹ 132 ",
    //     strickPrice: "₹ 150 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1644239946558_Rage_Coffee_-_Original_Blend_-_Premium_Arabica_Instant_Coffee-_50_GM.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Rage Coffee Arabica Instant Coffee- 50 GM",
    //     price: "₹ 239 ",
    //     strickPrice: "₹ 299 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1643206173176_LIPTON-GREEN-PURELIGHT-25S-TB-32.5GV-INHU500152-Pic1.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Lipton Green Pure&Light 25S Tb 32.5G[V]",
    //     price: "₹ 158 ",
    //     strickPrice: "₹ 165 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1644240130940_Rage_Coffee_Creme_Caramel_Flavour_-_Premium_Arabica_Instant_Coffee-_50_GM.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Rage Coffee with Natural Vitamin-50Gm Glass Bottle",
    //     price: "₹ 279 ",
    //     strickPrice: "₹ 349 "
    //     },
    
    
    //     {
    //     image:
    //     "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1647068939324_Capture.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
    //     description: "Dabur Capsico Red Peppe 60gm",
    //     price: "₹ 63 ",
    //     strickPrice: "₹ 65 "
    //     },
    
        {
        image:
        "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1652949021006_rage-coffee-premium-100-ethiopian-arabica-32-5-gms-250x250.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Rage Coffee shots 3.25Gm Each (10 Sachets)",
        price: "₹ 199 ",
        strickPrice: "₹ 249 "
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

// sort start
// var sort = document.querySelector("#sort");
// let sortFun = () => {
//     if(sort.value === "Low To High") {
//         // console.log("Low To High");
//         data.sort((a, b) => {
//             const first = a.price.split(" ");
//             const second = b.price.split(" ");
//             let x = Number(first[1]);
//             let y = Number(second[1]);

//             return x - y;
//         });
//         // location.reload();
//         console.log(data);
        
//     }

//     if(sort.value === "High To Low") {
//         // console.log("High To Low");
//     }
// };

// sort start

data.map(function(el){

    var grocery_pbox = document.createElement("div");

    // image.
    var grocery_cbox1 = document.createElement("div");

    var grocery_image = document.createElement("img");
    grocery_image.setAttribute("src", el.image);
    // grocery_image.setAttribute("class", "grocery_item_images");

    // description
    var grocery_cbox2 = document.createElement("div");

    var grocery_description = document.createElement("p");
    grocery_description.textContent = el.description;

    // price & strickPrice
    var grocery_cbox3 = document.createElement("div");
    
    // price
    var grocery_price = document.createElement("h2");
    grocery_price.textContent = el.price;
    
    // strickPrice
    var grocery_strickPrice = document.createElement("h4");
    grocery_strickPrice.textContent = el.strickPrice;
    grocery_strickPrice.setAttribute("class", "grocery_item_strickPrice");

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
    var grocery_cbox4 = document.createElement("div");

    var grocery_button = document.createElement("button");
    grocery_button.textContent = "ADD TO CART";

    grocery_button.addEventListener("click", (e) => {
        e.preventDefault();
        let obj = {
            image: el.image,
            description: el.description,
            price: el.price,
            strickPrice: el.strickPrice
        }
        arr.push(obj);
        localStorage.setItem("addToCart data", JSON.stringify(arr));
        grocery_button.innerText = "GO TO CART";
        grocery_button.style.backgroundColor = "green";
        grocery_button.style.color = "white";
    });

    // append with each other
    grocery_cbox1.append(grocery_image);
    grocery_cbox2.append(grocery_description);
    grocery_cbox3.append(grocery_price, grocery_strickPrice);
    grocery_cbox4.append(grocery_button);

    grocery_pbox.append(grocery_cbox1, grocery_cbox2, grocery_cbox3, rating, grocery_cbox4);

    container.append(grocery_pbox);
});