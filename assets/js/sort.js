const sortLists = document.querySelectorAll('.sort-list li'),
      showSorts = document.querySelectorAll('.sort-top'),
      clearSort = document.querySelector('.clear-sort'),
      sort = document.querySelector('.sorts'),
      sortBtn = document.querySelector('.filter-btn');

sortLists.forEach(sort => {
    sort.addEventListener('click', () => {
        sort.classList.toggle('checked');
        clearSort.classList.add('showClearBtn');
    });
});

clearSort.addEventListener('click', () => {
    sortLists.forEach(sort => {
        sort.classList.remove('checked')
    })
    clearSort.classList.remove('showClearBtn')
})

showSorts.forEach(show => {
    show.addEventListener('click', () => {
        show.parentElement.classList.toggle('showSort');
    })
});

sortBtn.addEventListener('click', () => {
    sort.classList.toggle('showFilter')
})