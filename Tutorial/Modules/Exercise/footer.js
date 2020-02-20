class Footer {
    constructor (){

    }
    createFooter () {
        let footer = document.createElement('footer')
        document.body.appendChild(footer)
        let p = document.createElement('p')
        p.innerHTML = "FOOTER"
        footer.appendChild(p)
        
    }
}

export default Footer;