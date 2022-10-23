/* - - - - Navigation scroll effect - - - - */
const headerScroll = () => {
    const headerElement = document.querySelector(".header")
    this.scrollY >= 30 ? headerElement.classList.add("active") : headerElement.classList.remove("active")
}

window.addEventListener("scroll", headerScroll)


/* - - - - Hamburger menu toggle - - - - */
const menuToggler = document.querySelector("#menu-toggler")
const navigationContainer = document.querySelector(".navigation-container")

const toggleMenu = () => {
    navigationContainer.classList.toggle("open")
}

menuToggler.addEventListener("click", toggleMenu)


/* - - - - Close when menu links clicked - - - - */
const listItemsToggle = (e) => {
    if ((e.target.classList.contains("navbar__list-item")) || (e.target.classList.contains("navbar__list-link"))) {
        navigationContainer.classList.remove("open")
    }
}

window.addEventListener("click", listItemsToggle)