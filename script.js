
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInsput = document.getElementById('phone');
const helpInput = document.getElementById('help');
const serviceInput = document.getElementById('service');
const submitButton = document.getElementById('submitButton');



function handleSubmit(event) {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const help = helpInput.value;
  const service = serviceInput.value;

  const formData = {
    name: name,
    email: email,
    phone: phone,
    help: help,
    service: service
  };

  fetch('http://formz.in/api/task', {
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (response.ok) {
        console.log('Data successfully sent to the API');
        form.reset();
      } else {
        console.log('Error:', response.statusText);
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

function handleSubmit(){
  alert("Data Submited Successfully");
  console.log(location.reload())
  return true;
}

submitButton.addEventListener('onClick', handleSubmit);
