const animals = [
  {
    name: "cat",
    size: "small",
    weight: 5
  },
  {
    name: "dog",
    size: "medium",
    weight: 10
  },
  {
    name: "elephant",
    size: "big",
    weight: 5000
  }
]

function getAnimalInforString(animal){
  const animalInfor = `name: ${animal.name} - size: ${animal.size} - weight: ${animal.weight}kg`;
  return animalInfor;
}

function convertAnimalsWithNameHasLetterTToStringArray(arr){
  return arr.filter(item => item.name.includes('t'))
            .map(item => getAnimalInforString(item)
)};

console.log(convertAnimalsWithNameHasLetterTToStringArray(animals))

