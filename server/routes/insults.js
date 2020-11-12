const express = require('express')
const router = express.Router()
const request = require('superagent')

const insultURL = 'https://insult.mattbas.org/api/insult.json?who='

const db = require('../database/db.js')


//RECIEVES CALL FROM OUR FRONT END, CALLS EXTERNAL API, SENDS RESPONSE BACK TO OUR FRONT END
router.get('/:name', (req, res) => {
    const name = req.params.name
    // console.log(req.params.name)

    let insult
    return request
      .get(insultURL + name)
      .then(response => {
        insult = JSON.parse(response.text).insult
        // console.log(insult)
        return db.addInsult(insult)
    })
    .then(()=> {
        res.json(insult)
        
      })
      .catch(err => {
        // console.log(err)
        res.json({message: err})
      }) 
  })

module.exports = router