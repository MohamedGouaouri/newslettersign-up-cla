


document.getElementById("subscribe-btn").addEventListener("click", onSubscribe);
document.getElementById("email-input").addEventListener("input", onInput);
document.getElementById("dismiss-btn").addEventListener("click", onDismiss);


function onSubscribe(event) {
    let emailElement = document.getElementById("email-input");
    let email = emailElement.value
    // Testing email format
    let isEmailFormatCorrect = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    if (!isEmailFormatCorrect) {
        // Show red
        console.log(email)

        emailElement.classList.add('email-invalid');
        document.querySelector("#is-required").style.display = 'inline';
        return 
    }
    onSuccess()
}

function onInput(event) {
    let email = document.getElementById("email-input");
    email.classList.remove('email-invalid');
    document.querySelector("#is-required").style.display = 'none';

}

function onDismiss(event) {
    document
        .querySelector('.success-message-container')
        .style
        .display = 'none'
    
    document
        .querySelector('.signup-form-container')
        .style
        .display = 'flex'
}

function onSuccess() {
    document
        .querySelector('.success-message-container')
        .style
        .display = 'block'
    
    document
        .querySelector('.signup-form-container')
        .style
        .display = 'none'
}