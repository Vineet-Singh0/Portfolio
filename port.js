var typed= new Typed(".text",{
    strings:["Frontend Developer","Web Developer","Data Scientist","Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 150,
    loop: true
}
);

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.left="210px";
}
function closemenu(){
    sidemenu.style.left="-210px";
}
