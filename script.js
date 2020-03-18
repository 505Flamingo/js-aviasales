
/* получаем данные со страницы */

const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = document.querySelector('.input__cities-from'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    inputcitiesto = document.querySelector('.input__cities-to') 
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart');

const city = ['Москва', 'Санкт-Петербург', 'Минск', 'Караганда', 'Челябинск',
    'Керчь', 'Волгоград', 'Самара', 'Днепропетровск', 'Екатеринбург', 'Одесса', 
    'Ухань', 'Шымкент', 'Нижний новгород', 'Калининград', 'Киев', 'Вроцлав', 'Ростов-на-Дону'];

const showCity = (input, list) => {
    list.textContent = ''; /* очищаем выпадающий список после каждого нового ввода */
    
    if (input.value !== '') {
        
            const filterCity = city.filter((item) => {
            const fixItem = item.toLowerCase();  /* игнорируем заглавные */
            return fixItem.includes(input.value.toLowerCase());
        });


        filterCity.forEach((item) => {
            const li = document.createElement('li');    /* создать элемент списка */
            li.classList.add('dropdown__city');     /* добавить li класс */
            li.textContent = item;  /* поместить город в элемент списка */
            list.append(li);
        });
    }
};

inputCitiesFrom.addEventListener('input', () => {
        showCity(inputCitiesFrom, dropdownCitiesFrom) 
});

/* вешаем клик по элементу списка */

dropdownCitiesFrom.addEventListener('click', (event) => { 
    const target = event.target;
    if (target.tagName.toLowerCase() == 'li' ) {
        inputCitiesFrom.value = target.textContent;
        dropdownCitiesFrom.textContent = ''; 
    }
});
