const form = document.querySelector("#s-form");
const pnumber = document.querySelector("#s-pnumber");
const password = document.querySelector("#s-password");
const cpassword = document.querySelector("#s-cpassword");

var arr = [];
var oldData = JSON.parse(localStorage.getItem("login data"));
if(oldData === null) {
    arr = [];
} else {
    for(var key in oldData) {
        arr.push(oldData[key]);
    }
}

var flag = false;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();

    let obj = {
        phoneNumber: pnumber.value.trim(),
        password: password.value.trim()
    }
    arr.push(obj);

    // check the number is already register or not 
    if(oldData === null) {
        flag = true;
        localStorage.setItem("login data", JSON.stringify(arr));
    }
    
    else {
        oldData.map((el) => {
            if(el.phoneNumber === pnumber.value && el.password.length >= 6) {
                flag = false;
                alert("This mobile number is already registered. Please login by using this mobile number.");
                window.location.href = "loginPage.html";
            } else {
                flag = true;
                // store in local storage 
                // let obj = {
                //     phoneNumber: pnumber.value.trim(),
                //     password: password.value.trim()
                // }
                // arr.push(obj);
                localStorage.setItem("login data", JSON.stringify(arr));
            }
        });
    }

    // validate();
    finalValidation();
});

const validate = () => {
    const pnumberValue = pnumber.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    // // define finalValidation function
    // const finalValidation = () => {
    //     let formItems = document.querySelectorAll(".form-item");
    //     var count = 0
    //     for(var i=0; i<formItems.length; i++) {
    //         if(formItems[i].className === "form-item success") {
    //             count++;
    //         }
    //     }
    //     if(count === formItems.length && flag === true) {
    //         alert("Signup Successfully");
    //         window.location.href = "loginPage.html";
    //     }
    // }
    
    // define setSuccessMessage function 
    const setSuccessMessage = (input) => {
        let formItem = input.parentElement;
        formItem.className = "form-item success";
    }

    // define setSuccessMessage function 
    const setErrorMessage = (input, message) => {
        let formItem = input.parentElement;
        let small = formItem.querySelector("small");
        small.innerText = message;
        formItem.className = "form-item error";
    }

    // phone number validation
    if(pnumberValue === ""){
        setErrorMessage(pnumber, "phone number can not be empty");
    } else if(pnumberValue.length < 10) {
        setErrorMessage(pnumber, "Not a valid number");
    } else {
        setSuccessMessage(pnumber);
    }

    // password validation
    if(passwordValue === ""){
        setErrorMessage(password, "password can not be empty");
    } else if(passwordValue.length < 6) {
        setErrorMessage(password, "at list 6 characters required");
    } else {
        setSuccessMessage(password);
    }

    // conform password validation
    if(cpasswordValue === ""){
        setErrorMessage(cpassword, "conformation password can not be empty");
    } else if(cpasswordValue != passwordValue) {
        setErrorMessage(cpassword, "conformation password & password will be same");
    } else {
        setSuccessMessage(cpassword);
    }

    // finalValidation();
}

// define finalValidation function
const finalValidation = () => {
    // console.log("hii");
    let formItems = document.querySelectorAll(".form-item");
    var count = 0
    for(var i=0; i<formItems.length; i++) {
        if(formItems[i].className === "form-item success") {
            count++;
        }
    }
    if(count === formItems.length && flag === true) {
        alert("Signup Successfully");
        window.location.href = "loginPage.html";
    }
}

// show or hidd password
const passwordOpenEye = document.querySelector(".password-eye1.open-eye");
const passwordCloseEye = document.querySelector(".password-eye1.close-eye");
const cpasswordOpenEye = document.querySelector(".cpassword-eye1.open-eye");
const cpasswordCloseEye = document.querySelector(".cpassword-eye1.close-eye");

passwordOpenEye.addEventListener("click", () => {
    password.setAttribute("type", "password");
    passwordCloseEye.style.visibility = "visible";
    passwordOpenEye.style.visibility = "hidden";
});
passwordCloseEye.addEventListener("click", () => {
    password.setAttribute("type", "text");
    passwordCloseEye.style.visibility = "hidden";
    passwordOpenEye.style.visibility = "visible";
});
cpasswordOpenEye.addEventListener("click", () => {
    cpassword.setAttribute("type", "password");
    cpasswordCloseEye.style.visibility = "visible";
    cpasswordOpenEye.style.visibility = "hidden";
});
cpasswordCloseEye.addEventListener("click", () => {
    cpassword.setAttribute("type", "text");
    cpasswordCloseEye.style.visibility = "hidden";
    cpasswordOpenEye.style.visibility = "visible";
});
