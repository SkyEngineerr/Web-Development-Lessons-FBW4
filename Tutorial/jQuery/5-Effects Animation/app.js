$(document).ready(()=>{
    $('#btnFadeOut').click(()=>{
        $('#box').fadeOut(3000, ()=>{
            $('#btnFadeOut').text("It's Gone")
        })
    })
    $('#btnFadeIn').click(() =>{
        $('#box').fadeIn(2000)
    })
    $('#btnFadeTog').click(() =>{
        $('#box').fadeToggle(1000)
    })
    $('#btnSlideUp').click(() =>{
        $('#box').slideUp(1000)
    })
    $('#btnSlideDown').click(() =>{
        $('#box').slideDown(1000)
    })
    $('#btnSlideTog').click(() =>{
        $('#box').slideToggle(1000)
    })
    $('#btnStop').click(() =>{
        $('#box').stop()
    })

    $('#moveRight').click(() =>{
        $('#box2').animate({
            left:200,
            height:'300px',
            width:'300px',
            opacitiy:"0,5"
        })
    })
    $('#moveRight').click(() =>{
        $('#box2').animate({
            left:200,
            height:'300px',
            width:'300px',
            opacitiy:"0,5"
        })
    })

    $('#moveAround').click(() =>{
        let box = $('#box2')
        box.animate({
            left:300
        })
        box.animate({
            top:300
        })
        box.animate({
            left:0
        })
        box.animate({
            left:0,
            top:0
        })
    })

    $('#marioBtn').click(()=>{
        let mario = $('#mario')
        console.log(mario);
        mario.animate({
            left:300
        })
        mario.animate({
            top:-300
        })
        mario.animate({
            left:200
        })
        mario.animate({
            top:0,
            left:0
        })
  
    })


})