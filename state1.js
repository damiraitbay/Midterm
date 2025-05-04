// function counter() {
//     let count = 0;
//     return function() {
//         return count++;
//     }
// }

// const c = counter()
// console.log(c())
// console.log(c())

// let mode = document.getElementById('mode')
// let state = '';
// mode.addEventListener('click', function() {
//     state = mode.textContent
//     if (state == 'ligth_mode') {
//         state = 'dark_mode'
//         document.body.style.backgroundColor = 'black'
//     } else {
//         state = 'ligth_mode'
//         document.body.style.backgroundColor = 'white'
//     }

//     mode.textContent = state;
// })

let minus = document.getElementsByClassName('minus')
let plus = document.getElementsByClassName('plus')
let num = document.getElementsByClassName('num')
let price = document.getElementsByClassName('price')


for (let i = 0; i < minus.length; i++) {
    let count = 0;
    let sum = 0;
    let start_price = parseFloat(price[i].textContent)
    plus[i].addEventListener('click', function() {
        count++;
        num[i].textContent = count;
        sum += start_price;
        price[i].textContent = sum;
    })
    minus[i].addEventListener('click', function() {

        if (count > 0) {
            count--;
            num[i].textContent = count;
            sum -= start_price;
            price[i].textContent = sum;
        }

    })
}

let item = document.getElementById('item1')
let search = document.getElementById('search')
let title = document.getElementsByClassName('title')
let items = document.getElementsByClassName('item')
search.addEventListener('click', function() {
    for (let i = 0; i < title.length; i++) {
        if (item.value != title[i].textContent) {
            items[i].style.display = 'none'
        } else {
            items[i].style.display = 'block'
        }
    }
})