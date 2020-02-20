import Header from './header.js'
import {Article, section} from './body.js'
import Footer from './footer.js'

let head = new Header ('Home Page', 'orange')

head.createNavbar()

let article = new Article()
article.createArticle()

let footer = new Footer ()
footer.createFooter()




