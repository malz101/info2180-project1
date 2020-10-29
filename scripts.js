"use strict";
window.onload = function(){
    const newsletter = document.querySelector("section.newsletter");
    const btn = newsletter.querySelector("form button");
    btn.addEventListener("click",function(){
        console.log("Event triggered");
        event.preventDefault();
        let input = newsletter.querySelector("form input");
        let message = newsletter.querySelector("div.message");
        if(input.value){
            message.textContent = `Thank you! Your email address ${input.value} has been added to our mailing list!`;
            message.style.color="yellow";
        }
        else{
            message.textContent = "Please enter a valid email address.";
            message.style.color="red";
        }//end if
        input.value="";
    });//end onclick
}//End of onload