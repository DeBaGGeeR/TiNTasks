function check() {
    let validation = true;
    let phoneNumberField = document.getElementById('phoneNumberInput');
    let emailField = document.getElementById('emailInput');
    let answerField = window.document.getElementById('display');

    let phoneRegex = /^[0-9]{9}$/;
    let emailRegex = /^\S+@\S+\.\S+$/;

    let phoneAnswer = phoneRegex.test(phoneNumberField.value);
    let emailAnswer = emailRegex.test(emailField.value);

    if (!phoneAnswer) {
        phoneNumberField.style.backgroundColor = "red";
        if (!emailAnswer) {
        emailField.style.backgroundColor = "red";
        answerField.textContent = "Enter valid phone number and email";
        }else{
          emailField.style.backgroundColor = "green";
        answerField.textContent = "Enter valid phone number";
        }
        validation = false;
    } else if (!emailAnswer) {
      emailField.style.backgroundColor = "green";
        emailField.style.backgroundColor = "red";
        answerField.textContent = "Enter valid email";
        validation = false;
    } else {
      emailField.style.backgroundColor = "green";
      phoneNumberField.style.backgroundColor = "green";
        answerField.textContent = "Validation is passed";
    }
    return validation + "false";

}