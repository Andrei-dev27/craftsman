const dino = document.getElementById ("dino"); 
const cactus = document.getElementById ("cactus");

document.addEventListener ("click", function (event) {
    jump();
}); 


function jump () {
    if (dino.classList != 'jump') {
        dino.classList.add ('jump')
    }
    setTimeout (function () {
        dino.classList.remove ('jump')
    }, 500)
}

 
let isAlive = setInterval (function () {
     let dinoTop = parseInt (window.getComputedStyle (dino).getPropertyValue('top')); //получаем значение, где находится динозаврик
     let cactusLeft = parseInt (window.getComputedStyle (cactus).getPropertyValue('left'));

     if (cactusLeft < 80 && cactusLeft > 0 && dinoTop >= 90) {
         alert ('GAME OVER!')
     }
 }, 10)

 //получаем наш элемент: вписываем идентификатор, расположенный в html
 //добавляем обработчик событий со значением "нажатие кнопки", запускаем функцию, которая запустит ф-ю 'jump'
 //функция jump добавляет класс нашему элементупри при условии
//classList - метод, который возвращает псевдомассив, содержащий все классы элемента
 //setTimeout - позволяет вызвать функцию один раз через определённый интервал времени
 //setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени
 // метод parseInt разбивает строковый элемент и возвращает целое число
 // метод getComputedStyle возвращает обЪект, содержащий значение всех css свойств элемента
 // метод getPropertyValue позволяет получить значение (свойство),которое идёт в строковом значении (поэтому используем метод parseInt)