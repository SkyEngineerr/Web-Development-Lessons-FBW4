document.getElementById('button1').addEventListener('click', getText)


console.log(window.fetch);
function getText() {
    fetch('local.txxt')
    .then(function(res){
        return res.text()
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(problem) {
        console.log(problem);
    })
}