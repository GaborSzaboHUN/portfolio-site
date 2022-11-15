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
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
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


/* - - - - Portfolio Component - - - - */
/* 
const portfolioCardComponent = (source) => {
    return `
    <div class="swiper-slide">
        <div class="swiper-overlay">
            <button class="btn-show-more">Show more</button>
        </div>
        <img src=${source} alt="">
    </div>
    `
}

const portfolioLoadEvent = () => {
    const swiperWrapper = document.getElementById("swiper-wrapper")

    for (project of portfolio) {
        swiperWrapper.insertAdjacentHTML("beforeend", portfolioCardComponent(project.imgLink))
    }
}
window.addEventListener("load", portfolioLoadEvent)
 */

/* - - - - Web Knowledge Component - - - - */
const webKnowledgeCardComponent = (title, icon, experience) => {
    return `
        <div class="skill-container web">
            <p class="skill-name">${title}</p>
            ${icon}
            <div class="xp-level ${experience}"></div>
            <div class="reference-bar"></div>
        </div>
    `
}

const webLoadEvent = () => {
    const webKnowledgeElement = document.getElementById("web-knowledge")

    for (webSkill of webSkills) {

        webKnowledgeElement.insertAdjacentHTML("beforeend", webKnowledgeCardComponent(webSkill.title, webSkill.icon, webSkill.experience))
    }

}

window.addEventListener("load", webLoadEvent)



/* - - - - Design Knowledge Component - - - - */
const designKnowledgeCardComponent = (title, experience) => {
    return `
        <div class="skill-container design">
            <p class="design-skill-name">${title}</p>
            <div class="xp-level ${experience}"></div>
            <div class="reference-bar"></div>
        </div>
    `
}

const designLoadEvent = () => {
    const designKnowledgeElement = document.getElementById("design-knowledge")

    for (designSkill of designSkills) {

        designKnowledgeElement.insertAdjacentHTML("beforeend", designKnowledgeCardComponent(designSkill.title, designSkill.experience))
    }

}

window.addEventListener("load", designLoadEvent)