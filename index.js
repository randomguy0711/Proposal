const img = document.getElementById("heart");
const nobutton1 = document.getElementById("nobutton1");
const nobutton2 = document.getElementById("nobutton2");
const nobutton3 = document.getElementById("nobutton3");
const nobutton4 = document.getElementById("nobutton4");
const nobutton5 = document.getElementById("nobutton5");
const nobutton6 = document.getElementById("nobutton6");
const nobutton7 = document.getElementById("nobutton7");
const text = document.getElementById("text");
function cry(){
    img.src = "cry1.gif" 
    nobutton1.remove();
    text.textContent = "Please!"
    nobutton2.textContent = "Noo"   
}
function cryagain(){
    img.src = "cry2.gif";
    text.textContent = "You don't like me?";
    nobutton2.remove();
    nobutton3.textContent = "Nah Bro";
}
function cryagain2(){
    img.src = "cry3.gif";
    text.textContent = "I Beg You. Please! Be my girlfriend";
    nobutton3.remove();
    nobutton4.textContent = "Sorry! But i can't";
}
function cryagain3(){
    img.src = "cry4.gif";
    text.textContent = "I can't live without you pleaseeee";
    nobutton4.remove();
    nobutton5.textContent = "No! that's fianl"
}
function cryagain4(){
    img.src = "cry5.webp";
    text.textContent = "So not accepting my proposal? Wait and see what i will do."
    nobutton5.remove();
    nobutton6.textContent = "No means Noooooooooooo";
}
function cryagain5(){
    img.src = "cry6.gif";
    text.textContent = "I loveeeeeeeeeeee Youuuuuuuuuuuuuuu mero mutuu!";
    nobutton6.remove();
    nobutton7.textContent = "Unfortunately! You have no option to reject this guy";
}






















