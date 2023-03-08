var container = document.getElementById("saree_container");

var data = [
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MYN_367/1-20220428171530683316-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "SVB SareeBaby Pink Polycotton Silk Saree",
        price: "₹ 299 ",
        strickPrice: "₹ 999 "
    },
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/CHIDBLUE/1-20220412000123833717-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Bhakarwadi Blue Floral Print Art Silk Saree with Blouse",
        price: "₹ 354 ",
        strickPrice: "₹ 999 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/RUC-2173/1-20220412000250217320-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Bhakarwadi Multicolor Floral Print Art Silk Saree with Blouse",
        price: "₹ 354 ",
        strickPrice: "₹ 999"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/RUC-322-YELLOW/1-20220331205930400128-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Bhakarwadi Yellow Floral Print Art Silk Saree with Blouse",
        price: "₹ 354 ",
        strickPrice: "₹ 999 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/RUC-403-RAMA/1-20220425183300284189-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Bhakarwadi Blue Georgette Printed Saree With Unstitched Blouse Piece",
        price: "₹ 377",
        strickPrice: "₹ 999 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/RUC-321-BEIGE/1-20220412001838898139-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Bhakarwadi Beige Floral Print Art Silk Saree with Blouse",
        price: "₹ 354 ",
        strickPrice: "₹ 999"
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/RUC-332-GREEN/1-20220331210427887597-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Bhakarwadi Green Floral Print Art Silk Saree with Blouse",
        price: "₹ 354 ",
        strickPrice: "₹ 999 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/RUC_347_Green/1-20220701183106736718-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "SVB Saree Blue Printed Art Silk Saree with Unstitched Blouse",
        price: "₹ 350 ",
        strickPrice: "₹ 799 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MYN_123/1-20220428170709074195-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "SVB Saree Women White Printed Bhagalpuri Silk Saree with Unstitched Blouse",
        price: "₹ 349 ",
        strickPrice: "₹ 1499 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MYN_364/1-20220428170111122571-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "SVB Saree Blue Polycotton Silk Saree",
        price: "₹ 299 ",
        strickPrice: "₹ 999 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MYN_123/1-20220428170709074195-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "SVB Saree Women White Printed Bhagalpuri Silk Saree with Unstitched",
        price: "₹ 349 ",
        strickPrice: "₹ 1499 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/S181070/1-20220623190218324897-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Aadvika Majenta Floral Printed Saree with Unstitched Blouse",
        price: "₹ 500 ",
        strickPrice: "₹ 400 "
    },

    
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/S189394_AA/1-20220701184315912003-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Aadvika Red Woven Design Saree with Unstitched Blouse",
        price: "₹ 310 ",
        strickPrice: "₹ 500 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/RUC_347_Red/1-20220701183028062555-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Bhakarwadi Black Printed Georgette Saree with Unstitched Blouse",
        price: "₹ 350 ",
        strickPrice: "₹ 1400 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/STCS7631/1-20220402024205469068-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Orange Woven Design Cotton Silk Saree With Blouse",
        price: "₹ 433 ",
        strickPrice: "₹ 1500 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/STCS7634/1-20220402023759917777-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Beige Woven Design Cotton Silk Saree With Blouse",
        price: "₹ 433 ",
        strickPrice: "₹ 1000 "
    },


    {
        image: "https://static.wixstatic.com/media/3cd70c_81b12d5e233343fabc4fb97dabdb123e~mv2.jpg/v1/fill/w_536,h_670,al_c,lg_1,q_85/3cd70c_81b12d5e233343fabc4fb97dabdb123e~mv2.jpg",
        description: "Green Printed Georgette Saree with Unstitched Blouse",
        price: "₹ 550 ",
        strickPrice: "₹ 800 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/STCS7636/1-20220402023927781258-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Blue Woven Design Cotton Silk Saree With Blouse",
        price: "₹ 600 ",
        strickPrice: "₹ 1100 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/sati_20/1-20220704200936733886-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "SVB Saree Yellow Printed Georgette Saree with Unstitched Blouse",
        price: "₹ 350 ",
        strickPrice:"₹ 2000 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/STCS7659/1-20220412001814099225-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Red Woven Design Cotton Silk Saree With Blouse",
        price: "₹ 800 ",
        strickPrice: "₹ 2000 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/STCS7663/1-20220402023735253513-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Multi Woven Design Cotton Silk Saree With Blouse",
        price: "₹ 100 ",
        strickPrice: "₹ 500 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MYN_367/1-20220428171530683316-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "SVB SareeBaby Pink Polycotton Silk Saree",
        price: "₹ 299 ",
        strickPrice: "₹ 999 "
    },
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/CHIDBLUE/1-20220412000123833717-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Bhakarwadi Blue Floral Print Art Silk Saree with Blouse",
        price: "₹ 354 ",
        strickPrice: "₹ 999 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/sati_20/1-20220704200936733886-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "SVB Saree Yellow Printed Georgette Saree with Unstitched Blouse",
        price: "₹ 350 ",
        strickPrice:"₹ 2000 "
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
    var saree_pbox = document.createElement("div");

    // image
    var saree_cbox1 = document.createElement("div");

    var saree_image = document.createElement("img");
    saree_image.setAttribute("src", el.image);
    // saree_image.setAttribute("class", "saree_item_images");

    // description
    var saree_cbox2 = document.createElement("div");

    var saree_description = document.createElement("p");
    saree_description.textContent = el.description;

    // price & strickPrice
    var saree_cbox3 = document.createElement("div");
    
    // price
    var saree_price = document.createElement("h2");
    saree_price.textContent = el.price;

    // strickPrice
    var saree_strickPrice = document.createElement("h4");
    saree_strickPrice.textContent = el.strickPrice;
    saree_strickPrice.setAttribute("class", "saree_item_strickPrice");

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
    var saree_cbox4 = document.createElement("div");

    var saree_button = document.createElement("button");
    saree_button.textContent = "ADD TO CART";

    saree_button.addEventListener("click", (e) => {
        e.preventDefault();
        let obj = {
            image: el.image,
            description: el.description,
            price: el.price,
            strickPrice: el.strickPrice
        }
        arr.push(obj);
        localStorage.setItem("addToCart data", JSON.stringify(arr));
        saree_button.innerText = "GO TO CART";
        saree_button.style.backgroundColor = "green";
        saree_button.style.color = "white";
    });

    // append all 
    saree_cbox1.append(saree_image);
    saree_cbox2.append(saree_description);
    saree_cbox3.append(saree_price, saree_strickPrice);
    saree_cbox4.append(saree_button);

    saree_pbox.append(saree_cbox1, saree_cbox2, saree_cbox3, rating, saree_cbox4);

    container.append(saree_pbox);
});