'Real-Time Error Message'

This function would show error message immediately when the format of 'Email' is incorrect,
and hide error message when user corrected it.

1. Add 'keyup' event listener to email
2. Call function 'isEmailValid' to check email's validity
3. if false, show error message; if true, hide error message



'Conditional Error Message'

This function would show different error messages when the format of 'Credit Card Number' is incorrect,
and hide error message when user corrected it.

1. Access DOM element '#cc-hint', store its text content to a variable 'errorCreditCard'
2. When user try to submit, call function "isCardNumberValid" to check its validity
3. If false:
  1) If the text field is blank, store "Credit card number cannot be blank" to 'Credit Card Number'
  2) If the text field isn't blank, store "Credit card number must be between 13 - 16 digits" to 'Credit Card Number'

  If true, hide error message
