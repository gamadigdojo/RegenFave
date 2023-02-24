const inputField = document.getElementById('Name'); 

function validateInput() {
  const inputValue = inputField.value.trim();

  if (inputValue === '') {
    inputField.setCustomValidity('Name cannot be empty');
    return false;
  }

  if (inputValue.length < 3) {
    inputField.setCustomValidity('Input must contain at least three characters');
    return false;
  }

  inputField.setCustomValidity('');
  return true;
}

inputField.addEventListener('blur', validateInput); 

const inputEmail = document.getElementById('email');

function validateInput() {
  const inputValue = inputEmail.value.trim();

  if (inputValue === '') {
    inputEmail.setCustomValidity('Email cannot be empty');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(inputValue)) {
    inputEmail.setCustomValidity('Please enter a valid email address');
    return false;
  }

  inputEmail.setCustomValidity('');
  return true;
}

inputEmail.addEventListener('blur', validateInput); 

const textareaField = document.getElementById('messsage'); 

function validateTextarea() {
  const textareaValue = textareaField.value.trim();

  if (textareaValue === '') {
    textareaField.setCustomValidity('Message cannot be empty');
    return false;
  }

  const words = textareaValue.split(' ');
  if (words.length < 3) {
    textareaField.setCustomValidity('Message must contain at least three words');
    return false;
  }

  textareaField.setCustomValidity('');
  return true;
}

textareaField.addEventListener('blur', validateTextarea); 

