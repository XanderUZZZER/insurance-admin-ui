export const formatAs = {
  phone: (phone, separator = ' ') => {
    if (phone === null || phone === undefined || phone.length < 9) return ''
    const phoneLength = phone.length
    const end = phone.slice(phoneLength - 2, phoneLength)
    const mid = phone.slice(phoneLength - 4, phoneLength - 2)
    const start = phone.slice(phoneLength - 7, phoneLength - 4)
    const code = phone.slice(phoneLength - 9, phoneLength - 7)
    const phoneLengthWithoutCountry = phone.length - 9
    let area = ''
    if (phoneLengthWithoutCountry > 0) {
      area = phone.slice(0, phoneLengthWithoutCountry)
      if (!area.includes('+')) area = '+'.concat(area)
    }
    const formattedPhone = [area, code, start, mid, end].join(separator)
    return formattedPhone
  },
}
