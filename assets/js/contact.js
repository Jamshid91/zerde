const user_name = document.getElementById('name'),
      user_phone = document.getElementById('phone'),
      submitBtn_form = document.querySelector('.form-submit');


// login
submitBtn_form.addEventListener('click', () => {
    checkInputsForm()
    let successName = user_name.parentElement.children[2].classList,
        successPass = user_phone.parentElement.children[2].classList;
  
    if(successName == 'success' && successPass == 'success') {
    //   submitBtn_form.type = 'submit'  
        popUpThanks.classList.remove('d-none') ;
    }
  });
// login
  function checkInputsForm() {
    const user_phoneValue = user_phone.value.trim(),
          user_nameValue = user_name.value.trim();

    
    
    if(user_nameValue === '') {
      setError(user_name, '1px solid #E47169')
      } else {
        setSuccess(user_name)
        user_name.parentElement.children[2].classList.add('success')
    }
    
    if(user_phoneValue === '') {
      setError(user_phone, '1px solid #E47169')
    } else {
      setSuccess(user_phone)
      user_phone.parentElement.children[2].classList.add('success')
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
$("#phone").inputmask({"mask": "+7(999) 999-99-99"});