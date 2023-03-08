var container = document.getElementById("electronic_container");

var data = [
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/UN_Pyramid_Stand/1-20220510203016212762-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "UnV Multicolor Pyramid Mobile Stand",
        price: "₹ 77 ",
        strickPrice: "₹ 122 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/HK_FS_01/1-20220519200123136585-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dvaio PUBG Finger Sleeve Thumb Grip Sweatproof",
        price: "₹ 122 ",
        strickPrice:"₹ 353 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/HK_FS_03/1-20220519200129857324-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dvaio PUBG Finger Sleeve Thumb Grip Sweatproof Smooth",
        price: "₹ 166",
        strickPrice:"₹ 233 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Z1_GRY/1-20220709153027736996-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "I Kall Z1 4GB 32GB Memory With 5.45",
        price: "₹ 344 ",
        strickPrice: "₹ 455 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Z3_GRN/1-20220709153016911700-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "I Kall Z3 4GB 32GB Memory With 6 Inch Screen Android 10.0",
        price: "₹ 344 ",
        strickPrice: "₹ 2222 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/EcoTelE14/1-20220707120041541504-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "I KALL Z8 Smartphone 3GB 16GB, Blue",
        price: "₹ 333 ",
        strickPrice: "₹ 445 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/BLACKAK47/1-20220414130005826035-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Otos AK47_100% Best Quality Earphone Wired Headset (Black, In the Ear)",
        price: "₹ 122",
        strickPrice: "₹ 543 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/HBNS_M6orM5_Strap_Mltclr_010/1-20220527143810235433-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "HBNS Strap for Fitness Band M3 M4 Smart Bracelet Pack ",
        price: "₹ 233 ",
        strickPrice: "₹ 433 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/15Cgreen/1-20220711160344944638-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Vivo Y21G Smart Phone, Midnight Blue",
        price: "₹ 5554 ",
        strickPrice: "₹ 33223 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/OGheadphones/1-20220414130012021140-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Otos Earphones for NOTE 4 5 5 PRO 6 6PRO 7/8/8pro & All Smartphones Wired",
        price: "₹ 233 ",
        strickPrice: "₹ 444 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/OPPOA16E4gb64gbblue/1-20220711170031903169-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "SAMSUNG Galaxy SmartPhone A03 4GB 64GB Blue",
        price: "₹ 333 ",
        strickPrice: "₹ 2323 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/OPPOA16E4gb64gbblack/1-20220711170016695418-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "OPPO A16E SmartPhone 4GB 64GB Black",
        price: "₹ 333 ",
        strickPrice: "₹ 344 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/UnV_F3/1-20220607190922429448-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Unv Mobile Screen Expander And 3D Mobile Video Screen Magnifier ",
        price: "₹ 222 ",
        strickPrice: "₹ 434 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/RE_NA_BLUE_13/1-20220713183030220878-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Realme Narzo 50 Smartphone with Memory 4GB 64GB, Blue",
        price: "₹ 342 ",
        strickPrice: "₹ 888 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/K26_NEW_GRN_/1-20220708160033856151-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "I KALL K26 Keypad Multimedia Mobile, Green, 1.8 Inch, Dual Sim",
        price: "₹ 434 ",
        strickPrice: "₹ 122 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/EC_E16_FP_01/1-20220713180016889497-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Grabo MICRO Feature Phone, Blue",
        price: "₹ 323 ",
        strickPrice: "₹ 544 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/A10/1-20220421150254551861-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Avya Silver Bluetooth Wireless Mini Speaker",
        price: "₹ 342 ",
        strickPrice: "₹ 987 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/T_Nokia105DS_Assorted/1-20220721170136097084-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Nokia 110 DS 2G, Color as per Availability",
        price: "₹ 433 ",
        strickPrice: "₹ 1212 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/T_KechaodaK10_Assorted/1-20220721170036119731-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "TweakyMod Printed Hard Case Without Fear For Samsung J4 Core",
        price: "₹ 249 ",
        strickPrice: "₹ 1333 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/R20W/1-20220428191346916551-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dvaio R20 In the Ear Wired Earphone white",
        price: "₹ 233 ",
        strickPrice: "₹ 655 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Z3_GRN/1-20220709153016911700-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "I Kall Z3 4GB 32GB Memory With 6 Inch Screen Android 10.0",
        price: "₹ 344 ",
        strickPrice: "₹ 2222 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/EcoTelE14/1-20220707120041541504-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "I KALL Z8 Smartphone 3GB 16GB, Blue",
        price: "₹ 333 ",
        strickPrice: "₹ 445 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/BLACKAK47/1-20220414130005826035-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Otos AK47_100% Best Quality Earphone Wired Headset (Black, In the Ear)",
        price: "₹ 122",
        strickPrice: "₹ 543 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/RE_NA_BLUE_13/1-20220713183030220878-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Realme Narzo 50 Smartphone with Memory 4GB 64GB, Blue",
        price: "₹ 342 ",
        strickPrice: "₹ 888 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/K26_NEW_GRN_/1-20220708160033856151-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "I KALL K26 Keypad Multimedia Mobile, Green, 1.8 Inch, Dual Sim",
        price: "₹ 434 ",
        strickPrice: "₹ 122 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/EC_E16_FP_01/1-20220713180016889497-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Grabo MICRO Feature Phone, Blue",
        price: "₹ 323 ",
        strickPrice: "₹ 544 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/A10/1-20220421150254551861-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Avya Silver Bluetooth Wireless Mini Speaker",
        price: "₹ 342 ",
        strickPrice: "₹ 987 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/T_Nokia105DS_Assorted/1-20220721170136097084-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Nokia 110 DS 2G, Color as per Availability",
        price: "₹ 433 ",
        strickPrice: "₹ 1212 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/T_KechaodaK10_Assorted/1-20220721170036119731-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "TweakyMod Printed Hard Case Without Fear For Samsung J4 Core",
        price: "₹ 249 ",
        strickPrice: "₹ 1333 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/UN_Pyramid_Stand/1-20220510203016212762-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "UnV Multicolor Pyramid Mobile Stand",
        price: "₹ 77 ",
        strickPrice: "₹ 122 "
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
    var electronic_pbox = document.createElement("div");

    // image
    var electronic_cbox1 = document.createElement("div");

    var electronic_image = document.createElement("img");
    electronic_image.setAttribute("src", el.image);
    // electronic_image.setAttribute("class", "electronic_item_images");

    // description
    var electronic_cbox2 = document.createElement("div");

    var electronic_description = document.createElement("p");
    electronic_description.textContent = el.description;

    // price & strickPrice
    var electronic_cbox3 = document.createElement("div");
    
    // price
    var electronic_price = document.createElement("h2");
    electronic_price.textContent = el.price;

    // strickPrice
    var electronic_strickPrice = document.createElement("h4");
    electronic_strickPrice.textContent = el.strickPrice;
    electronic_strickPrice.setAttribute("class", "electronic_item_strickPrice");

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
    var electronic_cbox4 = document.createElement("div");

    var electronic_button = document.createElement("button");
    electronic_button.textContent = "ADD TO CART";

    electronic_button.addEventListener("click", (e) => {
        e.preventDefault();
        let obj = {
            image: el.image,
            description: el.description,
            price: el.price,
            strickPrice: el.strickPrice
        }
        arr.push(obj);
        localStorage.setItem("addToCart data", JSON.stringify(arr));
        electronic_button.innerText = "GO TO CART";
        electronic_button.style.backgroundColor = "green";
        electronic_button.style.color = "white";
    });

    // append all 
    electronic_cbox1.append(electronic_image);
    electronic_cbox2.append(electronic_description);
    electronic_cbox3.append(electronic_price, electronic_strickPrice);
    electronic_cbox4.append(electronic_button);

    electronic_pbox.append(electronic_cbox1, electronic_cbox2, electronic_cbox3, rating, electronic_cbox4);

    container.append(electronic_pbox);
});