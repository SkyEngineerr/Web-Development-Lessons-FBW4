import {Section, section2} from './section.js'


let section = new Section ('Home Page', 'orange', 'deneme')

section.createSection();


class Article {
    constructor (){
    }
    createArticle () {
        let article = document.createElement('article')
        section2.appendChild(article)
        let h1 = document.createElement('h1')
        h1.innerHTML = "London"
        article.appendChild(h1)
        let p = document.createElement('p')
        p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime a cupiditate fuga ipsum laboriosam eius temporibus aliquid voluptate sapiente laborum, modi, fugit asperiores voluptatum doloremque blanditiis ipsam expedita cum obcaecati officia libero. Soluta accusamus quae aliquam ea voluptate quaerat illum, sit libero nemo quibusdam reprehenderit ab alias obcaecati. Possimus, nihil.'
        article.appendChild(p)
    }
}

export {section, Article}