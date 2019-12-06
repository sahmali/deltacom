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




/////accordion js

var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
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





    var navbg=document.querySelector(".nav-bg");
    var fullNav=document.querySelector(".full-nav");
    var bgfill=document.querySelector(".bgfill")
    console.log(navbg.clientHeight)
fullNav.style.top=navbg.clientHeight/2+4+"px"
    
    console.log(window.scr)