$coverItems=document.querySelectorAll("#header-section .cover-items li");
for (var i = $coverItems.length - 1; i >= 0; i--) {

	$coverItems[i].style.left = 100/11*i+10+'%'
}