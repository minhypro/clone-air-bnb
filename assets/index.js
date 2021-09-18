const headerSearch = document.querySelector('.header__search');
const searchInput = document.querySelector('.search__input input');
const header = document.querySelector('.header');
const headerAccounts = document.querySelectorAll('.header__account');
const modal = document.querySelector('.modal');
const accountMenu = document.querySelector('.account__menu');
const closeModal = document.querySelector('.close-modal');


headerSearch.addEventListener('click', () => {
    searchInput.focus();
})

window.addEventListener('scroll', () => {
    let pos = window.scrollY;
    if (pos <= 80) {
        header.style.visibility = "hidden";
        accountMenu.style.top = `${128-pos}px`;
        closeModal.style.top = `${78-pos}px`;
    }
    else {
        header.style.visibility = "visible";
        accountMenu.style.top = "";
        closeModal.style.top = "20px";
    }
})

headerAccounts.forEach(headerAccount => {
    headerAccount.addEventListener('click', () => {
        modal.style.display = "block";
    })
});

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

closeModal.onclick = () => {
    modal.style.display = "none";
}