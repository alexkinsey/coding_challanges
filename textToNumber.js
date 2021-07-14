function alphabetPosition(text) {
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var numberArray = []
  
  text.toLowerCase().split('').forEach(letter => {
    var value = alpha.indexOf(letter) + 1
    if (value > 0){
      numberArray.push(value)
    }
  })

  return numberArray.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))