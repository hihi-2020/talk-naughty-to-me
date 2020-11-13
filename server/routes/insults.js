const express = require('express')
const router = express.Router()
const request = require('superagent')

const insultURL = 'https://insult.mattbas.org/api/insult.json?who='

const db = require('../database/db.js')


//RECIEVES CALL FROM OUR FRONT END, CALLS EXTERNAL API, SENDS RESPONSE BACK TO OUR FRONT END & ADDS TO DATABASE
router.get('/insult/:name', (req, res) => {
    const name = req.params.name
<<<<<<< HEAD
    // console.log(req.params.name)
||||||| 5aae07b
    // console.log(req.params.name)

=======
>>>>>>> 4aa89c6a4bec1188812d784ccabf9472d7ec81c1
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
      let arr = []
      for(let i = insults.length -1; i > insults.length -11; i--){
        arr.unshift(insults[i].insultString)
      }  
      console.log(arr)
      res.json(arr)
    })
    .catch(err => {
      res.json({message: err})
    }) 
})

module.exports = router