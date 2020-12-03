let bloki = document.querySelectorAll('.blok');
bloki.forEach(el=>{
    
if(el.id==='img1')el.style. backgroundImage='url("img/img1.jpg")'
if(el.id==='img2')el.style. backgroundImage='url("img/img2.jpg")'
if(el.id==='img3')el.style. backgroundImage='url("img/img3.jpg")'
if(el.id==='img4')el.style. backgroundImage='url("img/img4.jpg")'
if(el.id==='img5')el.style. backgroundImage='url("img/img5.jpg")'
el.addEventListener('click',(e)=>{
   removeActiveClasses()
   e.target.classList.add('active');
})
})

function removeActiveClasses() {
  bloki.forEach(panel => {
       panel.classList.remove('active')
   })
}
   
        
  