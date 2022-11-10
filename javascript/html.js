let photo = document.querySelector('.active-photo')
let leftBtn=document.querySelector('#left-btn');
let rightBtn=document.querySelector('#right-btn');
let mainPhoto = 'http://127.0.0.1:5500/assets/images/fairy-tale-photo.svg';
let secondPhoto = 'http://127.0.0.1:5500/assets/images/fairy-tale-photo2.svg';
let thirdPhoto= 'http://127.0.0.1:5500/assets/images/fairy-tale-photo3.svg';

console.log(photo.src);
if(photo.src==mainPhoto){
    rightBtn.style.display='none'
}   else {
    rightBtn.style.display='block'
}
function slideLeft() {
    if(photo.src==mainPhoto){
        photo.src=secondPhoto;
    }   else if(photo.src==secondPhoto){
        photo.src=thirdPhoto;
    }
}
function slideRight() {
    if(photo.src==thirdPhoto){
        photo.src=secondPhoto;
    }   else if(photo.src==secondPhoto){
        photo.src=mainPhoto;
    }
}



leftBtn.addEventListener('click', slideLeft);
rightBtn.addEventListener('click', slideRight)