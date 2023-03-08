var mainContainer = document.querySelector("#addToCart_main_container");
var container = document.getElementById("addToCart_container");
var priceItems = document.querySelector("#price_items");
var totalItemPrice = document.querySelector("#total_items_price");
var discountPrice = document.querySelector("#discount_price");
var actualPrice = document.querySelector("#actual_price");
var saveAmount = document.querySelector("#save_amount");

var data =JSON.parse(localStorage.getItem("addToCart data"));


var strickPriceSum = priceSum = 0;
data.map(function(el){
    var addToCart_pbox = document.createElement("div");
      
    // image
    var addToCart_cbox1 = document.createElement("div");

    var addToCart_image = document.createElement("img");
    addToCart_image.setAttribute("src", el.image);
    // addToCart_image.setAttribute("class", "addToCart_item_images");

    // description
    var addToCart_cbox2 = document.createElement("div");

    var addToCart_description = document.createElement("p");
    addToCart_description.textContent = el.description;

    // price & strickPrice
    var addToCart_cbox3 = document.createElement("div");
    
    // price
    var addToCart_price = document.createElement("h2");
    addToCart_price.textContent = el.price;
    addToCart_price.setAttribute("id", "addToCart_price");

    // strickPrice
    var addToCart_strickPrice = document.createElement("h4");
    addToCart_strickPrice.textContent = el.strickPrice;
    addToCart_strickPrice.setAttribute("class", "addToCart_item_strickPrice");

    // add to cart 
    var addToCart_cbox4 = document.createElement("div");

    var addToCart_button = document.createElement("button");
    addToCart_button.textContent = "REMOVE";

    addToCart_button.addEventListener("click", () => {
        for(var key in data) {
            if(data[key] === el) {
                data.splice(key, 1);
                break;
            }
        }
        localStorage.setItem("addToCart data", JSON.stringify(data));
        location.reload();
    });

    // append all 
    addToCart_cbox1.append(addToCart_image);
    addToCart_cbox2.append(addToCart_description);
    addToCart_cbox3.append(addToCart_price, addToCart_strickPrice);
    addToCart_cbox4.append(addToCart_button);

    addToCart_pbox.append(addToCart_cbox1, addToCart_cbox2, addToCart_cbox3, addToCart_cbox4);

    container.append(addToCart_pbox);

    // price details
    var strickPriceArr = el.strickPrice.split(" ");
    strickPriceSum = strickPriceSum + Number(strickPriceArr[1]);
    
    var priceArr = el.price.split(" ");
    priceSum = priceSum + Number(priceArr[1]);
});

priceItems.innerText = `Price (${data.length} items)`;
totalItemPrice.innerText = "₹ "+strickPriceSum;

actualPrice.innerText = "₹ "+priceSum;

discountPrice.innerText = `- ₹ ${strickPriceSum-priceSum}`;

saveAmount.innerText = `You will save ₹ ${strickPriceSum-priceSum} on this order`;




// background image
if(data.length === 0) {
    mainContainer.classList.add("present");
} else {
    mainContainer.classList.remove("present");
}