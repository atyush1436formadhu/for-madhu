let pages = document.querySelectorAll(".page");

let currentPage = 0;


function nextPage(){

pages[currentPage].classList.remove("active");

currentPage++;


if(currentPage >= pages.length){

currentPage = pages.length - 1;

}


pages[currentPage].classList.add("active");


}



function playMusic(){

let music = document.getElementById("music");

music.play();

}




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


let photoIndex = 0;


let photo = document.getElementById("photo");



setInterval(()=>{


if(photo){


photo.style.opacity="0";


setTimeout(()=>{


photoIndex++;


if(photoIndex >= photos.length){

photoIndex = 0;

}


photo.src = photos[photoIndex];


photo.style.opacity="1";


},700);


}


},4000);
