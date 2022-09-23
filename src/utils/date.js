export const getRandomDate = (start, end = new Date()) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export const getLastMonth = () => {
  const dayOfFirstDownload = 16
  const currentDate = new Date().getDate()
  const requiredMonth = new Date().getMonth() - (currentDate < dayOfFirstDownload ? 2 : 1)
  let requiredDate = new Date()
  requiredDate.setDate(1)
  requiredDate.setMonth(requiredMonth)

  return {
    date: createDateAsUTC(requiredDate),
    ...getFromTo(requiredDate.getFullYear(), requiredDate.getMonth()),
  }
}

export function createDateAsUTC(date) {
  return new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
  )
}

export const getFromTo = (year, month) => {
  return { from: new Date(Date.UTC(year, month, 1, 0, 0, 0)), to: new Date(Date.UTC(year, month + 1, 0, 23, 59, 59)) }
}
