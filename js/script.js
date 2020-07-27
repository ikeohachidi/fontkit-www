(function () {
    const navbar = document.getElementsByClassName("header")[0];

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        if (scrollPos > 0) {
            navbar.classList.add("scroll");
        } else if (scrollPos == 0) {
            navbar.classList.remove("scroll");
        }
    })
})();