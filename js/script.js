const menuButton = document.querySelector(".menu-toggle");

const mainNav = document.querySelector(".main-nav");

const sndForm = document.querySelector(".contact-form-box")

const formStatus = document.querySelector(".form-status");

menuButton.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");

    if(isOpen){
        menuButton.textContent = "×";
    }else{
        menuButton.textContent = "☰";
    }

    menuButton.setAttribute("aria-expanded", isOpen);
});

if(sndForm){
    sndForm.addEventListener("submit", function(event) {
        event.preventDefault();
        formStatus.textContent = "Demo complete! In a live site, your message would be submitted here.";
        sndForm.reset();
    });
}
