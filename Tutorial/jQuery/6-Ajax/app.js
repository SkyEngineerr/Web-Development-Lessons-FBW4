$(document).ready(()=>{
    // $('#results').load('test.html',
    // (responseTxt, statusTxt, xhr) => {
    //     if(statusTxt == 'success') {
    //         alert('it went fine')
    //         $('#results').html(responseTxt)
    //     }else if(statusTxt == 'error'){
    //         alert('Error' + xhr.statusTxt)
    //     }
    // })
    // $.get('test.html', (data) => {
    //     $('#results').html(data)
    // })

    $.getJSON('users.json', (data)=>{
        $.each(data,(i,user)=>{
            $('ul#users').append(`<li>${user.firsName}</li>`)
        })
    })
})