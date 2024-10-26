const selects = document.querySelectorAll('.select-head');
const options = document.querySelectorAll('.options li');
const specifyParameters = document.querySelectorAll('.specify-parameters');

selects.forEach(select => {
    select.addEventListener('click', () => {
        select.parentElement.classList.toggle('showSelect')
    })
});

specifyParameters.forEach(elem => {
    elem.addEventListener('click', () => {
        selects.forEach(select => {
            select.parentElement.classList.add('showSelect')
        });
    })
})

