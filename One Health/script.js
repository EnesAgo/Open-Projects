const navUl = document.querySelector('.header .bot ul .secLi');
const navLis = document.querySelectorAll('.header .bot ul .secLi ul li a');
const menuBut = document.querySelector('#openNav');
const doctors = document.querySelectorAll('#doctors li');
const leftImage = document.querySelector('#imgLeft');
const rightImage = document.querySelector('#imgRight');

const image = [
    'photos/doctor1.PNG',
    'photos/doctor2.PNG',
    'photos/doctor3.PNG',
    'photos/doctor.png'
];

let currentImage = 0;
let lasImage = 1;
let thirdImage = 2;

window.onload = function(){
    navLis[0].style.color = 'rgba(49, 214, 166, 1)';
}

function changeColor(e) {
    navLis.forEach(elt => {
        elt.style.color = 'rgba(0, 0, 0, .5)';
    });
    e.style.color = 'rgba(49, 214, 166, 1)';
    navUl.classList.toggle('acti');

}

menuBut.addEventListener("click", () => {
    navUl.classList.toggle('acti');
});

rightImage.addEventListener('click', () => {

    if(currentImage == image.length - 3){
    currentImage++;
    lasImage++;
    thirdImage=0;
    document.getElementById('imageOne').src = image[currentImage];
    document.getElementById('imageTwo').src = image[lasImage];
    document.getElementById('imageThree').src = image[thirdImage];

}
    else if(currentImage == image.length - 2){
    currentImage++;
    lasImage=0;
    thirdImage++;
    document.getElementById('imageOne').src = image[currentImage];
    document.getElementById('imageTwo').src = image[lasImage];
    document.getElementById('imageThree').src = image[thirdImage];

}
    else if(currentImage == image.length - 1){
    currentImage=0
    lasImage++;
    thirdImage++;
    document.getElementById('imageOne').src = image[currentImage];
    document.getElementById('imageTwo').src = image[lasImage];
    document.getElementById('imageThree').src = image[thirdImage];

}
    else{
    currentImage++;
    lasImage++;
    thirdImage++;
    document.getElementById('imageOne').src = image[currentImage];
    document.getElementById('imageTwo').src = image[lasImage];
    document.getElementById('imageThree').src = image[thirdImage];
}

});

leftImage.addEventListener('click', () => {

    if(currentImage == 0){
    currentImage=3;
    lasImage--;
    thirdImage--;
    document.getElementById('imageOne').src = image[currentImage];
    document.getElementById('imageTwo').src = image[lasImage];
    document.getElementById('imageThree').src = image[thirdImage];

}
    else if(currentImage == image.length-2){
    currentImage--;
    lasImage--;
    thirdImage=3;
    document.getElementById('imageOne').src = image[currentImage];
    document.getElementById('imageTwo').src = image[lasImage];
    document.getElementById('imageThree').src = image[thirdImage];

}
    else if(currentImage == image.length-1){
    currentImage--;
    lasImage=3;
    thirdImage--;
    document.getElementById('imageOne').src = image[currentImage];
    document.getElementById('imageTwo').src = image[lasImage];
    document.getElementById('imageThree').src = image[thirdImage];

}
    else{
    currentImage--;
    lasImage--;
    thirdImage--;
    document.getElementById('imageOne').src = image[currentImage];
    document.getElementById('imageTwo').src = image[lasImage];
    document.getElementById('imageThree').src = image[thirdImage];
}

});
