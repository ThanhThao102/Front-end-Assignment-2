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
function findAnimalHasWeightOver50kg(animal){
  return animal.filter(animal => {
    return animal.weight > 50;
})}

console.log(findAnimalHasWeightOver50kg(animals))