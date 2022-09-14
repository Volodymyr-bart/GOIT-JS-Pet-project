/*
Напиши скрипт, який:

1) Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
2) Для кожного элемента li.item у спику ul#categories, знайде 
і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
console.log(`Category: ${textTitleElementArray[i].textContent}`);
console.log(`Elements: ${}`);
*/
const countElementItem = document.querySelectorAll('#categories .item')
// console.log(countElementItem);
console.log(`Number of categories: ${countElementItem.length}`);

const textTitleElementArray = document.querySelectorAll('.item h2');
// console.log(textTitleElementArray);
const listUl = document.querySelectorAll('.item ul')
// console.log(listUl);


for (let i = 0; i < countElementItem.length; i+=1) {    
    console.log(`Category: ${textTitleElementArray[i].textContent}`);    
    const itemLi = listUl[i].children
    console.log(`Elements: ${itemLi.length}`);
    
}




// ======================================================================
// for (let i = 0; i < countElementItem.length; i+=1) {    
//     console.log(`Category: ${textTitleElementArray[i].textContent}`);    
// }

// for (let i = 0; i < listUl.length; i+=1) {
//     console.log(listUl[i]);
//     const itemLi = listUl[i].querySelectorAll('li')
//     console.log(itemLi.length);
    
// }
// console.log('Other metod');
// for (let i = 0; i < listUl.length; i+=1) {
//     console.log(listUl[i]);
//     const itemLi = listUl[i].children
//     console.log(itemLi.length);
    
// }

