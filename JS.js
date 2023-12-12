   const anchors = document.querySelectorAll('a[href*="#"]')

   for (let anchor of anchors) {
      anchor.addEventListener("click",function(event){
         event.preventDefault();
         const blockID = anchor.getAttribute('href')
         document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
         })
      })
   }
   alert("С Наступающим праздником!")
   document.querySelector('.right-btn').onclick = function () {
      this.style.background = 'blue';}
      
         document.querySelector('.button').onclick = function () {
            this.style.background = 'blue';}

            