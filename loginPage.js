const form = document.querySelector("#l-form");
const pnumber = document.querySelector("#l-pnumber");
const password = document.querySelector("#l-password");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
});


const validate = () => {
    const pnumberValue = pnumber.value.trim();
    const passwordValue = password.value.trim();


    // define finalValidation function
    const finalValidation = () => {
        let formItems = document.querySelectorAll(".form-item");
        var count = 0
        for(var i=0; i<formItems.length; i++) {
            if(formItems[i].className === "form-item success") {
                count++;
            }
        }
        if(count === formItems.length) {
            var arr = JSON.parse(localStorage.getItem("login data"));
            
            var flag = 0;
            for(var i=0; i<arr.length; i++) {
                if(arr[i].phoneNumber === pnumberValue && arr[i].password === passwordValue) {
                    flag = 1;
                    break;
                } else {
                    flag = 0;
                }
            }

            if(flag === 1) {
                alert("Login Successfully");
                window.location.href = "home.html";
            } else {
                alert("Login ID & Password is incorrect!");
            }
        }
    }
    
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

    finalValidation();
}


const passwordOpenEye = document.querySelector(".password-eye1.open-eye");
const passwordCloseEye = document.querySelector(".password-eye1.close-eye");

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
