const elements = document.body.children
for (let elem of elements) {
    
    if(elem.matches('a[href$="zip"]')) {
        console.log(`The arschive reference: ${elem.href}`);
    }
}