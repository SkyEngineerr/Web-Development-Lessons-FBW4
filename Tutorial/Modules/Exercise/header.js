class Header {
    constructor (title, background){
        this.title = title;
        this.background = background;
    }
    createNavbar () {
        let header = document.createElement('header')
        header.style.backgroundColor =  this.background
        let h1 = document.createElement('h2')
        h1.innerHTML = this.title
        header.appendChild(h1)
        document.body.appendChild(header)
    }
}

export default Header;