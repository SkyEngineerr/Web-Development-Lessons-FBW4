// const input = document.getElementById('input')
// const div = document.getElementById('div')
// let ul = document.createElement('ul')
// div.appendChild(ul)

// class List {
//     createUnorderedList () {  
//         let li = document.createElement('li')
//         li.textContent = input.value
//         ul.appendChild(li)  
//     }
// }

// document.getElementById('click').addEventListener('click', function () {
//     const list = new List();
//     list.createUnorderedList()
    
// })


const input = document.getElementById('input')
const div = document.getElementById('div')


class List {
    createUnorderedList (){
        if (!div.firstElementChild) {
            let ul = document.createElement('ul')
            div.appendChild(ul)
        }
    }

    createListItem () {  
        let li = document.createElement('li')
        li.textContent = input.value
        div.firstElementChild.appendChild(li)  
    }
}

document.getElementById('click').addEventListener('click', function () {
    const list = new List();
    list.createUnorderedList()
    list.createListItem()
})