var container = document.getElementById("jewellary_container");

var data = [
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/banx1286_2-8/1-20220426100350946060-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Vidhya Kangan Set Of 26 Orange Acrylic Bangles",
        price: "₹ 295",
        strickPrice: "₹ 1000"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/banx974_2-8/1-20220426100902293761-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Vidhya Kangan Set Of 26 Red Acrylic Bangles",
        price: "₹ 305 ",
        strickPrice: "₹ 885 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/banx1201_2-8/1-20220426101050597110-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "idhya Kangan Set Of 22 Maroon Acrylic Bangles",
        price: "₹ 333 ",
        strickPrice: "₹ 566 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/8956-NKER/1-20220327012113525445-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Gold Plated Metal Pearl  Necklace Set",
        price: "₹ 222 ",
        strickPrice: "₹ 777 "
    },



    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/JBRKKDEC_4/1-20220327012129216938-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "White Brass Chunky Necklace Set",
        price: "₹ 444 ",
        strickPrice: "₹ 666 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/JBRKKDEC_30/1-20220327012142072757-large.jpg?tr=f-webp,q-60",
        description: "Green Brass Chunky Necklace Set",
        price: "₹ 466 ",
        strickPrice: "₹ 987 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/JBRPCN_14/1-20220327012118850006-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Multicolor Brass Chunky Necklace",
        price: "₹ 444 ",
        strickPrice: "₹ 3333 "
    },



    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/JBRPCN_19/1-20220327012129212053-large.jpg?tr=f-webp,q-60",
        description: "Multicolor Brass Chunky Necklace",
        price: "₹ 333 ",
        strickPrice: "₹ 555 "
    },



    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/URBNDEC_4/1-20220327012057530719-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Gold Plated Copper Bridal Maang Tikka",
        price: "₹ 444 ",
        strickPrice: "₹ 565 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/JHK362KTVJA/1-20220401023204810653-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Gold Plated Brass Kundan Jhoomar Maang Tikka",
        price: "₹ 555 ",
        strickPrice: "₹ 333 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MGK116NTTPBHA/1-20220401023542685751-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Gold Plated Alloy Kundan Maang Tikka",
        price: "₹ 1050 ",
        strickPrice: "₹ 5555 "
    },



    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/Mahi_4009/1-20220525173252827321-large.jpg?tr=f-webp,q-60",
        description: "Sumitra Design Creation Designer Traditional Stylish Earrings Combos Set of 2",
        price: "₹ 333 ",
        strickPrice: "₹ 666 "
    },



    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MGK33DAB/1-20220401023308323063-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Gold Plated Copper Antique Maang Tikka",
        price: "₹ 222 ",
        strickPrice: "₹ 676 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MGK65NTTPBHA/1-20220401023251672682-large.jpeg?tr=f-webp,q-60",
        description: "Gold Plated Brass Kundan Maang Tikka",
        price: "₹ 343 ",
        strickPrice: "₹ 545 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MTK115NTTPBH/1-20220401023113852334-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Gold Plated Alloy Bridal Matha Patti Maang Tikka",
        price: "₹ 565 ",
        strickPrice: "₹ 897 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MTK115NTTPBH/1-20220401023113852334-large.jpg?tr=f-webp,q-60",
        description: "Gold Plated Alloy Bridal Matha Patti Maang Tikka",
        price: "₹ 454 ",
        strickPrice: "₹ 345 "
    },
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MTK500EMNYMT/1-20220401023125976063-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Gold Plated Brass Zirconia Matha Patti Maang Tikka",
        price: "₹ 123 ",
        strickPrice: "₹ 222 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MTK962KTVGSA/1-20220401023121039815-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Gold Plated Brass Temple Look Matha Patti Maang Tikka",
        price: "₹ 343 ",
        strickPrice: "₹ 665 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/SET_06/1-20220527143209711624-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Gold Plated Brass Temple Look Matha Patti Maang Tikka",
        price: "₹ 343 ",
        strickPrice: "₹ 485 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/SET_01/1-20220527143525504624-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Valeria Fancy Jewellery & Necklace For Women And Girls",
        price: "₹ 232 ",
        strickPrice: "₹ 565 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/9141-NKER/1-20220406024304395741-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Estele Gold Plated Alloy Pearl Jewellery Set",
        price: "₹ 546 ",
        strickPrice: "₹ 343 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/9671-IG-NKER/1-20220406034418133134-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Estele Gold Plated Alloy Pearl Jewellery Set",
        price: "₹ 332 ",
        strickPrice: "₹ 1233 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/8059-NKER/1-20220406024416740699-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Estele Gold Plated Alloy Pearl Jewellery Set",
        price: "₹ 354 ",
        strickPrice: "₹ 986 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/9739-IG-NKER/1-20220406024247771188-large.JPG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Estele Gold Plated Alloy Kundan Jewellery Set",
        price: "₹ 365 ",
        strickPrice: "₹ 390 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/LTRC01_RG/1-20220406024600172508-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Lalso Pink Alloy Kundan Maang Tikka And Ring Set",
        price: "₹ 232 ",
        strickPrice: "₹ 333 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/DT3365NK/1-20220410081157660766-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Aadita Silver Alloy Handcrafted Choker Necklace Jewellery Set",
        price: "₹ 342 ",
        strickPrice: "₹ 423 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/100274RING/1-20220406024337226763-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Diva Walk Gold Plated Brass Pearl Studded Ring",
        price: "₹ 332 ",
        strickPrice: "₹ 132 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/100278RING/1-20220406034341304158-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Diva Walk Gold Plated Brass Pearl Studded Ring",
        price: "₹ 565 ",
        strickPrice: "₹ 534 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/100405RING/1-20220406024332163525-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Diva Walk Set Of 3 Silver Plated Brass Pearl Studded Rings",
        price: "₹ 145 ",
        strickPrice: "₹ 987"
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/100415RING/1-20220406034439852956-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Diva Walk Set Of 3 Gold Plated Brass Studded Rings",
        price: "₹ 545 ",
        strickPrice: "₹ 354 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/100405RING/1-20220406024332163525-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Diva Walk Set Of 3 Silver Plated Brass Pearl Studded Rings",
        price: "₹ 145 ",
        strickPrice: "₹ 987"
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/100278RING/1-20220406034341304158-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Diva Walk Gold Plated Brass Pearl Studded Ring",
        price: "₹ 565 ",
        strickPrice: "₹ 534 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MTK962KTVGSA/1-20220401023121039815-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Gold Plated Brass Temple Look Matha Patti Maang Tikka",
        price: "₹ 343 ",
        strickPrice: "₹ 665 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/8956-NKER/1-20220327012113525445-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Gold Plated Metal Pearl With Stones Layered Necklace Set",
        price: "₹ 222 ",
        strickPrice: "₹ 777 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MTK500EMNYMT/1-20220401023125976063-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Gold Plated Brass Zirconia Matha Patti Maang Tikka",
        price: "₹ 123 ",
        strickPrice: "₹ 222 "
    },
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MTK962KTVGSA/1-20220401023121039815-large.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Gold Plated Brass Temple Look Matha Patti Maang Tikka",
        price: "₹ 343 ",
        strickPrice: "₹ 665 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/MGK65NTTPBHA/1-20220401023251672682-large.jpeg?tr=f-webp,q-60",
        description: "Gold Plated Brass Kundan Maang Tikka",
        price: "₹ 343 ",
        strickPrice: "₹ 545 "
    },


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/8059-NKER/1-20220406024416740699-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Estele Gold Plated Alloy Pearl Jewellery Set",
        price: "₹ 354 ",
        strickPrice: "₹ 986 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/SET_01/1-20220527143525504624-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Valeria Fancy Jewellery & Necklace For Women And Girls",
        price: "₹ 232 ",
        strickPrice: "₹ 565 "
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
    var jewellary_pbox = document.createElement("div");

    // image
    var jewellary_cbox1 = document.createElement("div");

    var jewellary_image = document.createElement("img");
    jewellary_image.setAttribute("src", el.image);
    // jewellary_image.setAttribute("class", "jewellary_item_images");

    // description
    var jewellary_cbox2 = document.createElement("div");

    var jewellary_description = document.createElement("p");
    jewellary_description.textContent = el.description;

    // price & strickPrice
    var jewellary_cbox3 = document.createElement("div");
    
    // price
    var jewellary_price = document.createElement("h2");
    jewellary_price.textContent = el.price;

    // strickPrice
    var jewellary_strickPrice = document.createElement("h4");
    jewellary_strickPrice.textContent = el.strickPrice;
    jewellary_strickPrice.setAttribute("class", "jewellary_item_strickPrice");

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
    var jewellary_cbox4 = document.createElement("div");

    var jewellary_button = document.createElement("button");
    jewellary_button.textContent = "ADD TO CART";

    jewellary_button.addEventListener("click", (e) => {
        e.preventDefault();
        let obj = {
            image: el.image,
            description: el.description,
            price: el.price,
            strickPrice: el.strickPrice
        }
        arr.push(obj);
        localStorage.setItem("addToCart data", JSON.stringify(arr));
        jewellary_button.innerText = "GO TO CART";
        jewellary_button.style.backgroundColor = "green";
        jewellary_button.style.color = "white";
    });

    // append all 
    jewellary_cbox1.append(jewellary_image);
    jewellary_cbox2.append(jewellary_description);
    jewellary_cbox3.append(jewellary_price, jewellary_strickPrice);
    jewellary_cbox4.append(jewellary_button);

    jewellary_pbox.append(jewellary_cbox1, jewellary_cbox2, jewellary_cbox3,rating, jewellary_cbox4);

    container.append(jewellary_pbox);
});