// cnange position desk on mobile version

let image = document.querySelector(".desk-mobile__image-down");
let tops = 205;
document
  .querySelector(".desk-mobile__button--up")
  .addEventListener("click", () => {
      if( tops < 229) {
          tops = tops + 2;
           image.style.top = `${tops}px`;
      }
   
    
  });
  


document
  .querySelector(".desk-mobile__button--down")
  .addEventListener("click", () => {
    if(tops > 160 ) {
        tops = tops - 2;
         image.style.top = `${tops}px`;
    }
    
  });
  

  // cnange position desk on desktop version


  let imageDesktop = document.querySelector(".desk__image-down");
let topsDesktop = 437;
document
  .querySelector(".desk__button--up")
  .addEventListener("click", () => {
      if( topsDesktop < 520) {
          topsDesktop = topsDesktop + 5;
          imageDesktop.style.top = `${topsDesktop}px`;
      }
   
    
  });
 


document
  .querySelector(".desk__button--down")
  .addEventListener("click", () => {
    if(topsDesktop > 350 ) {
        topsDesktop = topsDesktop - 5;
        imageDesktop.style.top = `${topsDesktop}px`;
    }
    
  });