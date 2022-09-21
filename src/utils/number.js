/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 * @param {number} min - default is 1
 * @param {number} max - default is 100
 * @return random int in provided range
 */
export const getRandomInt = (min = 1, max = 100) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const percentage = (partialValue, totalValue) => {
  return (100 * partialValue) / totalValue
}
