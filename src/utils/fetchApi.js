// wrapper for the fetch API
// because it doesn't throw errors when response status is 400
import { TMDB_API_KEY, TMDB_API_URL, TMDB_API_LANG } from 'config/index'

const parseJSON = response =>
  new Promise(resolve =>
    response.json().then(json =>
      resolve({
        status: response.status,
        ok: response.ok,
        json,
      })
    )
  )

export default url => {
  const queryOrAmpersand = url.includes('?') ? '&' : '?'
  const query = `${TMDB_API_URL}${url}${queryOrAmpersand}api_key=${TMDB_API_KEY}&language=${TMDB_API_LANG}`

  return new Promise((resolve, reject) =>
    fetch(query)
      .then(parseJSON)
      .then(response => {
        if (response.ok) {
          return resolve(response.json)
        }
        // extract the error from the server's json
        return reject(response.json.meta.error)
      })
      .catch(err =>
        reject({
          networkError: err.message,
        })
      )
  )
}
