export let section2 = document.createElement('section')

export class Section {
    constructor (item1, item2, item3){
        this.item1 = item1;
        this.item2 = item2;
        this.item3 = item3;
    }
    createSection () {
        document.body.appendChild(section2)
        let nav = document.createElement('nav')
        section2.appendChild(nav)
        let ul = document.createElement('ul')
        nav.appendChild(ul)
        
        let li = document.createElement('li')
        li.innerHTML = this.item1
        ul.appendChild(li)

        li = document.createElement('li')
        li.innerHTML = this.item2
        ul.appendChild(li)

        li = document.createElement('li')
        li.innerHTML = this.item3
        ul.appendChild(li)
    }
}




