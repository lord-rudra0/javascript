// w_button=document.querySelector(".w");
// a_button=document.querySelector(".a");
// s_button=document.querySelector(".s");
// d_button=document.querySelector(".d");
// j_button=document.querySelector(".j");
// k_button=document.querySelector(".k");
// l_button=document.querySelector(".l");

// w_button.addEventListener("click",click_music)

drum=document.querySelectorAll(".drum").length;
for(var i=0;i<drum;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var inner=this.innerHTML;
click_key(inner);
ani_button(inner);

});
}

document.addEventListener("keypress",function(e)
{
    click_key(e.key);
    ani_button(e.key);
}
);

function click_key(key)
{
    switch(key){
        case "w":
            var audio1=new Audio("sounds/crash.mp3");
            audio1.play();
            break;
        
        case "a":
            var audio2=new Audio("sounds/kick-bass.mp3");
            audio2.play();
            break;
        
        case "s":
            var audio3=new Audio("sounds/snare.mp3");
            audio3.play();
            break;
        
        case "d":
            var audio4=new Audio("sounds/tom-1.mp3");
            audio4.play();
            break;
        
        case "j":
            var audio5=new Audio("sounds/tom-2.mp3");
            audio5.play();
            break;
        case "k":
            var audio6=new Audio("sounds/tom-3.mp3");
            audio6.play();
            break;
        
        case "l":
            var audio7=new Audio("sounds/tom-4.mp3");
            audio7.play();
            break;
        
        default:
            console.log("click a button")
        }
}

function ani_button(current_key)
{
var activeButton=document.querySelector("."+current_key)

activeButton.classList.add("anim_button");

window.setTimeout(function(){
    activeButton.classList.remove("anim_button")
},100)
}

// function click_music()
// {
  
//     var audio1=new Audio("sounds/crash.mp3");
//     audio1.play();
// }
// w_button.setAttribute()