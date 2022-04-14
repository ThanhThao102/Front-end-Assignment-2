const numbers = [1, 2, 3, 4]

function sumWithCondition (number){
  return number.reduce((accumulate, currValue) =>{ 
    if (currValue % 2 == 0) {
    return accumulate + currValue*2
  } else
    return accumulate + currValue;
})}

console.log(sumWithCondition(numbers))
