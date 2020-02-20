import {Header} from './header.js'
import {Footer} from './footer.js'
import {Article, section} from './body.js'

let head = new Header ('Home Page', 'orange')

head.createNavbar()

let article = new Article()
article.createArticle()

section.createSection();

let footer = new Footer ()
footer.createFooter()




