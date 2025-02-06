// Задание 1
// Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.
// Пример реализации:
// https://ucarecdn.com/6e689f37-...
// ПОДСКАЗКИ
// - значение атрибута можно узнать с помощью метода element.getAttribute(' ').

const pictures = document.querySelectorAll('.pictures');
const body = document.body;

const savedBack = localStorage.getItem('backPicture');
if (savedBack) {
    body.style.background = `url(${savedBack})`;
    body.style.backgroundSize = 'cover'; 
}

pictures.forEach (item => {
    item.addEventListener('click', () => {
        const attributeValue = item.getAttribute('src');
        pictures.forEach(p => p.classList.remove('checked'));
        body.style.background = `url(${attributeValue})`;
        body.style.backgroundSize = 'cover';
        item.classList.add('checked');
        localStorage.setItem('backPicture', attributeValue);
    })
})



