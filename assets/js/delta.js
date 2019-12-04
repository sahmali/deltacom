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