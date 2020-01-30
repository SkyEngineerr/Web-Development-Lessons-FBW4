document.getElementById('button1').addEventListener('click', getText)


console.log(window.fetch);
function getText() {
    fetch('local.txt')
    .then(function(res){
        console.log(res.text());
    })
    .catch()
}