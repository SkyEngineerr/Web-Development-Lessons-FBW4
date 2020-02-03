const clearBtn = document.querySelector(".clear-tasks")
const card = document.querySelector('.card');
const heading = document.querySelector("h5")

//DOUBLE CLICK
//clearBtn.addEventListener('dblclick', runEvent)

//CLICK
//clearBtn.addEventListener('click', runEvent)

//MOUSE DOWN (when I press mouse click)
//clearBtn.addEventListener('mousedown', runEvent)

//MOUSE UP
//clearBtn.addEventListener('mouseup', runEvent)

//MOUSE ENTER (when the mouse enter to area)
//card.addEventListener('mouseenter', runEvent)

//MOUSE LEAVE (when the mouse leave from area)
//card.addEventListener('mouseleave', runEvent)

//MOUSE OVER
//card.addEventListener('mouseover', runEvent)

//MOUSE OUT
//card.addEventListener('mouseout', runEvent)

//MOUSE MOVE
//card.addEventListener('mousemove', runEvent)

//Event Handler

let li = document.querySelectorAll('li')
li.forEach(function(item){
  
  item.addEventListener('click', runEvent)
})


li.forEach(function(item){
 item.addEventListener('dblclick', function(){
   item.style.backgroundColor = 'white'
 })
})



function runEvent(e) {
  if (e.type == 'click') {
    li.forEach(function(item){
      item.style.backgroundColor = ''
    }
    )
    e.target.style.backgroundColor = 'red'
  }
  // console.log(`Event type: ${e.type}`);
  // heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`

  // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}