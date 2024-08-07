const screen = document.getElementById('calculator-screen');
const buttons = document.querySelectorAll('.btn');
let screenValue = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.value;

        if (value === '=') {
            try {
             screen.value = eval(screenValue);
                screenValue = screen.value;
            } catch {
                screen.value = 'Error';
             screenValue = '';
            }
        } else if (value === 'clear') {
            screenValue = '';
            screen.value = screenValue;
        } else {
    screenValue += value;
   screen.value = screenValue;
        }
    });
});
