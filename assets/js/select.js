const selects = document.querySelectorAll('.select-head');
const options = document.querySelectorAll('.options li');
const collections = document.querySelector(".collection-box");
const collectionAdd = document.querySelector('.collection-add');
const specifyParameters = document.querySelector('.specify-parameters');
const collectionRemove = document.querySelectorAll('.collection-remove');

selects.forEach(select => {
    select.addEventListener('click', () => {
        select.parentElement.classList.toggle('showSelect')
    })
});

specifyParameters.addEventListener('click', () => {
    collectionAdd.classList.remove('hidden');
    specifyParameters.classList.add('hidden');
})

collectionRemove.forEach(rem => {
    rem.addEventListener('click', () => {
        specifyParameters.classList.remove('hidden');
        rem.parentElement.parentElement.classList.add('hidden');
    })
})

collectionAdd.addEventListener('click', () => {
    const collection = document.createElement("div");
    collection.classList = 'collection'
    let i = 0;
    i++;
    collection.innerHTML = `
    <div class="collection-top d-flex justify-between align-center">
        <span>${i} Коллекция</span>
        <div class="collection-remove"><span>Удалить</span></div>
    </div>
    <div class="collection-item d-flex justify-between flex-wrap">
        <div class="select">
            <div class="select-head d-flex justify-between align-center">
                <span>Стиль</span>
                <img src="assets/img/svg/arrow.svg" alt="">
            </div>
            <ul class="options">
                <li>
                    <input type="radio" name="style1" checked>
                    <span>Мрамор</span>
                </li>
                <li>
                    <input type="radio" name="style1">
                    <span>Бетон</span>
                </li>
                <li>
                    <input type="radio" name="style1">
                    <span>Лофт</span>
                </li>
            </ul>
        </div>
        <div class="select">
            <div class="select-head d-flex justify-between align-center">
                <span>Размер</span>
                <img src="assets/img/svg/arrow.svg" alt="">
            </div>
            <ul class="options">
                <li>
                    <input type="radio" name="size1" checked>
                    <span>60X60CM</span>
                </li>
                <li>
                    <input type="radio" name="size1">
                    <span>60X60CM</span>
                </li>
                <li>
                    <input type="radio" name="size1">
                    <span>60X120CM</span>
                </li>
                <li>
                    <input type="radio" name="size1">
                    <span>80X80CM</span>
                </li>
                <li>
                    <input type="radio" name="size1">
                    <span>45X90CM</span>
                </li>
            </ul>
        </div>
        <div class="select">
            <div class="select-head d-flex justify-between align-center">
                <span>Поверхность</span>
                <img src="assets/img/svg/arrow.svg" alt="">
            </div>
            <ul class="options">
                <li>
                    <input type="radio" name="material1" checked>
                    <span>матовая</span>
                </li>
                <li>
                    <input type="radio" name="material1">
                    <span>лаппатированная</span>
                </li>
                <li>
                    <input type="radio" name="material1">
                    <span>полированная</span>
                </li>
            </ul>
        </div>
        <div class="fild-box d-flex justify-between">
            <p>Площадь м2</p>
            <div class="input-box">
                <label for="fild1" class="form__lab"></label>
                <input type="text" id="fild1" class="form__inp" placeholder="кол-во">
                <small></small>
                <div class="test">
                    <img src="assets/img/svg/succes.svg" alt="">
                    <img src="assets/img/svg/error.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    `
   
    collections.appendChild(collection);
})


