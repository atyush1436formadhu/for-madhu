
let photos = [

"images/IMG-20260110-WA0017.jpg",

"images/IMG_20260725_210228.jpg",

"images/IMG_20260725_210908.jpg",

"images/IMG_20260725_211330.jpg",

"images/Snapchat-1807302573.jpg",

"images/Snapchat-789172147.jpg",

"images/file_000000005e1c71fa9b9fbc840b4230ce.png",

"images/photol.jpg"

];


let current = 0;


let photo = document.getElementById("photo");


function start(){

document.querySelector(".intro").style.display="none";

document.getElementById("page").style.display="block";

}


function playMusic(){

let music=document.getElementById("music");

music.play();

}



setInterval(()=>{


if(photo){

photo.style.opacity="0";


setTimeout(()=>{

current++;

if(current >= photos.length){

current=0;

}


photo.src=photos[current];


photo.style.opacity="1";


},700);


}


},4000);
