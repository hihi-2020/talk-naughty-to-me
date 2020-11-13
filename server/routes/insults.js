const express = require('express')
const router = express.Router()
const request = require('superagent')

const insultURL = 'https://insult.mattbas.org/api/insult.json?who='

const db = require('../database/db.js')


//RECIEVES CALL FROM OUR FRONT END, CALLS EXTERNAL API, SENDS RESPONSE BACK TO OUR FRONT END & ADDS TO DATABASE
router.get('/insult/:name', (req, res) => {
    const name = req.params.name
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
      res.json({message: err})
    }) 
})

router.get('/topten', (req,res) => {
  return db.getInsults()
    .then(insults => {
      console.log(insults)
      let arr = insults.map(insult => {
        return insult.insultString
      })
      res.json(arr)
    })
    .catch(err => {
      console.log(err)
      res.json({message: err})
    }) 
})

module.exports = router