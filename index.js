const sumItems = (array) => {
  if (array.length > 0) {
    let pop = array.pop();
    if (Array.isArray(pop)) {
      return sumItems(pop) + sumItems(array);
    }
    return pop + sumItems(array); //accumulates here
  }
  return 0; //return the value it starts accumulating with
};

console.log(sumItems([1, 2, [3, 4]])); //10

module.exports = sumItems;
