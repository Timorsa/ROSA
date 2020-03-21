const selectElement = element => {
	return document.querySelector(element);
};

const body = selectElement('body');
const menuToggler = selectElement('.menu-toggle');

menuToggler.addEventListener('click', () => {
	body.classList.toggle('open');
});
