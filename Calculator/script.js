let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Function to handle input from buttons
arr.forEach(button => {
    button.addEventListener('click', (i) => {
        if (i.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (e) {
                input.value = "Error";
                string = "";
            }
        }
        else if (i.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (i.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += i.target.innerHTML;
            input.value = string;
        }
    });
});

// Function to restrict input to numeric characters and valid operators only
input.addEventListener('input', (e) => {
    let validCharacters = /[0-9+\-*/.]/g;
    let newValue = e.target.value;
    if (!validCharacters.test(newValue)) {
        e.target.value = newValue.replace(/[^0-9+\-*/.]/g, '');
        string = e.target.value;
    }
});
