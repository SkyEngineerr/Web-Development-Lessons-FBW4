import Header from './header.js'
import section from './body.js'
import Article from './body.js'

let head = new Header ('Home Page', 'orange')

head.createNavbar()

let article = new Article()
article.createArticle()


