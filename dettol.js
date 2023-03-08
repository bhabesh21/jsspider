var container = document.getElementById("dettol_container");

var data = [
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639247545030_Dettol_Liquid_Disinfectant_For_Personal_Hygiene_Surface_Disinfectant_Floor_Cleaner_Menthol_Cool_500ml.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Liquid Disinfectant For Personal Hygiene Surface Disinfectant Floor",
        price: "₹ 343 ",
        strickPrice: "₹ 646 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170860393/1-20210920190620476191-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Soap Skincare- 75Gm",
        price: "₹ 456 ",
        strickPrice: "₹ 675 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170874515/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Original Soap (125Gm Each) Pack Of 6",
        price: "₹ 565 ",
        strickPrice: "₹ 876 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170884089/1-large.PNG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Original Soap 75Gm (Buy 4 Get 1 Free)",
        price: "₹ 656 ",
        strickPrice: "₹ 987 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170954792/1-20220412001810709967-large.PNG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Skincare Soap 125Gm Each (Buy 4 Get 1 Free)-5",
        price: "₹ 498 ",
        strickPrice: "₹ 989 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1647855297954_dettol_multi_use_skin_surface_wipes_original_40s_0_0.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Wipes Multi-Use Skin & Surface- 40-Original",
        price: "₹ 232 ",
        strickPrice: "₹ 756 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170699863/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Skincare 125Gm Soap- 125Gm",
        price: "₹ 490 ",
        strickPrice: "₹ 767 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1642493897160_51fj9NcjSZS._SL1000_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Bodywash & Shower Gel- 250Ml-Nourish",
        price: "₹ 454 ",
        strickPrice: "₹ 765 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170954394/1-large.PNG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Antiseptic Liquid",
        price: "₹ 233 ",
        strickPrice: "₹ 434 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170699841/1-20210920190513889323-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Wipes Multi-Use Skin and Surface Original- 10",
        price: "₹ 56 ",
        strickPrice: "₹ 345 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1654168359488_dettol_org.jpg?tr=f-webp,q-60",
        description: "Dettol Liquid Handwash Refill Original- 1500ml",
        price: "₹ 309 ",
        strickPrice: "₹ 567 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1657869871481_dettol-original-liquid-handwash-refill-175-ml-product-images-o490002857-p490002857-0-202203151445.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Liquid Handwash Refill Original- 175ml",
        price: "₹ 565 ",
        strickPrice: "₹ 964 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1657870025860_dettolaloe.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Liquid Handwash Refill Original- ",
        price: "₹ 565 ",
        strickPrice: "₹ 945 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170699857/1-20220412001920000599-large.PNG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Cool Soap (125gm Each) Pack of 3",
        price: "₹ 343 ",
        strickPrice: "₹ 989 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170954807/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Cool Soap (125gm Each)- 5",
        price: "₹ 434 ",
        strickPrice: "₹ 989 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170869227/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Antiseptic Disinfectant Liquid- 250Ml",
        price: "₹ 343 ",
        strickPrice: "₹ 677 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1657870369910_combodettol.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Foaming Handwash - Pump Aloe Coconut 250ml + 200ml Refill Pack",
        price: "₹ 12 ",
        strickPrice: "₹ 444"
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639247706646_Dettol_Menthol_Cool_Disinfectant_Liquid_500_ml.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Menthol Cool Disinfectant Liquid 500 ml",
        price: "₹ 44 ",
        strickPrice: "₹ 66 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645096926486_Dettol_skincare_Liquid_Handwash_Refill_(175ml_Each)_Pack-_3.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol skincare Liquid Handwash Refill (175ml Each) Pack- 3",
        price: "₹ 343 ",
        strickPrice: "₹ 767 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170918183/1-large.PNG?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Original Liquid Handwash Refill (175Ml Each) Pack- 3",
        price: "₹ 434 ",
        strickPrice: "₹ 878 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170972759/1-20210920201435822767-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Instant Hand Sanitizer- 200Ml-Original",
        price: "₹ 232 ",
        strickPrice: "₹ 665 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170860518/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Liquid Handwash Refill Skincare- 750Ml",
        price: "₹ 122 ",
        strickPrice: "₹ 323 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170954576/1-20220412001827426929-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Liquid Handwash Refill Skincare",
        price: "₹ 432 ",
        strickPrice: "₹ 665 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170450112/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Handwash Refill Skincare",
        price: "₹ 54 ",
        strickPrice: "₹ 876 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1646034167536_Dettol_Super_Saver_Liquid_Handwash_Refill_Buy_1_Get_1_Free_(750Ml_Each)-_2-Original.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "ettol Super Saver Liquid Handwash Refill Buy 1 Get 1 Free",
        price: "₹ 21",
        strickPrice: "₹ 55 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1645096926486_Dettol_skincare_Liquid_Handwash_Refill_(175ml_Each)_Pack-_3.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol skincare Liquid Handwash Refill (175ml Each) Pack- 3",
        price: "₹ 33 ",
        strickPrice: "₹ 89 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1654168173831_dettol.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Liquid Handwash Refill Skincare- 1500Ml",
        price: "₹ 434 ",
        strickPrice: "₹ 544 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1656932171433_Untitled.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Surface Disinfectant Trigger-500ml",
        price: "₹ 45 ",
        strickPrice: "₹ 77 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1642427918866_Dettol_&_Moms_Soap_Buy_3_Get_1_Free_(75Gm_Each)-_4-Tulsi_Fragrance.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol & Moms Soap Buy 3 Get 1 Free (75Gm Each)- 4-Tulsi Fragrance",
        price: "₹ 123 ",
        strickPrice: "₹ 343 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639247545030_Dettol_Liquid_Disinfectant_For_Personal_Hygiene_Surface_Disinfectant_Floor_Cleaner_Menthol_Cool_500ml.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp",
        description: "Dettol Liquid Disinfectant For Personal Hygiene Surface Disinfectant Floor",
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
    var dettol_pbox = document.createElement("div");

    // image
    var dettol_cbox1 = document.createElement("div");

    var dettol_image = document.createElement("img");
    dettol_image.setAttribute("src", el.image);
    // dettol_image.setAttribute("class", "dettol_item_images");

    // description
    var dettol_cbox2 = document.createElement("div");

    var dettol_description = document.createElement("p");
    dettol_description.textContent = el.description;

    // price & strickPrice
    var dettol_cbox3 = document.createElement("div");
    
    // price
    var dettol_price = document.createElement("h2");
    dettol_price.textContent = el.price;

    // strickPrice
    var dettol_strickPrice = document.createElement("h4");
    dettol_strickPrice.textContent = el.strickPrice;
    dettol_strickPrice.setAttribute("class", "dettol_item_strickPrice");

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
    var dettol_cbox4 = document.createElement("div");

    var dettol_button = document.createElement("button");
    dettol_button.textContent = "ADD TO CART";

    dettol_button.addEventListener("click", (e) => {
        e.preventDefault();
        let obj = {
            image: el.image,
            description: el.description,
            price: el.price,
            strickPrice: el.strickPrice
        }
        arr.push(obj);
        localStorage.setItem("addToCart data", JSON.stringify(arr));
        dettol_button.innerText = "GO TO CART";
        dettol_button.style.backgroundColor = "green";
        dettol_button.style.color = "white";
    });

    // append all 
    dettol_cbox1.append(dettol_image);
    dettol_cbox2.append(dettol_description);
    dettol_cbox3.append(dettol_price, dettol_strickPrice);
    dettol_cbox4.append(dettol_button);

    dettol_pbox.append(dettol_cbox1, dettol_cbox2, dettol_cbox3,rating, dettol_cbox4);

    container.append(dettol_pbox);
});