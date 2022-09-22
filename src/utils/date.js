export const getRandomDate = (start, end = new Date()) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
