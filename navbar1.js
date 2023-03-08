const navbarContainer = document.querySelector("#navbar_container");
const navbarMenuLogo = document.querySelector("#navbar_menu_logo");

navbarMenuLogo.addEventListener("click", () => {
    navbarContainer.classList.toggle("active");
});

const searchButton = document.querySelector(".fa-magnifying-glass");

searchButton.addEventListener("click", () => {
    let searchValue = document.querySelector("#navbar_search_box").value.trim().toLowerCase();
    
    if(searchValue.includes("men") || searchValue.includes("boy")) {
        location.href = "men.html";
    }
    
    else if(searchValue.includes("saree") || searchValue.includes("women") || searchValue.includes("girl") || searchValue.includes("ladies")) {
        location.href = "saree.html";
    }
    
    else if(searchValue.includes("amul")) {
        location.href = "amul.html";
    }
    
    else if(searchValue.includes("cadbury") || searchValue.includes("chocolate") || searchValue.includes("biscuit") || searchValue.includes("bournvita")) {
        location.href = "cadbury.html";
    }
    
    else if(searchValue.includes("colgate") || searchValue.includes("tooth") || searchValue.includes("brush")) {
        location.href = "colgate.html";
    }
    
    else if(searchValue.includes("dettol")) {
        location.href = "dettol.html";
    }

    else if(searchValue.includes("electronics") || searchValue.includes("mobile") || searchValue.includes("earcord")) {
        location.href = "electronics.html";
    }

    else if(searchValue.includes("furnishing") || searchValue.includes("cover") || searchValue.includes("bed")) {
        location.href = "furnishing.html";
    }

    else if(searchValue.includes("grocery") || searchValue.includes("tea") || searchValue.includes("coffee")) {
        location.href = "grocery.html";
    }

    else if(searchValue.includes("himalaya") || searchValue.includes("medicine") || searchValue.includes("face") || searchValue.includes("cream") || searchValue.includes("shampoo")) {
        location.href = "himalaya.html";
    }

    else if(searchValue.includes("jewellary") || searchValue.includes("ear") || searchValue.includes("bangle") || searchValue.includes("neck") || searchValue.includes("ring")) {
        location.href = "jewellary.html";
    }

    else if(searchValue.includes("nivea") || searchValue.includes("lip") || searchValue.includes("gel")) {
        location.href = "nivea.html";
    }

    else {
        alert("Sorry product is not found!");
    }

});