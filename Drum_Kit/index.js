w_button=document.querySelector(".w");
a_button=document.querySelector(".a");
s_button=document.querySelector(".s");
d_button=document.querySelector(".d");
j_button=document.querySelector(".j");
k_button=document.querySelector(".k");
l_button=document.querySelector(".l");

w_button.addEventListener("click",click_music)

// drum=document.querySelectorAll(".drum")
// for(var i=0;i<drum.length;i++)
// {
// drum[i].addEventListener("click",click_music);
// }


function click_music()
{
  
    var audio1=new Audio("sounds/crash.mp3");
    audio1.play();
}


// w_button.setAttribute()