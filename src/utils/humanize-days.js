export default startDate => {
  const range = Date.now() - startDate
  const days = range / (1000 * 60 * 60 * 24)
  let num = days
  let period = 'days'
  if (days >= 365) {
    num = days / 365.25
    period = 'years'
  } else if (days >= 31) {
    num = days / 30.4375
    period = 'months'
  } else if (days >= 7) {
    num = days / 7
    period = 'weeks'
  }
  return `${num.toFixed(2)} ${period}`
}
