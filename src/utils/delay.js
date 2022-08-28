import { getRandomInt } from './number'

export const delay = ms => {
  if (!ms) {
    ms = getRandomInt(500, 1000)
  }
  return new Promise(resolve => setTimeout(resolve, ms))
}
