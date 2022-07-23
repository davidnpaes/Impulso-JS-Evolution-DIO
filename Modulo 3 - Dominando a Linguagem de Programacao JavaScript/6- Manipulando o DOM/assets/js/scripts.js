function changeMode(){
    const selector = document.querySelectorAll('h1, footer, button, body');

    for (let i = 0; i < selector.length; i++){
        selector[i].classList.toggle("dark-mode");
    }
  
}
