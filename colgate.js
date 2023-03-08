var container = document.getElementById("colgate_container");

var data = [
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170984839/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Toothbrush Zig Zag+ Anti- " ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639468304482_40118790_5-colgate-zigzag-anti-bacterial-toothbrush-soft.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Toothbrush Zig Zag+ Anti-Bacterial Bristle- 6-Soft" ,
        price: "₹ 458",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639141400096_Colgate_Gentle_Gumcare_Toothbrush_(Buy_2_Get_2_Free)-_4-Ultra_Soft.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Gentle Gumcare Toothbrush (Buy 2 Get 2 Free)- 4-Ultra Soft",
        price: "₹ 453",
        strickPrice: "₹ 775 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171014971/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Herbal Anticavity Toothpaste-200Gm" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171014976/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Active Salt Toothpaste- 200gm" ,
        price: "₹ 156",
        strickPrice: "₹ 375 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1640265195238_Colgate_Total_Waxed_Dental_Floss-_1.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Total Waxed Dental Floss- 1" ,
        price: "₹ 656",
        strickPrice: "₹ 875 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170691751/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Plax Peppermint Fresh Mouth Wash- 500Ml" ,
        price: "₹ 456",
        strickPrice: "₹ 875 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1640264959084_Colgate_Slim_Soft_Charcoal_Toothbrush-_1.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Slim Soft Charcoal Toothbrush- 1" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170691819/1-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Anticavity For Kids Barbie Toothpast" ,
        price: "₹ 346",
        strickPrice: "₹ 875 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1642424356632_Colgate_Plax_Complete_Care_Mouth_Wash-_250ml.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Plax Complete Care Mouth Wash- 250ml" ,
        price: "₹ 756",
        strickPrice: "₹ 905 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170912583/1-20220412000021845379-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate 360 Degree Visible White (Buy 2 Get 2 Free)- 4" ,
        price: "₹ 156",
        strickPrice: "₹ 775 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1642425612569_Colgate_Slim_Soft_Charcoal_Toothbrush_(Buy_2_Get_2_Free)-_4.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Slim Soft Charcoal Toothbrush (Buy 2 Get 2 Free)- 4" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171014420/1-20210920191547208893-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Pain Out Dental Gel-10gm" ,
        price: "₹ 756",
        strickPrice: "₹ 975 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1648127699248_colgate-max-fresh-spicy-fresh-red-gel-toothpaste-20-g-product-images-o491085694-p590119913-0-202203151607.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Maxfresh Toothpaste- 20gm-Spicy Fresh Red Gel" ,
        price: "₹ 256",
        strickPrice: "₹ 975 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1641024535848_colgate3.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Medium 360?¶??¬? Floss-Tip" ,
        price: "₹ 346",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1642486922050_71GXliIkd1L._SL1000_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Active salt Neem 200+200 gm With 200 Gm " ,
        price: "₹ 56",
        strickPrice: "₹ 75 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639217583850_40144579_4-colgate-kids-toothpaste-2-5-years-anticavity-bubble-fruit-flavour.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Anticavity Toothpaste For Kids 40gm" ,
        price: "₹ 36",
        strickPrice: "₹ 475 "
    },
    
    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171043551/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Toothpowder - with Calcium and Minerals -200gm" ,
        price: "₹ 356",
        strickPrice: "₹ 785 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639149815263_Colgate_Active_Salt_Toothpaste-100gm-Neem.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Active Salt Toothpaste-100gm-Neem" ,
        price: "₹ 756",
        strickPrice: "₹ 1075 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639150672381_image_44_zm1v-8h_(1).jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Anticavity Toothpaste for Kids- 80gm-6+ Years" ,
        price: "₹ 453",
        strickPrice: "₹ 775 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1655557600874_419W4tJAQ5L.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Super Flexi Charcoal Tooth Brush Medium -1Unit" ,
        price: "₹ 156",
        strickPrice: "₹ 375 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171046423/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Zig Zag+ Antibacterial Medium Toothbrush (6+1 Free" ,
        price: "₹ 456",
        strickPrice: "₹ 875 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171041707/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Toothpowder - with Calcium and Minerals -200gm" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1641293397639_Colgate_Zig_zag_Charcoal_Toothbrush-Medium-4.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Zig zag Charcoal Toothbrush-Medium-4" ,
        price: "₹ 856",
        strickPrice: "₹ 975 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1641293397639_Colgate_Zig_zag_Charcoal_Toothbrush-Medium-4.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Zig zag Charcoal Toothbrush-Medium-4" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1641030590596_Colgate_360_floss-Tip_Toothbrush_Medium-1.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate 360 floss-Tip Toothbrush Medium-1" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171014420/1-20210920191547208893-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Pain Out Dental Gel-10gm" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639150672381_image_44_zm1v-8h_(1).jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Anticavity Toothpaste for Kids- 80gm-6+ Years with Sand Timer" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639149815263_Colgate_Active_Salt_Toothpaste-100gm-Neem.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Active Salt Toothpaste-100gm-Neem" ,
        price: "₹ 675",
        strickPrice: "₹ 967 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639149712183_Colgate_Visible_White-50gm_org.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Swarna Vedshakti Toothpaste-200gm" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1640264044014_Colgate_Anticavity_Toothpaste_Active_Salt_Neem.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Anticavity Toothpaste Active Salt Neem" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171045992/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Strong Teeth Anticavity Toothpaste with Amino Shakti 300g" ,
        price: "₹ 345",
        strickPrice: "₹ 878 "
    }, 


    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1640265195238_Colgate_Total_Waxed_Dental_Floss-_1.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Total Waxed Dental Floss- 1" ,
        price: "₹ 656",
        strickPrice: "₹ 875 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170691751/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Plax Peppermint Fresh Mouth Wash- 500Ml" ,
        price: "₹ 456",
        strickPrice: "₹ 875 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1640264959084_Colgate_Slim_Soft_Charcoal_Toothbrush-_1.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Slim Soft Charcoal Toothbrush- 1" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170691819/1-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Anticavity For Kids Barbie Toothpast" ,
        price: "₹ 346",
        strickPrice: "₹ 875 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1642424356632_Colgate_Plax_Complete_Care_Mouth_Wash-_250ml.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Plax Complete Care Mouth Wash- 250ml" ,
        price: "₹ 756",
        strickPrice: "₹ 905 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10170912583/1-20220412000021845379-large.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate 360 Degree Visible White (Buy 2 Get 2 Free)- 4" ,
        price: "₹ 156",
        strickPrice: "₹ 775 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1642425612569_Colgate_Slim_Soft_Charcoal_Toothbrush_(Buy_2_Get_2_Free)-_4.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Slim Soft Charcoal Toothbrush (Buy 2 Get 2 Free)- 4" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171014420/1-20210920191547208893-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Pain Out Dental Gel-10gm" ,
        price: "₹ 756",
        strickPrice: "₹ 975 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1648127699248_colgate-max-fresh-spicy-fresh-red-gel-toothpaste-20-g-product-images-o491085694-p590119913-0-202203151607.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Maxfresh Toothpaste- 20gm-Spicy Fresh Red Gel" ,
        price: "₹ 256",
        strickPrice: "₹ 975 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1641024535848_colgate3.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Medium 360?¶??¬? Floss-Tip Toothbrush" ,
        price: "₹ 346",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1642486922050_71GXliIkd1L._SL1000_.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Active salt Neem 200+200 gm With 200 Gm " ,
        price: "₹ 56",
        strickPrice: "₹ 75 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639217583850_40144579_4-colgate-kids-toothpaste-2-5-years-anticavity-bubble-fruit-flavour.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Anticavity Toothpaste For Kids 40gm" ,
        price: "₹ 36",
        strickPrice: "₹ 475 "
    },

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171043551/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Toothpowder - with Calcium and Minerals -200gm" ,
        price: "₹ 356",
        strickPrice: "₹ 785 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639149815263_Colgate_Active_Salt_Toothpaste-100gm-Neem.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Active Salt Toothpaste-100gm-Neem" ,
        price: "₹ 756",
        strickPrice: "₹ 1075 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1639150672381_image_44_zm1v-8h_(1).jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Anticavity Toothpaste for Kids- 80gm-6+ Years" ,
        price: "₹ 453",
        strickPrice: "₹ 775 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1655557600874_419W4tJAQ5L.jpeg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Super Flexi Charcoal Tooth Brush Medium -1Unit" ,
        price: "₹ 156",
        strickPrice: "₹ 375 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171046423/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Zig Zag+ Antibacterial Medium Toothbrush (6+1 Free)" ,
        price: "₹ 456",
        strickPrice: "₹ 875 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/10171041707/1-large.png?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Toothpowder - with Calcium and Minerals -200gm" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1641293397639_Colgate_Zig_zag_Charcoal_Toothbrush-Medium-4.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Zig zag Charcoal Toothbrush-Medium-4" ,
        price: "₹ 856",
        strickPrice: "₹ 975 "
    }, 

    {
        image: "https://static-assets-prod.dhani.com/pharmacy/images/product-images/-1/1641293397639_Colgate_Zig_zag_Charcoal_Toothbrush-Medium-4.jpg?tr=w-300,h-300,cm-pad_resize,fo-auto,f-webp" ,
        description: "Colgate Zig zag Charcoal Toothbrush-Medium-4" ,
        price: "₹ 456",
        strickPrice: "₹ 675 "
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
    var colgate_pbox = document.createElement("div");

    // image
    var colgate_cbox1 = document.createElement("div");

    var colgate_image = document.createElement("img");
    colgate_image.setAttribute("src", el.image);
    // colgate_image.setAttribute("class", "colgate_item_images");

    // description
    var colgate_cbox2 = document.createElement("div");

    var colgate_description = document.createElement("p");
    colgate_description.textContent = el.description;

    // price & strickPrice
    var colgate_cbox3 = document.createElement("div");
    
    // price
    var colgate_price = document.createElement("h2");
    colgate_price.textContent = el.price;

    // strickPrice
    var colgate_strickPrice = document.createElement("h4");
    colgate_strickPrice.textContent = el.strickPrice;
    colgate_strickPrice.setAttribute("class", "colgate_item_strickPrice");

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
    var colgate_cbox4 = document.createElement("div");

    var colgate_button = document.createElement("button");
    colgate_button.textContent = "ADD TO CART";

    colgate_button.addEventListener("click", (e) => {
        e.preventDefault();
        let obj = {
            image: el.image,
            description: el.description,
            price: el.price,
            strickPrice: el.strickPrice
        }
        arr.push(obj);
        localStorage.setItem("addToCart data", JSON.stringify(arr));
        colgate_button.innerText = "GO TO CART";
        colgate_button.style.backgroundColor = "green";
        colgate_button.style.color = "white";
    });

    // append all 
    colgate_cbox1.append(colgate_image);
    colgate_cbox2.append(colgate_description);
    colgate_cbox3.append(colgate_price, colgate_strickPrice);
    colgate_cbox4.append(colgate_button);

    colgate_pbox.append(colgate_cbox1, colgate_cbox2, colgate_cbox3,rating, colgate_cbox4);

    container.append(colgate_pbox);
});