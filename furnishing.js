var container = document.getElementById("furnishing_container");

var data = [
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/HC04/1-20220422194455949393-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Hiyanshi creation 1 bed sheet with 1 Pillow cover",
        price: "₹ 2299 ",
        strickPrice: "₹ 299"
    },
    
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Diwan-set-10/1-20220429131043218660-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Homdazal Multi color polyester Diwan set",
        price: "₹ 599 ",
        strickPrice: "₹ 999 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Diwan-set-2/1-20220429130943072385-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Homdazal Multi color polyester Diwan set ",
        price: "₹ 599 ",
        strickPrice: "₹ 999 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Diwan-set-4/1-20220429130439407452-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Homdazal Multi color polyester Diwan set",
        price: "₹ 599 ",
        strickPrice: "₹ 999 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/RDFC-09/1-20220426101359849322-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Floral Print Yellow Color Quilted Fridge Cover",
        price: "₹ 729 ",
        strickPrice: "₹ 1099 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/HC04/1-20220422194455949393-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Hiyanshi creation 1 bed sheet with 1 Pillow cover",
        price: "₹ 229 ",
        strickPrice: "₹ 299 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Diwan-set-6/1-20220429131221357718-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Homdazal Multi color polyester Diwan set",
        price: "₹ 599 ",
        strickPrice: "₹ 999 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Diwan-set-7/1-20220429130352438364-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Homdazal Multi color polyester Diwan set",
        price: "₹ 599 ",
        strickPrice: "₹ 999 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Diwan_set_1/1-20220429130736724386-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Homdazal Multi color polyester Diwan set",
        price: "₹ 599 ",
        strickPrice: "₹ 999 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Diwan-set-11/1-20220429130609995890-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Homdazal Multi color polyester Diwan set",
        price: "₹ 599 ",
        strickPrice: "₹ 999 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/ET01_6DWN_403A/1-20220429183649255752-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Salona Bichona Brown 1 Diwan Sheet2",
        price: "₹ 699 ",
        strickPrice: "₹ 1149 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/ET01_6DWN_415B/1-20220429183019295243-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Bichona Brown 1 Diwan Sheet2 Bolster covers",
        price: "₹ 699 ",
        strickPrice: "₹ 1149 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/GM01_8DWN_678A/1-20220429183702967937-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Salona Bichona Pink 1 covers 3 Cushion",
        price: "₹ 1199 ",
        strickPrice: "₹ 1649 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/GM01_8DWN_720A/1-20220429183014783091-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Diwan Sheet2 covers 3 Cushion Covers Size",
        price: "₹ 1199 ",
        strickPrice: "₹ 1649 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/JP01_6DWN_503A/1-20220429183813902068-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Bichona Green 1 Diwan Sheet2 Bolster",
        price: "₹ 699 ",
        strickPrice: "₹ 1149 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/JP01_6DWN_505A/1-20220429183009595749-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Diwan Sheet2 Bolster covers 3 Cushion Size",
        price: "₹ 699 ",
        strickPrice: "₹ 1149 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/BLUE_PATTI_MAT_01/1-20220430180228643569-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Fridge cover for Top 3 Pcs mats Set of 6 Blue",
        price: "₹ 249 ",
        strickPrice: "₹ 449 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/FC-_BLUE_PATI/1-20220430180621445583-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Decorative 1 Fridge Top cover Fridge Top Cover Blue",
        price: "₹ 179",
        strickPrice: "₹ 249 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MAROON_PATTI_MAT_01/1-20220430180610549437-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Fridge cover Top with 2 Pcs mats Set of 6 Maroon",
        price: "₹ 249 ",
        strickPrice: "₹ 449 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/WH_MAROON_PATI_MAT_11/1-20220430180054155096-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "cover Top 3 Pcs Fridge Mats Set of 4 Maroon",
        price: "₹ 199 ",
        strickPrice: "₹ 349 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/M_BLUE_MAT_06/1-20220430180631276793-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "3 Pcs fridge mats Set of 6 Blue",
        price: "₹ 249",
        strickPrice: "₹ 449 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/M_BROWN_MAT_06/1-20220430180633918715-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "cover Top 3 Pcs Fridge Mats Set of 4 Brown",
        price: "₹ 195 ",
        strickPrice: "₹ 349 "
    },
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
    var furnishing_pbox = document.createElement("div");

    // image
    var furnishing_cbox1 = document.createElement("div");

    var furnishing_image = document.createElement("img");
    furnishing_image.setAttribute("src", el.image);
    // furnishing_image.setAttribute("class", "furnishing_item_images");

    // description
    var furnishing_cbox2 = document.createElement("div");

    var furnishing_description = document.createElement("p");
    furnishing_description.textContent = el.description;

    // price & strickPrice
    var furnishing_cbox3 = document.createElement("div");
    
    // price
    var furnishing_price = document.createElement("h2");
    furnishing_price.textContent = el.price;

    // strickPrice
    var furnishing_strickPrice = document.createElement("h4");
    furnishing_strickPrice.textContent = el.strickPrice;
    furnishing_strickPrice.setAttribute("class", "furnishing_item_strickPrice");


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
    var furnishing_cbox4 = document.createElement("div");

    var furnishing_button = document.createElement("button");
    furnishing_button.textContent = "ADD TO CART";

    furnishing_button.addEventListener("click", (e) => {
        e.preventDefault();
        let obj = {
            image: el.image,
            description: el.description,
            price: el.price,
            strickPrice: el.strickPrice
        }
        arr.push(obj);
        localStorage.setItem("addToCart data", JSON.stringify(arr));
        furnishing_button.innerText = "GO TO CART";
        furnishing_button.style.backgroundColor = "green";
        furnishing_button.style.color = "white";
    });

    // append all 
    furnishing_cbox1.append(furnishing_image);
    furnishing_cbox2.append(furnishing_description);
    furnishing_cbox3.append(furnishing_price, furnishing_strickPrice);
    furnishing_cbox4.append(furnishing_button);

    furnishing_pbox.append(furnishing_cbox1, furnishing_cbox2, furnishing_cbox3, rating, furnishing_cbox4);

    container.append(furnishing_pbox);
});