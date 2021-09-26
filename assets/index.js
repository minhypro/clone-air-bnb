const headerSearch = document.querySelector('.header__search');
const searchInput = document.querySelector('.search__input input');
const header = document.querySelector('.header');
const headerAccounts = document.querySelectorAll('.header__account');
const accountMenu = document.querySelector('.account__menu');


headerSearch.addEventListener('click', () => {
    searchInput.focus();
})

window.addEventListener('scroll', () => {
    let pos = window.scrollY;
    if (pos <= 80) {
        header.style.visibility = "hidden";
        accountMenu.style.top = `${108-pos}px`;
        // closeModal.style.top = `${78-pos}px`;
    }
    else {
        header.style.visibility = "visible";
        accountMenu.style.top = "50px";
        // closeModal.style.top = "20px";
    }
})

headerAccounts.forEach(headerAccount => {
    headerAccount.addEventListener('click', () => {
        accountMenu.classList.toggle("visible")
    })
});
