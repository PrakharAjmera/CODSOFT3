const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        
        if (buttonText === 'C') {
            display.value = '';
        } else if (buttonText === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += buttonText;
        }
    });
});