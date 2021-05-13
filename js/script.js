$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
    });
});
let i=0;
       let image=document.getElementById("images");
       let imgs=new Array('images/menu.png','images/active_menu.png');
       function imgsrc() {
           i++;i%=imgs.length;
           image.src = imgs[i];
};
