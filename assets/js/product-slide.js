let slidePrev = document.querySelectorAll(".slide-prev");
let slideNext = document.querySelectorAll(".slide-next");


let i = 0;

slideNext.forEach(next => {
    let img = next.parentElement.children[0]
    next.addEventListener('click', () => {
        if (i == img.children.length - 1) {
            img.children[i].style.display = "none";
            i = 0;
            img.children[i].style.display = "block";
        } else {
            img.children[i].style.display = "none";
            img.children[i + 1].style.display = "block";
            i++
        }
    })
})

slidePrev.forEach(prev => {
    let img = prev.parentElement.children[0]
    prev.addEventListener('click', () => {
        if (i == 0) {
            img.children[i].style.display = "none";
            i = img.children.length - 1;
            img.children[img.children.length - 1].style.display = "block";

        } else {
            img.children[i].style.display = "none";
            img.children[i - 1].style.display = "block";
            i--;
        }
    })
});


const view_characteristics = document.querySelectorAll('.view-characteristics');

view_characteristics.forEach(view => {
    view.addEventListener('click', () => {
        view.parentElement.classList.toggle('showInfo')
    })
})