/*Move the PacMan and its food*/
function breakfast(){
    var mouth = document.getElementById("mouth");
    var semi1 = document.getElementById("semiClosed");
    var semi2 = document.getElementById("square");

    checkForm();

    if(index>10){
        clearInterval(t);
        document.getElementById("failure").style.visibility = "visible";
    }
    console.log(index);

    if(flag == true){
        document.getElementById("i"+(index-1)).style.display = "none";
    }

    var first = document.getElementById("i"+index);
    var second = document.getElementById("i"+(index+1));
    var third = document.getElementById("i"+(index+2));
    var forth = document.getElementById("i"+(index+3));

    if(flag == true){
        forth.style.display = "block";
        forth.style.visibility = "hidden";
        flag = false;
    }

    if(window.getComputedStyle(mouth, null).visibility == "visible" && window.getComputedStyle(document.getElementById("foodContainer"), null).left == "450px"){
        //semi close the mouth
        document.getElementById("foodContainer").style.left="400px";

        mouth.style.visibility = "hidden";
        semi1.style.visibility = "visible";
        semi2.style.visibility = "visible";

        forth.style.visibility = "visible";

        index++;
        flag = true; 
    }
    else if(window.getComputedStyle(document.getElementById("foodContainer"), null).left == "400px"){
        //close the mouth
        document.getElementById("foodContainer").style.left="600px";

        semi1.style.visibility = "hidden";
        semi2.style.visibility = "hidden";
    }
    else if(window.getComputedStyle(document.getElementById("foodContainer"), null).left == "600px"){
        //semi open the mouth
        document.getElementById("foodContainer").style.left="550px";

        semi1.style.visibility = "visible";
        semi2.style.visibility = "visible";
    }
    else if(window.getComputedStyle(document.getElementById("foodContainer"), null).left == "550px"){
        //open the mouth
        document.getElementById("foodContainer").style.left="500px";

        semi1.style.visibility = "hidden";
        semi2.style.visibility = "hidden";
        mouth.style.visibility = "visible";
    }
    else{
        //move food
        document.getElementById("foodContainer").style.left="450px";
    }
}

/*Check if the form is filled to enable the submit button*/
function checkForm(){
    var elements = document.forms[0].elements;
    var cansubmit = true;

    for(var i=0; i<elements.length; i++){
        if(elements[i].value.length == 0 && elements[i].type != "submit"){
            cansubmit = false;
        }
    }

    document.getElementsByTagName("button")[0].disabled = !cansubmit;
}

/*Restart the page*/
function reset(){
    location.reload();
}

/*Function for get.php*/
function dinner(){
    var mouth = document.getElementById("mouth");
    var semi1 = document.getElementById("semiClosed");
    var semi2 = document.getElementById("square");
    var food = document.getElementById("eated");
    var newfood = document.getElementById("extra");
    var allFood = document.getElementById("foodContainer");
    
    if(window.getComputedStyle(mouth, null).visibility == "visible" && window.getComputedStyle(food, null).visibility == "visible"){
        //semi close the mouth
        mouth.style.visibility = "hidden";
        semi1.style.visibility = "visible";
        semi2.style.visibility = "visible";
        newfood.style.visibility = "visible";
        allFood.style.left="400px";
    }
    else if(window.getComputedStyle(semi1, null).visibility == "visible" && window.getComputedStyle(food, null).visibility == "visible" && allFood.style.left == "400px"){
        //close the mouth
        semi1.style.visibility = "hidden";
        semi2.style.visibility = "hidden";
        food.style.visibility = "hidden";
        allFood.style.left="370px";
    }
    else if(window.getComputedStyle(mouth, null).visibility == "hidden" && window.getComputedStyle(food, null).visibility == "hidden" && semi1.style.visibility == "hidden"){
        //semi open the mouth
        semi1.style.visibility = "visible";
        semi2.style.visibility = "visible";
        food.style.visibility = "visible";
        newfood.style.visibility = "hidden";
        allFood.style.left="490px";
    }
    else if(window.getComputedStyle(semi1, null).visibility == "visible" && window.getComputedStyle(food, null).visibility == "visible"){
        //open the mouth
        semi1.style.visibility = "hidden";
        semi2.style.visibility = "hidden";
        mouth.style.visibility = "visible";
        allFood.style.left="460px";
    }
    else{
        //move food
        allFood.style.left="430x";
    }
}

/*Function for index.html*/
function validateForm() {
    var x = document.forms["myForm"]["fullName"].value;
    if (!x.includes(" ")) {
        alert("Full Name must include a space");
        return false;
    }
}
