function convertMorse (myString) {

  let morse = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9"
  }

  myString = myString.split('   ')
  for (let i = 0; i < myString.length; i++) {
    myString[i] = myString[i].split(' ')

    for (let j = 0; j<myString[i].length; j++) {
      myString[i][j] = morse[myString[i][j]]
    }

    myString[i] = myString[i].join('');

  }

  myString = myString.join(' ');
  
  return myString

}
  console.log(convertMorse('.... . -.--   .--- ..- -.. .'))





