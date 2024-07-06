let psw = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strengh");

psw.addEventListener('input',()=>{
    if(psw.value.length >0){
        msg.style.display ="block";
    }
    else{
        msg.style.display = "none";
    }
    if(psw.value.length < 4){
        str.innerHTML = "Weak";
        psw.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if(psw.value.length >=4 && psw.value.length < 8){
        str.innerHTML = "Medium";
        psw.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else{
        str.innerHTML = "Very Good";
        psw.style.borderColor = "green";
        msg.style.color = "green";
    }
    
})