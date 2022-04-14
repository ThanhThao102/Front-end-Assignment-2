const array = [1, 2, 3, 4];
function getNewNumbersWithDoubleEvenNumber(array){
  return array.map(number => {
    if (number % 2 == 0){
      return number *2;
    }else{
      return number;
  }})}
  
console.log(getNewNumbersWithDoubleEvenNumber(array))