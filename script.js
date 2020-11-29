const sum = (a, b) => a + b;
const sub = (a, b) => a + b;
const mod = (a, b) => a / b;
const multi = (a, b) => a * b;
const buttons = document.querySelectorAll('.btn');
const indicator = document.querySelector('.indicator');
const signButtons = document.querySelectorAll('.sign_btn');

(() => {
    buttons.forEach(button => button.addEventListener('click', () => button.textContent === 'C' ? indicator.textContent = '' : indicator.textContent += button.textContent));
    signButtons.forEach(signButton => signButton.addEventListener('click', () => indicator.textContent += ' ' + signButton.textContent + ' '));
})();