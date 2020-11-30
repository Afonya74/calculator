const buttons = document.querySelectorAll('.btn');
const indicator = document.querySelector('.indicator');
const signButtons = document.querySelectorAll('.sign_btn');
const equButton = document.querySelector('.equ_btn');

const calc_functions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '÷': (a, b) => a / b,
    '×': (a, b) => a * b
};

(() => {
    buttons.forEach(button => button.addEventListener('click', () => button.textContent === 'C' ? indicator.textContent = '0' : indicator.textContent == 'Error' || indicator.textContent == '0' ? indicator.textContent = button.textContent : indicator.textContent += button.textContent));
    signButtons.forEach(signButton => signButton.addEventListener('click', () => indicator.textContent += ' ' + signButton.textContent + ' '));
    equButton.addEventListener('click', calc);
})();

function calc() {
    let temp = indicator.textContent.split(' ').filter(item => item != '');
    let numbers = temp.filter(item => !isNaN(item));
    let signs = temp.filter(item => isNaN(item));
    let result = null;

    if (numbers.length <= signs.length) {
        indicator.textContent = 'Error';
        return -1;
    } else {
        result = numbers[0];
        for (let i = 0; i < signs.length; i++) {;
            result = calc_functions[signs[i]](Number(result), Number(numbers[i + 1]));
        }
        indicator.textContent = result;
    }
}