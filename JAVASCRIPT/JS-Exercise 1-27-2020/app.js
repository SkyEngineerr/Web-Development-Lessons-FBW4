

let nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"];
let planks = ["splintered plank", "straight plank", "bent plank"]
​
function clean(item) {
    return `I have clean ${item}`
  }
​
​



function groupAndClean(items, cleaningMethod, done) {
    for ( i = 0; i < items.length; i++) {
        cleaningMethod(items[i])
    }
  
    done()
}

    
groupAndClean(nails.concat(planks), clean, function() {
    return `aa`
  });
​
​
