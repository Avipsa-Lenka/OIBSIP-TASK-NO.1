let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let Value = '';
for (num of buttons) {
    num.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            Value += buttonText;
            screen.value = Value;
        }
        else if (buttonText == 'C') {
            Value = "";
            screen.value = Value;
        }
        else if (buttonText == '=') {
            screen.value = eval(Value);
        }
        else {
            Value += buttonText;
            screen.value = Value;
        }

    })
}
