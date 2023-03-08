var container = document.getElementById("men_container");


// men data 
var data = [
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Panda_Gold_M/1-20220428190724571641-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Men Mustard Cotton Panda Printed T-shirt",
        price: "₹ 240",
        strickPrice: "₹ 599"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/SH_100_WHITE_9/1-20220505200751786249-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Woakers White Sneakers for Men",
        price: "₹ 546",
        strickPrice: "₹ 3249"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/BMW01/1-20220511150227109769-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Men's Wallets Leather Brown Pocket Wallets",
        price: "₹ 279",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/BRW_WLT01/2-20220511150149815192-large.jpg?tr=f-webp,q-60",
        description: "Men's Wallets Stylish  Leather Pocket Wallets",
        price: "₹ 279",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/LF0022_9/1-20220629153620249437-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Austrich White Synthetic Mojaris",
        price: "₹ 549",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/WK_JOR_YLW_BLU_9/1-20220505200234222904-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Woakers Yellow Sneakers for Men",
        price: "₹ 725",
        strickPrice: "₹ 3249"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MECOM01/1-20220410080022221063-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Timebre Analog Watch for Men, Pack of 4",
        price: "₹ 599",
        strickPrice: "₹ 1699"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/8165_Brown_9/1-20220505190108608427-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Austrich Brown Synthetic Mojaris",
        price: "₹ 549",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/2606Olive_XXL/1-20220505190729256604-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Qure Vintage Men Olive Printed Sweatshirt",
        price: "₹ 399",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/2806Olive_XXL/1-20220505190227345145-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Qure Vintage Men Olive Colorblock Sweatshirt",
        price: "₹ 399",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/TIMBER_GREEN_6/1-20220505200122782349-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Woakers Green Sneakers for Men",
        price: "₹ 529",
        strickPrice: "₹ 3249"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/LF0040_8/1-20220629154107531357-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "RYKO Men Tan Synthetic Loafer",
        price: "₹ 599",
        strickPrice: "₹ 2299"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/BLACK4LINE_T_shirt_XL/1-20220428190947449630-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Royal Fashion Black Lycra Printed T-Shirt",
        price: "₹ 363",
        strickPrice: "₹ 519"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/NAVY4LINE_T_shirt_M/1-20220428190704809922-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Royal Fashion Navy Blue Lycra Printed T-Shirt",
        price: "₹ 412",
        strickPrice: "₹ 589"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/TMGXCOM502/1-20220410080702234325-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Timebre Analog Watch for Men, Pack of 2",
        price: "₹ 314",
        strickPrice: "₹ 349"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/TMGXCOM521/1-20220410081436848854-large.jpg?tr=f-webp,q-60",
        description: "Timebre Analog Watch for Men, Pack of 2",
        price: "₹ 312",
        strickPrice: "₹ 1699"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/BLACK_MEH_DOT_2_XL/1-20220523213058285580-large.jpg?tr=f-webp,q-60",
        description: "Balino London Men Printed Casual Shirt",
        price: "₹ 635",
        strickPrice: "₹ 1799"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/ST17/1-20220410080947477609-large.jpg?tr=f-webp,q-60",
        description: "HRV Analog Multi Watch for Men",
        price: "₹ 299",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/NAVY_BLUE-L/1-20220426220909614343-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Blue Cotton Blend Solid Casual Shirt",
        price: "₹ 349",
        strickPrice: "₹ 1099"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/SPT-11-XXL/1-20220405182411194743-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Polo Collar Polyester Sport T-Shirt",
        price: "₹ 469",
        strickPrice: "₹ 1099"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/ST18/1-20220410081037201201-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "HRV Analog Watch for Men",
        price: "₹ 299",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/8253_Black_9/1-20220504200048357763-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Austrich Black Mesh Sports Shoes",
        price: "₹ 549",
        strickPrice: "₹ 1199"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/8328_Black_9/1-20220504200059277600-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Austrich Black Mesh Sports Shoes",
        price: "₹ 549",
        strickPrice: "₹ 1199"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/8192_White_9/1-20220504200111155581-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Austrich white Mesh Sports Shoes",
        price: "₹ 549",
        strickPrice: "₹ 1199"
    },

    // copy 
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Panda_Gold_M/1-20220428190724571641-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Men Mustard Cotton Panda Printed T-shirt",
        price: "₹ 240",
        strickPrice: "₹ 599"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/SH_100_WHITE_9/1-20220505200751786249-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Woakers White Sneakers for Men",
        price: "₹ 546",
        strickPrice: "₹ 3249"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/BMW01/1-20220511150227109769-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Men's Wallets Leather Brown Pocket Wallets",
        price: "₹ 279",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/BRW_WLT01/2-20220511150149815192-large.jpg?tr=f-webp,q-60",
        description: "Men's Wallets Stylish  Leather Pocket Wallets",
        price: "₹ 279",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/LF0022_9/1-20220629153620249437-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Austrich White Synthetic Mojaris",
        price: "₹ 549",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/WK_JOR_YLW_BLU_9/1-20220505200234222904-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Woakers Yellow Sneakers for Men",
        price: "₹ 725",
        strickPrice: "₹ 3249"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MECOM01/1-20220410080022221063-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Timebre Analog Watch for Men, Pack of 4",
        price: "₹ 599",
        strickPrice: "₹ 1699"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/8165_Brown_9/1-20220505190108608427-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Austrich Brown Synthetic Mojaris",
        price: "₹ 549",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/2606Olive_XXL/1-20220505190729256604-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Qure Vintage Men Olive Printed Sweatshirt",
        price: "₹ 399",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/2806Olive_XXL/1-20220505190227345145-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Qure Vintage Men Olive Colorblock Sweatshirt",
        price: "₹ 399",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/TIMBER_GREEN_6/1-20220505200122782349-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Woakers Green Sneakers for Men",
        price: "₹ 529",
        strickPrice: "₹ 3249"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/LF0040_8/1-20220629154107531357-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "RYKO Men Tan Synthetic Loafer",
        price: "₹ 599",
        strickPrice: "₹ 2299"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/BLACK4LINE_T_shirt_XL/1-20220428190947449630-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Royal Fashion Black Lycra Printed T-Shirt",
        price: "₹ 363",
        strickPrice: "₹ 519"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/NAVY4LINE_T_shirt_M/1-20220428190704809922-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Royal Fashion Navy Blue Lycra Printed T-Shirt",
        price: "₹ 412",
        strickPrice: "₹ 589"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/TMGXCOM502/1-20220410080702234325-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Timebre Analog Watch for Men, Pack of 2",
        price: "₹ 314",
        strickPrice: "₹ 349"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/TMGXCOM521/1-20220410081436848854-large.jpg?tr=f-webp,q-60",
        description: "Timebre Analog Watch for Men, Pack of 2",
        price: "₹ 312",
        strickPrice: "₹ 1699"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/BLACK_MEH_DOT_2_XL/1-20220523213058285580-large.jpg?tr=f-webp,q-60",
        description: "Balino London Men Printed Casual Shirt",
        price: "₹ 635",
        strickPrice: "₹ 1799"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/ST17/1-20220410080947477609-large.jpg?tr=f-webp,q-60",
        description: "HRV Analog Multi Watch for Men",
        price: "₹ 299",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/NAVY_BLUE-L/1-20220426220909614343-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Blue Cotton Blend Solid Casual Shirt",
        price: "₹ 349",
        strickPrice: "₹ 1099"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/SPT-11-XXL/1-20220405182411194743-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Polo Collar Polyester Sport T-Shirt",
        price: "₹ 469",
        strickPrice: "₹ 1099"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/ST18/1-20220410081037201201-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "HRV Analog Watch for Men",
        price: "₹ 299",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/8253_Black_9/1-20220504200048357763-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Austrich Black Mesh Sports Shoes",
        price: "₹ 549",
        strickPrice: "₹ 1199"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/8328_Black_9/1-20220504200059277600-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Austrich Black Mesh Sports Shoes",
        price: "₹ 549",
        strickPrice: "₹ 1199"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/8192_White_9/1-20220504200111155581-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Austrich white Mesh Sports Shoes",
        price: "₹ 549",
        strickPrice: "₹ 1199"
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
    var men_pbox = document.createElement("div");

    // image
    var men_cbox1 = document.createElement("div");

    var men_image = document.createElement("img");
    men_image.setAttribute("src", el.image);
    men_image.setAttribute("class", "men_item_images");

    // description
    var men_cbox2 = document.createElement("div");

    var men_description = document.createElement("p");
    men_description.textContent = el.description;

    // price & strickPrice
    var men_cbox3 = document.createElement("div");
    
    // price
    var men_price = document.createElement("h2");
    men_price.textContent = el.price;

    // strickPrice
    var men_strickPrice = document.createElement("h4");
    men_strickPrice.textContent = el.strickPrice;
    men_strickPrice.setAttribute("class", "men_item_strickPrice");


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
    var men_cbox4 = document.createElement("div");

    var men_button = document.createElement("button");
    men_button.textContent = "ADD TO CART";
    men_button.addEventListener("click", (e) => {
        e.preventDefault();
        let obj = {
            image: el.image,
            description: el.description,
            price: el.price,
            strickPrice: el.strickPrice
        }
        arr.push(obj);
        localStorage.setItem("addToCart data", JSON.stringify(arr));
        men_button.innerText = "GO TO CART";
        men_button.style.backgroundColor = "green";
        men_button.style.color = "white";
    });

    // append all 
    men_cbox1.append(men_image);
    men_cbox2.append(men_description);
    men_cbox3.append(men_price, men_strickPrice);
    men_cbox4.append(men_button);

    men_pbox.append(men_cbox1, men_cbox2, men_cbox3,  rating, men_cbox4,);

    container.append(men_pbox);
});
