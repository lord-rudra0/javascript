let rand1=Math.floor(Math.random()*6+1);
let rand2=Math.floor(Math.random()*6+1);

let image1= "dice"+rand1+".png";
let image2="dice"+rand2+".png";

let image_1="images/"+image1;
let image_2="images/"+image2;


let player1=document.querySelector("img.player1");
let player2=document.querySelector("img.player2");

player1.setAttribute("src",image_1);
player2.setAttribute("src",image_2);



let refresh =document.querySelector("button");
refresh.addEventListener("click",function()
{
    location.reload();
});


if (rand1 >rand2)
    document.querySelector("h1").innerHTML="Player1 Won";

else if(rand1<rand2) 
    document.querySelector("h1").innerHTML="Player2 Won";

else
document.querySelector("h1").innerHTML="Its a Draw"
