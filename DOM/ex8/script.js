let mouse = document.querySelector('#mouse')

mouse.click = function () {
    mouse.focus();
};

mouse.addEventListener('keydown', moving);

let count = 100;
let count2 = 100;

function moving (e) {
    
    if(e.keyCode == 39) {
        mouse.style.left = count + 'px';
        count = count + 100
        console.log(count);
    }
    if(e.keyCode == 40) {
        mouse.style.top= count2 + 'px';
        count2 = count2 + 100
        console.log(count2)
    }
    if(e.keyCode == 37) {
        count = count - 100
        mouse.style.left = (count - 100) + 'px';    
        console.log(count)
    }
    if(e.keyCode == 38) {
        count2 = count2 - 100
        mouse.style.top = (count2 - 100) + 'px';   
        console.log(count2)   
    }  
}

