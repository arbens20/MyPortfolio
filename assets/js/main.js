
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




/*=============== active menu on scroll ===============*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });





    // keep nav
let header = document.querySelector('.header');

header.classList.toggle('sticky' , window.scrollY > 100);


// remove menu icon when scroll on phone

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR TO HEADER ===============*/


/*=============== EMAIL JS ===============*/


// darkmode

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun')
    document.body.classList.toggle('dark-mode')
};

scrollReveal({
    reset: true,
    distance : '80px',
    duration : 2000,
    delay : 200
});


scrollReveal().reveal('.home-content, .heading' , {origin: 'top'});

scrollReveal().reveal('.home-img img, .services-container, .portfolio-box, contact form' , {origin: 'bottom'});
