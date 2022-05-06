/* Set focus to ture for name */
const name = document.getElementById('name');
name.focus();

/* Hide the text field for job role */
const otherJob = document.getElementById('other-job-role');
otherJob.style.display = 'none';

/* Add event listener to show text field */
const title = document.getElementById('title');

title.addEventListener('change', function() {
  if(title.value === 'other'){
    otherJob.style.display = 'block';
  }else {
    otherJob.style.display = 'none';
  }
});

/* Add event listener for Color */
const design = document.getElementById('design');
const color = document.getElementById('color');

color.disabled = true;

design.addEventListener('change', function(){
  color.disabled = false;
  const options = document.querySelectorAll('#color option');

  if(design.value === 'js puns'){
    color.value = options[1].value;
     for(let i = 1; i < options.length; i++){
       if(i < 4){

         options[i].hidden = false;
       }else{
         options[i].hidden = true;
       }
     }
   }
  if(design.value === 'heart js') {
    color.value = options[4].value;
    for(let i = 1; i < options.length; i++){
      if(i < 4){
        options[i].hidden = true;
      }else{
        options[i].hidden = false;
      }
    }
  }
});

/* Create a function to calculate total cost */
const total = document.getElementById('activities-cost');
const activity = document.getElementById('activities-box');
let totalCost = 0;

activity.addEventListener('change', (e) => {
//check if checkbox is checked
  const price = e.target.parentNode.querySelector('.activity-cost').textContent;
  const cost = parseInt(price.substring(1));

  if(e.target.checked){
    totalCost += cost;
    e.target.pa
  }else{
    totalCost -= cost;
  }
  total.textContent = `Total: $${totalCost}` ;
});

//Check conflicting activities

activity.addEventListener('change',(e) => {
  const time = e.target.nextElementSibling.nextElementSibling.textContent;
  const checkboxes = activity.querySelectorAll('input');
  for(let i = 1; i <checkboxes.length; i++){
    if(e.target.checked
       && checkboxes[i].nextElementSibling.nextElementSibling.textContent === time
       && e.target !== checkboxes[i]) {
        checkboxes[i].disabled = true;
        checkboxes[i].parentElement.classList.add('disabled');
        console.log(checkboxes[i].parentElement);
    }else if(!e.target.checked
       && checkboxes[i].nextElementSibling.nextElementSibling.textContent === time
       && e.target !== checkboxes[i]) {
        checkboxes[i].disabled = false;
        checkboxes[i].parentElement.classList.remove('disabled');
    }
  }
})

/* Set default option when page loaded */
const payment = document.querySelector('#payment');
const creditCard = document.querySelector('.credit-card');
const paypal = document.querySelector('.paypal');
const bitcoin = document.querySelector('.bitcoin');
payment.children[0].remove();
paypal.hidden = true;
bitcoin.hidden = true;

/*Display chosen payment section when payment is selected*/
payment.addEventListener('change', () =>{
  if(payment.value === 'credit-card'){
    creditCard.hidden = false;
    paypal.hidden = true;
    bitcoin.hidden = true;
  }else if(payment.value === 'paypal'){
    creditCard.hidden = true;
    paypal.hidden = false;
    bitcoin.hidden = true;
  }else{
    creditCard.hidden = true;
    paypal.hidden = true;
    bitcoin.hidden = false;
  }
});

/*Create funtion to check validation*/
const submitBtn = document.querySelector('form');
const email = document.querySelector('#email');
//Check name
function isNameValid(nameValue) {
  const nameRegex = /\S/;
  if(nameRegex.test(nameValue)){
    return true;
  }else{
    return false;
  }
}
//Check email
function isEmailValid(emailValue) {
  const emailRegex = /^[\w!#$%^&*()_+=-]+@\w+(.com)$/;
  if(emailRegex.test(emailValue)){
    return true;
  }else{
    return false;
  }
}
//Check activities
function isActivityValid() {
  const checked = document.querySelectorAll('#activities input:checked');
  if(checked.length === 0){
    return false;
  }else{
    return true;
  }
}
//Check credit card info
function isCardNumberValid(cardNum){
  const cardNumRegex = /^\d{13,16}$/;
  if(cardNumRegex.test(cardNum)){
    return true;
  }else{
    return false;
  }
}

function isZipValid(zip){
  const zipRegex = /^\d{5}$/;
  if(zipRegex.test(zip)){
    return true;
  }else{
    return false;
  }
}

function isCvvValid(cvv){
  const cvvRegex = /^\d{3}$/;
  if(cvvRegex.test(cvv)){
    return true;
  }else{
    return false;
  }
}

const cardNum = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv =document.querySelector('#cvv');


//Add event listener to submit button
submitBtn.addEventListener('submit', (e) => {
  const nameValidity = isNameValid(name.value);
  const emailValidity = isEmailValid(email.value);
  const activityValidity = isActivityValid();

  if(payment.value === 'credit-card'){
    const cardNumValidity = isCardNumberValid(cardNum.value);
    const zipValidity = isZipValid(zip.value);
    const cvvValidity = isCvvValid(cvv.value);
    let errorMessage = document.querySelector('#cc-hint');
    if(cardNumValidity){
      hideTextError(cardNum);
    }else{
    // show optional error message
      if(cardNum.value === ''){
        errorMessage.textContent = 'Credit card number cannot be blank';
      }else{
        errorMessage.textContent = 'Credit card number must be between 13 - 16 digits';
      }
      e.preventDefault();
      showTextError(cardNum);
    }

    if(zipValidity){
      hideTextError(zip);
    }else{
      e.preventDefault();
      showTextError(zip);
    }

    if(cvvValidity){
      hideTextError(cvv);
    }else{
      e.preventDefault();
      showTextError(cvv);
    }
  }

  if(nameValidity) {
    hideTextError(name);
  } else{
    showTextError(name);
    e.preventDefault();
  }

  if(emailValidity) {
    hideTextError(email);
  }else {
    showTextError(email);
    e.preventDefault();
  }

  if(activityValidity) {
    hideActivityError();
   }else{
    showActivityError();
    e.preventDefault();
  }
})


/*Add event listener to focus and blur */
const checkboxes = activity.querySelectorAll('input');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('focus', (e) => {
    e.target.parentNode.className ='focus';
  });
  checkbox.addEventListener('blur', (e) => {
    const blurCheckbox = e.target.parentNode.parentNode.querySelector('.focus');
    blurCheckbox.className = '';
  });
});

//Create functions to show error message when form is invalid
const activitySection = document.querySelector('#activities');

function showTextError(input) {
    input.parentElement.classList.remove('valid');
    input.parentElement.classList.add('not-valid');
    input.parentElement.lastElementChild.style.display = 'block';
  }

function showActivityError(){
  activitySection.classList.remove('valid');
  activitySection.classList.add('not-valid');
  activitySection.lastElementChild.style.display = 'block';
}

//Create functions when errors being corrected
function hideTextError(input) {
  input.parentElement.classList.remove('not-valid');
  input.parentElement.classList.add('valid');
  input.parentElement.lastElementChild.style.display = 'none';
}

function hideActivityError() {
  activitySection.classList.remove('not-valid');
  activitySection.classList.add('valid');
  activitySection.lastElementChild.style.display = 'none';
}


/*Create a real-time error function for Email*/
email.addEventListener('keyup', () => {
  if(!isEmailValid(email.value)){
    showTextError(email);
  }else{
    hideTextError(email);
  }
});
