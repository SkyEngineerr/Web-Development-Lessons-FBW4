

// function tripAdvisor (arrayOfCities) {
//   let lowestNumber = arrayOfCities[0].population;

//   let min = arrayOfCities.forEach(function (keyValue, index, arrayOfCities) {
//     if(index > 0) {
//       if(keyValue.population < lowestNumber){
//         lowestNumber = keyValue.population;
//         arrayOfCities[index].advice = 'positive';
//         console.log( arrayOfCities[index])
//       }
//     }
//   });
// }

// tripAdvisor([city1, city2, city3]);


// NEW EXERCISE */

// let city1 = {
//   name:'hamburg',
//   population:120,
//   continent: 'asia',
//   advice:'positive'
// }

// let city2 = {
//   name:'izmir',
//   population:7,
//   continent: 'europa',
//   advice:'negative'
// }

// let city3 = {
//   name:'istanbul',
//   population:11,
//   continent: 'usa',
//   advice:'positive'
// }

// function check (arrayOfCities, pref) {
//   for (let i in arrayOfCities) {
//     if(arrayOfCities[i].includes(120)) {
//       console.log('Yes')
//     }
//   }
// }

// check([city1,city2,city3], ['asia', 120]);

//////////////// Exercise 2 //////////////////

let harryPotter = {
  type: 'fantasy',
  keywords: "'magic', 'harry', 'potter'",
  topic: 'Harry potter is one of the famoust wizard in unoverse'
}

let sherlock = {
  type: 'crime',
  keywords: "'magic', 'harry', 'potter'",
  topic: 'Sherlock Holmes and Dr. Watson'
}

let paragraph1 = {
  title: harryPotter,
  text: 'Harry Potter: Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus labore illo eius minus quae sint! Cum facilis soluta voluptate eligendi nemo aperiam, atque commodi sapiente debitis illo vel consequuntur.'
}

let paragraph2 = {
  title: sherlock,
  text: 'Sherlock: Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus labore illo eius minus quae sint! Cum facilis soluta voluptate eligendi nemo aperiam, atque commodi sapiente debitis illo vel consequuntur.'
}

let array0fTitles =[harryPotter, sherlock]
let arrayOfParagraph =[paragraph1, paragraph2]
let type= 'fantasy'



function storyBuilder(array0fTitles, arrayOfParagraph,type) {

  // for (let i in array0fTitles) {
  //   if(array0fTitles[i].type == type){
  //     for(let j in arrayOfParagraph) {
  //       if (arrayOfParagraph[j].title == array0fTitles[i]){
  //         console.log(array0fTitles[i].topic + ' ' +arrayOfParagraph[j].text)
  //       }
  //     }
  //   }
  // }
  let title1;
  let topic;
  for (let i in array0fTitles) {
    if(array0fTitles[i].type == type){
      title1 = array0fTitles[i];
      topic = array0fTitles[i].topic
  }

  for (let j in arrayOfParagraph) {
    if (arrayOfParagraph[j].title == title1) {
        console.log (topic + ' ' + arrayOfParagraph[j].text)
    }
  }

}
}

storyBuilder([harryPotter, sherlock], [paragraph1, paragraph2], 'fantasy')
