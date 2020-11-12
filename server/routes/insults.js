const express = require('express')
const router = express.Router()
const request = require('superagent')

const insultURL = 'https://insult.mattbas.org/api/insult.json?who=blackie'

// const db = require('../db/db.js')


//RECIEVES CALL FROM OUR FRONT END, CALLS EXTERNAL API, SENDS RESPONSE BACK TO OUR FRONT END
router.get('/:name', (req, res) => {
   
    const name = req.params.name
    
    return request
      .get(insultURL)
      .then(response => {
        console.log(JSON.parse(response.text).insult)
        res.send(JSON.parse(response.text).insult)
      })
      .catch(err => res.json({message: err}))
  })


module.exports = router