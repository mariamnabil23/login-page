//get the elements
const form = document.querySelector('form');
const emailField = form.querySelector('.email');
const eInput = emailField.querySelector(".emailInput");
const passField = form.querySelector(".password");
const pInput = passField.querySelector(".passInput");



form.onsubmit =(e)=>{
    //stop form from submitting
    e.preventDefault();

    //check form validation 
    if(eInput.value == ""){
        emailField.classList.add("error");
        console.log('no email is entered')
    }else{
        checkEmail();
    }
    if (pInput.value == "") {
        passField.classList.add("error");
        console.log("no password is entered");
    }

    //if user enter any character in input field of email , then this will displayed
    eInput.onkeyup =()=>{
        checkEmail();
    }
    //function to check the email
    function checkEmail(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!eInput.value.match(pattern)){
            emailField.classList.add("error");
            let errortxt = emailField.querySelector(".error-txt");
            eInput.value !== ""
                ? (errortxt.innerHTML = "enter a vaild email address")
                : (errortxt.innerHTML = "email can't be blank");
        }else{
            emailField.classList.remove("error");
        }
    }
    //if input field of password is empty
    pInput.onkeyup =()=>{
        if(pInput.value == ""){
            passField.classList.add("error");
        }else{
            passField.classList.remove("error");
        }
    }

    //if the entered data is vaild and the form is submitted
    if(!eInput.classList.contains("error") && !pInput.classList.contains("error")){
        window.location.href = "#";  //here put the url where you want to submit form data
        console.log('form submitted');
    }

}
