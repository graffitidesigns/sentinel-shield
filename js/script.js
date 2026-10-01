const menuButton = document.querySelector(".menu-toggle");

const mainNav = document.querySelector(".main-nav");

menuButton.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");

    if(isOpen){
        menuButton.textContent = "×";
    }else{
        menuButton.textContent = "☰";
    }

    menuButton.setAttribute("aria-expanded", isOpen);
});

