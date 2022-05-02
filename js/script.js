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
