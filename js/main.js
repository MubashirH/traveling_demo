window.onload = mainFunction()


function mobileMenuTransition() {
    const mobileMenu = document.querySelector('.mobile_menu_list')
    const humberger = document.querySelector('.humberger_icon')
    const bodyWrapper = document.querySelector('.body_wrapper')
    let clicked = false
    humberger.addEventListener('click', function() {
        console.log(clicked)
        if (clicked) {
            humberger.src = './images/icons/menu.svg'
            mobileMenu.style.right = '-100%'
            bodyWrapper.style.filter = 'blur(0px)'
            clicked = false
        } else {
            humberger.src = './images/icons/cancel.svg'
            mobileMenu.style.right = '0px'
            bodyWrapper.style.filter = 'blur(3px)'
            clicked = true
        }
    })
}

function mainFunction() {
    const desktopMenu = document.querySelector('.menu_wrapper')
    const banner = document.querySelector('.banner_wrapper')
    let scrollValue;
    window.addEventListener('scroll', function() {
        
        scrollValue = window.pageYOffset
        if ( window.pageYOffset > scrollValue) {
            console.log('top')
            desktopMenu.style.transform = 'translateY(-100px)'
        } else {
            console.log('bto')
            desktopMenu.style.transform = 'translateY(00px)'
        }
        if ( window.pageYOffset >=  (banner.clientHeight-100)) {
            desktopMenu.style.backgroundColor = 'white'
        } else {
            desktopMenu.style.backgroundColor = 'transparent'
        }
    });

    mobileMenuTransition()
}


