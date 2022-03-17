export function fetchArtist() {
    return request
      .get('/api/v1/meettheartist')
      .then((res) => {
        return res.body
      })
      .catch((err) => {
        console.error({ error: err.message })
      })
  }