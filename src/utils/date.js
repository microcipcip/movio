export const addZero = date => ('0' + date).slice(-2)

export const formatMovieDate = movieDate => {
  const d = new Date(movieDate)
  return `${addZero(d.getDate())} ${addZero(
    d.getMonth() + 1
  )} ${d.getFullYear()}`
}
