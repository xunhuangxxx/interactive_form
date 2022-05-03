/* Set focus to ture for name */
document.getElementById('name').focus();

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
  const option = document.querySelectorAll('#color option');
  for(let i = 1; i < option.length; i++){
    if(design.value === 'js puns'){
      if(i < 4){
        option[i].hidden = false;
      }else{
        option[i].hidden = true;
      }
    }else {
      if(i > 3){
        option[i].hidden = false;
      }else{
        option[i].hidden = true;
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
  }else{
    totalCost -= cost;
  }
  total.textContent = `Total: $${totalCost}` ;
});

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
