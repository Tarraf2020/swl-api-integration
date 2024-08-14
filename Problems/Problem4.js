const checkBrackets = (string) => {
  const bracketsArray = [];

  for (let index = 0; index < string.length; index++) {
    if (
      string[index] === "(" ||
      string[index] === "[" ||
      string[index] === "{"
    ) {
      bracketsArray.push(string[index]);
    } else if (
      string[index] === ")" &&
      bracketsArray[bracketsArray.length - 1] === "("
    ) {
      bracketsArray.pop();
    } else if (
      string[index] === "]" &&
      bracketsArray[bracketsArray.length - 1] === "["
    ) {
      bracketsArray.pop();
    } else if (
      string[index] === "}" &&
      bracketsArray[bracketsArray.length - 1] === "{"
    ) {
      bracketsArray.pop();
    } else if (
      string[index] === ")" ||
      string[index] === "]" ||
      string[index] === "}"
    ) {
      return false;
    }
  }

  return bracketsArray.length === 0;
};

console.log(checkBrackets("()[]{}"));
console.log(checkBrackets("([{}])"));
console.log(checkBrackets("("));
console.log(checkBrackets("({)"));
console.log(checkBrackets("([)]"));
