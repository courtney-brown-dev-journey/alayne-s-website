const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getArtist()
    .then((artist) => {
      return res.json(artist)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})