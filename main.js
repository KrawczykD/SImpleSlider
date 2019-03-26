const slideList = [{
 img: "images/img1.jpg",
 text: 'use the arrow keys to change the image'
},
{
 img: "images/img2.jpg",
 text: 'use the arrow keys to change the image'
},
{
 img: "images/img3.jpg",
 text: 'use the arrow keys to change the image'
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]
// Interfejs
const time = 5000;
let active = 0;

// Implement

const changeDot = () => {
 const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
 dots[activeDot].classList.remove('active');
 dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
 if (active === slideList.length) {
  active = 0;
 }
 image.src = slideList[active].img;
 h1.textContent = slideList[active].text;
 changeDot()
}
let Inter = setInterval(changeSlide, time)


function keyChangeSlide(e){
if(e.keyCode === 37){
    clearInterval(Inter);
        Inter = setInterval(changeSlide, time);
        active--;
        if(active < 0)
        {
            active = 2;
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot()
        } else {
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot()
        }
    }
    
    else if(e.keyCode === 39){
    clearInterval(Inter);
        Inter = setInterval(changeSlide, time);
        changeSlide();

}
}


// keyChangeSlide function.
window.addEventListener('keydown', keyChangeSlide)
