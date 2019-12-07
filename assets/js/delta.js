$coverItems=document.querySelectorAll("#header-section .cover-items li");
for (var i = $coverItems.length - 1; i >= 0; i--) {

	$coverItems[i].style.left = 100/11*i+10+'%'
}




////////lightbox js
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.see-img-btn')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('lightactive')
    const img = document.createElement('img')
    img.src = image.getAttribute('imagesrc')
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('lightactive')
})




/////product-info accordion js

const accItem = document.getElementsByClassName('accordionItem');
const accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.parentNode.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem accClose';
            console.log(this.parentNode.parentNode.parentNode.className)
        }
        if (itemClass == 'accordionItem accClose') {
            this.parentNode.parentNode.parentNode.className = 'accordionItem accOpen';

        }
    }




/////NAV-BG JS
    const navbg=document.querySelector(".nav-bg");
    const fullNav=document.querySelector(".full-nav");
    const bgfill=document.querySelector(".bgfill")
    console.log(navbg.clientHeight)
    
    console.log(window.scr)
            fullNav.style.bottom =navbg.clientHeight/10+"px"

    function reportWindowSize() {
        fullNav.style.bottom =navbg.clientHeight/10+"px"

  
}

window.onresize = reportWindowSize;



const navSlide=()=>{
    ///menu open
    const hamburger= document.querySelector(".hamburger");
    const hamNav=document.querySelector(".ham-links");
    const hamLinks=document.querySelectorAll('.ham-links li');

    hamburger.addEventListener('click', ()=>{
            ///menu open

        hamNav.classList.toggle("ham-nav-active");

        ///hamburger animation
        hamburger.classList.toggle('ham-toggle');


        ///hamlinks fade animation
        hamLinks.forEach( function(element, index) {
            if (element.style.animation) {
                element.style.animation = ''
            }
            else{
                element.style.animation = `hamLinkFade 0.5s ease forwards ${index/7+0.5}s`
            }
        });

    })
}
navSlide();

////ingredients accordion js

const catName  = document.getElementsByClassName('category-name');
    for (i = 0; i < catName.length; i++) {
        catName[i].addEventListener('click', toggleCat, false);
    }
    function toggleCat() {
        const mainItemClass = this.className;
        
        for (i = 0; i < catName.length; i++) {
            catName[i].className = 'category-name accClose';
        }
        if (mainItemClass == 'category-name accClose') {
            this.className= 'category-name accOpen';

        }
    }
