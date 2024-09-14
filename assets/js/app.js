//-------------------- SEARCH BUTTON START --------------------
let searchBtn = document.querySelector(".search_btn");
let searchInput = document.querySelector(".serach_input");
let closeIcon = document.querySelector(".close_icon");

searchBtn.addEventListener('click',function(){
    searchInput.classList.add('show');
    searchBtn.classList.add('hide')
})
closeIcon.addEventListener('click',function(){
    searchInput.classList.remove('show');
    searchBtn.classList.remove('hide')
})
//-------------------- SEARCH BUTTON END --------------------


// -----------------------SCROLL BOTTOM TO TOP SECTION START-----------------------
let scrollBtn = document.querySelector('.scroll');

window.addEventListener("scroll",function(){
    if(window.scrollY > 200){
        scrollBtn.classList.add('open');
    }else{
        scrollBtn.classList.remove('open');
        
    }
})
// -----------------------SCROLL BOTTOM TO TOP SECTION END-----------------------

//---------------------- NAV STICKY JS START----------------------
let scrollNav = document.querySelector('#nav');

window.addEventListener("scroll",function(){
    if(window.scrollY > 5){
        scrollNav.classList.add('sticky');
    }else{
        scrollNav.classList.remove('sticky');
        
    }
})
//---------------------- NAV STICKY JS END----------------------
