function submitAnswers() {
    let total = 5;
    let score = 0;
    //Get User Input
    let q1 = document.forms["formQuiz"]["q1"].value;
    let q2 = document.forms["formQuiz"]["q2"].value;
    let q3 = document.forms["formQuiz"]["q3"].value;
    let q4 = document.forms["formQuiz"]["q4"].value;
    let q5 = document.forms["formQuiz"]["q5"].value;
    //Validation    
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) === null || eval('q' + i) === '') {
            alert('You missed question ' + i);
            return false;
        }
    }
    //Set Correct Answers
    let answers = ["b", "a", "d", "b", "d"];
    //Check Answers
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) === answers[i - 1]) {
            score++;
        }
    }
    //Display res
    let res = document.getElementById('res');
    res.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
    alert('You scored ' + score + ' out of ' + total);
    return false;
}
//Styling with jQuery


$(document).ready(function () {
    $('body').css({
        color: 'white',
        background: 'red',
        fontFamily: 'Arial',
        fontSize: '17px',
    })
    $('.container').css({
        background: 'blue',
        width: '60%',
        margin: 'auto',
        overflow: 'auto',
        padding: '25 px',
        borderRadius: '8px'
    })
    $('header').css({
        textAlign: 'center',
        borderBottom: 'dashed',
        margin: '15px'
    })
    $('header h1').css({
        margin: '1rem',
        padding: '0',
        textAlign: 'center'
    })
    $('header p').css({
        padding: '0',
        marginTop: '5px',
        textAlign: 'center',
        fontSize: '14px'
    })
    $('section').css({
        minHeight: '400 px',
    })
    $()
    $('footer').css({
        textAlign: 'center',
        fontSize: '14px'
    })
    $('#res h3').css({
        padding: '10px',
        margin: '10px',
    })
    $('#res span').css({
        color: '#000',
        fontWeight: 'bold'
    })
    $('#submit').css({
        display: 'flex',
        margin: 'auto',
        padding: '10 px',
        cursor: 'pointer',
        textAlign: 'center',
        background: 'orange',
        borderRadius: '10px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'blue'
    })
    $('.form-group').css({
        padding: '15px',
        margin: '10px',
        marginLeft: '15px'
    })
    $('h3').css({
        padding: '10px',
        margin: '10px',
        marginLeft: '5px'
    })
    //$('alert').css('background', 'orange')
})