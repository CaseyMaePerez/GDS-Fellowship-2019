function validate(){  
    var num=document.form1.name.value;  
    if (isNaN(num) === false){
        alert("Numerical values are not allowed in Name.");
        return false;  
    }
    else {
        window.open("../thanks/index.html");
        return true;  
    }  
}  