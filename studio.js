const hamburger = document.getElementById('menu');
const closeIcon = document.querySelector('.icon-close');
const modalContainer = document.querySelector('.sidebar-container');

//display the menu when menu icon is clicked


if(hamburger){
  hamburger.onclick = function(){
  modalContainer.style.display = 'block';
  }
  }
  

  //closing the menu, if close icon is clicked
  if(closeIcon){
  closeIcon.onclick = function(){
  modalContainer.style.display = 'none';
  }
  
  }
  //closing the menu, if anywhere on the window is clicked
  if(closeIcon){
  window.onclick = function(event){
    if(event.target === modalContainer){
    modalContainer.style.display = 'none';
  }}
  
  }
  
  window.onresize = function(){
    if(closeIcon){
      if(window.innerWidth >= 375){
      modalContainer.style.display = 'none';
    } 
    }
    
  }
  window.onload = function(){
    if(closeIcon){
      modalContainer.style.display = 'none';
    } 
    }
  