var sideMenu=document.getElementById("sideMenu");

function openMenu(){
    sideMenu.style.right="0";
}
function closeMenu(){
    sideMenu.style.right="-200px";
}

const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
loop: true,

pagination: {
el: '.swiper-pagination',
clickable:true,
},

navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
});