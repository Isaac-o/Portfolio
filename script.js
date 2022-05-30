const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
// event listener and function for nav item selection
menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
})

// event listener and function for flipping dev card
const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
});