var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    // If scrolling down, hide header; if scrolling up, show header.
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("main-header").style.top = "0";
    }
    else {
        document.getElementById("main-header").style.top = "-75px";
    }
    prevScrollPos = currentScrollPos;

    // If scroll is not near the top, change colors.
    if (document.documentElement.scrollTop > 150) {
        document.getElementById("main-header").className = "main-header";
        document.getElementById("main-nav__contact").className = "main-nav__contact";
    }
    else {
        document.getElementById("main-header").className = "";
        document.getElementById("main-nav__contact").className = "";
    }
}

function mobileNav() {
    document.getElementById("hamburger").classList.toggle("open");
    document.getElementById("main-nav").classList.toggle("sidebar");
}