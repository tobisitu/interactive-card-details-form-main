var form = document.getElementById("cardForm");
form.addEventListener('submit', handleForm);
// 
var cardDisplayForm = document.getElementById("cardDisplayForm");

function onCardHolderInputChange() {
    let input = document.getElementById('cardholder').value;
    document.getElementById(`cardholder-value`).value = input;
}

function onCardNumberInputChange() {
    let input = document.getElementById('cardnumber');
    input.value = input.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    document.getElementById(`cardnumber-value`).value = input.value;
}

function onCardExpMonthInputChange() {
    let input = document.getElementById('expdate-mm');
    document.getElementById(`expdate-mm-value`).value = input.value;
}

function onCardExpYearInputChange() {
    let input = document.getElementById('expdate-yy');
    document.getElementById(`expdate-yy-value`).value = input.value;
}

function onCVCInputChange() {
    let input = document.getElementById('cvc');
    document.getElementById(`cvc-value`).value = input.value;
}

function validateCardHolder() {
    let input = document.getElementById('cardholder').value;
    // document.getElementById(`cardholder-value`).value = input;

    if (input == ''){
        let error = document.getElementById('cardholder-error');
        error.style.display = 'block';

        let inputbox = document.getElementById('cardholder');
        inputbox.style.borderColor = 'red';  
        return false;
    } else {
        let error = document.getElementById('cardholder-error');
        error.style.display = 'none';

        let inputbox = document.getElementById('cardholder');
        inputbox.style.borderColor = 'hsl(278, 68%, 11%)';  
        return true;
    }
}

function validateCardNumber() {
    let input = document.getElementById('cardnumber');
    
    // input.value = input.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    // document.getElementById(`cardnumber-value`).value = input.value;

    if(input.value.length < 19) {
        let error = document.getElementById('cardnumber-error');
        error.style.display = 'block';

        let inputbox = document.getElementById('cardnumber');
        inputbox.style.borderColor = 'red';  
        return false;
    } else {
        let error = document.getElementById('cardnumber-error');
        error.style.display = 'none';

        let inputbox = document.getElementById('cardnumber');
        inputbox.style.borderColor = 'hsl(278, 68%, 11%)';  
        return true;
    }
}

function validateCardExpMonth() {
    let input = document.getElementById('expdate-mm');
    // document.getElementById(`expdate-mm-value`).value = input.value

    if (input.value == ''){
        let error = document.getElementById('expdate-mm-error-blank');
        error.style.display = 'block';

        let inputbox = document.getElementById('expdate-mm');
        inputbox.style.borderColor = 'red';  
        return false;
    } else if ((input.value < 01) || (input.value > 12) || (input.value.length > 2)){
        let error = document.getElementById('expdate-mm-error-invalid');
        error.style.display = 'block';

        let inputbox = document.getElementById('expdate-mm');
        inputbox.style.borderColor = 'red';  
        return false;
    }else {
        let error1 = document.getElementById('expdate-mm-error-blank');
        error1.style.display = 'none';
        let error2 = document.getElementById('expdate-mm-error-invalid');
        error2.style.display = 'none';

        let inputbox = document.getElementById('expdate-mm');
        inputbox.style.borderColor = 'hsl(278, 68%, 11%)';  
        return true;
    }
}

function validateCardExpYear() {
    let input = document.getElementById('expdate-yy');
    // document.getElementById(`expdate-yy-value`).value = input.value

    if (input.value == ''){
        let error = document.getElementById('expdate-yy-error-blank');
        error.style.display = 'block';

        let inputbox = document.getElementById('expdate-yy');
        inputbox.style.borderColor = 'red';  
        return false;
    } else if ((input.value < 22) || (input.value.length > 2)){
        let error = document.getElementById('expdate-yy-error-invalid');
        error.style.display = 'block';

        let inputbox = document.getElementById('expdate-yy');
        inputbox.style.borderColor = 'red';  
        return false;
    }else {
        let error1 = document.getElementById('expdate-yy-error-blank');
        error1.style.display = 'none';
        let error2 = document.getElementById('expdate-yy-error-invalid');
        error2.style.display = 'none';

        let inputbox = document.getElementById('expdate-yy');
        inputbox.style.borderColor = 'hsl(278, 68%, 11%)';  
        return true;
    }
}

function validateCVC() {
    let input = document.getElementById('cvc');
    // document.getElementById(`cvc-value`).value = input.value;

    if(!input.value){
        let error = document.getElementById('cvc-error-blank');
        error.style.display = 'block';

        let inputbox = document.getElementById('cvc');
        inputbox.style.borderColor = 'red';  
        return false;
    } else  {
        let error1 = document.getElementById('cvc-error-blank');
        error1.style.display = 'none';

        if((input.value.length < 3) || (input.value.length > 3)) {
            let error = document.getElementById('cvc-error-invalid');
            error.style.display = 'block';
    
            let inputbox = document.getElementById('cvc');
            inputbox.style.borderColor = 'red';  
            return false;
        }else {
            let error2 = document.getElementById('cvc-error-invalid');
            error2.style.display = 'none';
    
            let inputbox = document.getElementById('cvc');
            inputbox.style.borderColor = 'hsl(278, 68%, 11%)';  
            return true;
        }
    }
}

function handleForm(event) { 
    event.preventDefault(); 
    let cardHolder =  validateCardHolder();
    let cardNumber = validateCardNumber();
    let expMonth = validateCardExpMonth();
    let expYear = validateCardExpYear();
    let cvc = validateCVC();
    let success = document.getElementById('success');

    if (cardHolder && cardNumber && expMonth && expYear  & cvc) {
            form.style.display = 'none'
            success.style.display = 'block'
    } else {
            success.style.display = 'none'
    }
} 

function resetForm() { 
    let success = document.getElementById('success');
    form.reset()
    success.style.display = 'none'
    form.style.display = 'block'

    cardDisplayForm.reset();
} 


