/* - - - - Navigation scroll effect - - - - */
const headerScroll = () => {
    const headerElement = document.querySelector(".header")
    this.scrollY >= 30 ? headerElement.classList.add("active") : headerElement.classList.remove("active")
}

window.addEventListener("scroll", headerScroll)

const navigationScroll = () => {
    const navigationContainer = document.querySelector(".navigation-container")
    this.scrollY >= 30 ? navigationContainer.classList.add("active") : navigationContainer.classList.remove("active")
}

window.addEventListener("scroll", navigationScroll)

/* - - - - Hamburger menu toggle - - - - */
const menuToggler = document.querySelector("#menu-toggler")
const navigationContainer = document.querySelector(".navigation-container")
const barTop = document.querySelector(".bar-top")
const barMid = document.querySelector(".bar-mid")
const barBottom = document.querySelector(".bar-bottom")
const hamburgerMenu = document.querySelector(".hamburger-menu")

const toggleMenu = () => {
    navigationContainer.classList.toggle("open")
    barTop.classList.toggle("active")
    barMid.classList.toggle("active")
    barBottom.classList.toggle("active")
    hamburgerMenu.classList.toggle("active")
}

menuToggler.addEventListener("click", toggleMenu)


/* - - - - Close when menu links clicked - - - - */
const listItemsToggle = (e) => {
    if ((e.target.classList.contains("navbar__list-item"))
        || (e.target.classList.contains("navbar__list-link"))) {
        navigationContainer.classList.remove("open")
        barTop.classList.remove("active")
        barMid.classList.remove("active")
        barBottom.classList.remove("active")
        hamburgerMenu.classList.remove("active")
    }
}

window.addEventListener("click", listItemsToggle)


/* - - - - Swiper - - - - */
const swiper = new Swiper(".my-swiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    mousewheel: true,
    grabCursor: true,
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})


