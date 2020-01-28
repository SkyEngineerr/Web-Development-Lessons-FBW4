let nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"]

let planks = ["splintered plank", "straight plank", "bent plank"]

//items = ["rusty nail", "rusty nail", "bent nail", "clean nail", "splintered plank", "straight plank", "bent plank"]

let ul = document.querySelector('ul')

let li;

function clean(item) {
  
  li = document.createElement('li')
  li.innerHTML = `I have clean ${item}`
  ul.appendChild(li)
  
}


  function groupAndClean(items, cleaningMethod, done) {
    for ( i = 0; i < items.length; i++) {
      cleaningMethod(items[i])
    }
  
    done()
  }

  groupAndClean(nails.concat(planks), clean, function() {
    
  })


