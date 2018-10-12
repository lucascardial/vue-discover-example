export const guard1 = (to, from, next) => {
  const d = 1
  if (d === 1) {
    next()
  }
}

export const guard2 = (to, from, next) => {
  const d = 3
  if (d === 3) {
    next()
  }
}
