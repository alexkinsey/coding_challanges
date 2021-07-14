function validParentheses(parens){
  let counter = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens.charAt(i) == '(') {
      counter += 1;
    } else if (parens.charAt(i) == ')') {
      counter -= 1;
    }
  }
  return counter = 0 ? true : false;
}