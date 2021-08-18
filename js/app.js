function getPin() {
    const pin = Math.round(Math.random() * 10000);
    //3 digit jate na ashe tar jonno length checking
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    // console.log(pin);

    document.getElementById('pin-input').value = pin;
}

document.getElementById('key-pad').addEventListener('click',
    function (event) {
        const number = event.target.innerText;
        const calcInput = document.getElementById('typed-numbers');
        if (isNaN(number)) {
          if(number == 'C'){
            calcInput.value = '';
          }
        } else {
            
            const previousNumber = calcInput.value;
            const newNumber = previousNumber + number;
            calcInput.value = newNumber;
        }

    });

function verifyPin(){
    const generatedPin = document.getElementById('pin-input').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const ErrorMessage = document.getElementById('notify-fail');

    if(generatedPin == typedPin){
        
        successMessage.style.display = 'block';
        ErrorMessage.style.display = 'none';
    }
    else{
        successMessage.style.display = 'none';
        ErrorMessage.style.display = 'block';
    }
}



