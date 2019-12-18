// function checkCity (city, cities) {

//     for (let i = 0; i<cities.length; i++) {
        
//         if (cities[i] === city) {
//             return `You were in ${city}`
//         }
//         else {return `You did not visit ${city}`}
      
        
//     }
    
// }

// console.log(checkCity("istanbul", ["Ankara", "Hamburg", "istanbul", "Mardin"]));


// function checkCity (visitedCities, cities) {

//     let newArr = [];
//     let matches = false;

//     for (let i = 0; i<cities.length; i++) {
//         matches = false;
//         for (let x = 0; x<visitedCities.length; x++) {
//             if (cities[i] === visitedCities [x]){
//             matches = true;
//             }
//         }
        
//         if(!matches) 
//             {newArr.push(cities[i])}
        
//     }
    

//     return `I visited ${newArr} .`;
// }


// document.write(checkCity(["Kalana", "Ankara", "Hamburg"], ["Ankara", "Hamburg", "istanbul", "Mardin"]));


// function checkCity (visitedCities, cities) {

//     let newArr = [];
 

//     for (let i = 0; i<cities.length; i++) {
 
//         for (let x = 0; x<visitedCities.length; x++) {
//             if (cities[i] === visitedCities [x])
//             newArr.push(cities[i])
//         }
       
        
//     }
    
//     let newArr2 = newArr.join(', ')
//     return `I visited ${newArr2} .`;
// }


// document.write(checkCity(["Tokyo", "Ankara", "Hamburg"], ["Ankara", "Hamburg", "istanbul", "Mardin", "Kalana", "Tokyo"]));


function checkWord (myName, names) {
    let memory = '';
  for (let i =0; i<names.length; i++) {
      if(myName.length == names[i].length) {
          memory += `Welcome dear ${names[i]} <br>`
          
      }
  }
return memory;
}


document.write(checkWord('safwan', ['eren', 'meleke', 'ali', 'mahmud' ]));