// Start form code
const userName = document.getElementById('name-buildor'),
    userPhone = document.getElementById('phone-buildor'),
    fild1 = document.getElementById('fild1'),
    fild2 = document.getElementById('fild2'),
    formBtn = document.querySelector('.popUp-builder .form-submit');

formBtn.addEventListener('click', () => {
checkInputs();
const userNameSuc =  userName.nextElementSibling.classList,
      userPhoneSuc =  userPhone.nextElementSibling.classList,
      fild1Suc =  fild1.nextElementSibling.classList,
      fild2Suc =  fild2.nextElementSibling.classList;

if(userNameSuc == 'success' && userPhoneSuc == 'success' && fild1Suc == 'success' && fild2Suc == 'success') {
  // formBtn.type = 'submit'
  popUpThanks.classList.remove('d-none')
  popUpBuilder.classList.add('d-none')
}
})

function checkInputs() {
const userNameVal = userName.value.trim(),
      userPhoneVal = userPhone.value.trim(),
      fild1Val = fild1.value.trim(),
      fild2Val = fild2.value.trim();

if(userNameVal == '' || userName.value.length <= 2) {
  setError(userName)
} else {
  setSuccess(userName)
}

if(userPhoneVal == '') {
  setError(userPhone)
} else {
  setSuccess(userPhone)
}

if(fild1Val == '') {
  setError(fild1)
} else {
  setSuccess(fild1)
}

if(fild2Val == '') {
  setError(fild2)
} else {
  setSuccess(fild2)
}
}

function setSuccess(input) {
input.style.borderColor = '#9A7A5F'
input.parentElement.children[3].classList.add('success');
input.parentElement.children[3].classList.remove('error');
input.nextElementSibling.classList.add('success')
}

function setError(input) {
input.style.borderColor = '#E51017'
input.parentElement.children[3].classList.add('error');
input.parentElement.children[3].classList.remove('success');
}
 
  
// input mask
  $("#phone-buildor").inputmask({"mask": "+7(999) 999-99-99"});