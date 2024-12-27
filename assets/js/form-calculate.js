// Start form code
const calcName = document.getElementById('name-calc'),
      calcPhone = document.getElementById('phone-calc'),
      fild = document.getElementById('fild'),
      formBtn_calc = document.querySelector('.popUp-calculate .form-submit'),
      calculate_btn = document.querySelector('.calculate-btn');


calculate_btn.addEventListener('click', () => {
  popUp_calculate.classList.remove('d-none');
  body.classList.add('bodyStopScroll')
});

formBtn_calc.addEventListener('click', () => {
checkInputCalc();
const calcNameSuc =  calcName.nextElementSibling.classList,
      calcPhoneSuc =  calcPhone.nextElementSibling.classList,
      fildSuc =  fild.nextElementSibling.classList;

if(calcNameSuc == 'success' && calcPhoneSuc == 'success' && fildSuc == 'success') {
  // formBtn.type = 'submit'
  popUpThanks.classList.remove('d-none')
  popUp_calculate.classList.add('d-none')
}
})

function checkInputCalc() {
const calcNameVal = calcName.value.trim(),
      calcPhoneVal = calcPhone.value.trim(),
      fildVal = fild.value.trim();

if(calcNameVal == '' || calcName.value.length <= 2) {
  setError(calcName)
} else {
  setSuccess(calcName)
}

if(calcPhoneVal == '' || calcPhone.value.substr(-1) === '_') {
  setError(calcPhone)
} else {
  setSuccess(calcPhone)
}

if(fildVal == '') {
  setError(fild)
} else {
  setSuccess(fild)
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
  $("#phone-calc").inputmask({"mask": "+7(999) 999-99-99"});