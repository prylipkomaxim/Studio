const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuBodyBg = document.querySelector('.menu__body-bg');
const body = document.body;

if(menuBody && menuIcon) {
    menuIcon.addEventListener('click', ()=>{
        menuIcon.classList.toggle('burger-active');
        menuBody.classList.toggle('burger-active');
        menuBodyBg.classList.toggle('burger-active');
        body.classList.toggle('burger-active');
    })

    if(menuBodyBg){
        menuBodyBg.addEventListener('click', () => {
            menuIcon.classList.remove('burger-active');
            menuBody.classList.remove('burger-active');
            menuBodyBg.classList.remove('burger-active');
            body.classList.remove('burger-active');
        })
    }

    window.addEventListener('resize', () => {
        const windowWidth = Math.max(document.documentElement.clientWidth);
        if(windowWidth > 837) {
            menuIcon.classList.remove('burger-active');
            menuBody.classList.remove('burger-active');
            menuBodyBg.classList.remove('burger-active');
            body.classList.remove('burger-active');
        }
    })

    
}