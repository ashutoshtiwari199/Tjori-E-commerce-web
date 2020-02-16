const tl = new TimelineMax();

let deviceScreenHeight = window.innerHeight;
let scrolledScreenValue = 0;
let floatingIcon = document.querySelector('#floatingButton');
let crossOfNav = document.querySelector('#crossOfNav');
let menuIcon = document.querySelector('#menuIcon');

window.addEventListener('scroll', function(e){
    scrolledScreenValue = window.scrollY;
    if(scrolledScreenValue > window.innerHeight){
        floatingIcon.style.display = 'flex';
    }
    else{
        floatingIcon.style.display = 'none';        
    }
});

floatingIcon.addEventListener('click', function(){
    tl.fromTo('#halfscreennav', 1, {
        top: '-100vh'
    }, {
        top: '0%',
        ease: Expo.easeInOut
    })
})

menuIcon.addEventListener('click', function(){
    tl.fromTo('#halfscreennav', 1, {
        top: '-100vh'
    }, {
        top: '0%',
        ease: Expo.easeInOut
    })
})

crossOfNav.addEventListener('click', function(){
    tl.fromTo('#halfscreennav', 1, {
        top: '0%'
    }, {
        top: '-100vh',
        ease: Expo.easeInOut
    })
})