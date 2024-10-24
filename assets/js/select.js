const selects = document.querySelectorAll('.select-head');
const options = document.querySelectorAll('.options li');

selects.forEach(select => {
    select.addEventListener('click', () => {
        select.parentElement.classList.toggle('showSelect')
    })
});

// let j = 0;
// options.forEach(option => {
//     option.addEventListener('click', () => {
//         // options.forEach(elem => {
//         //     elem.classList.remove('checked')
//         // })
//         // this.parentElement.children[j].classList.remove('checked')
//         console.dir(option.parentElement)
//         option.classList.add('checked')
//     })
// });