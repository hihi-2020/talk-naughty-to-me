import request from 'superagent'
const insultURL = "/api/insult/"
const imgURL = 'https://api.imgflip.com/get_memes'


export function imageApi (){
    return request
     .get(imgURL)
     .then(res => res.body)
}


export function getInsult(name) {
  console.log(insultURL + name)
  return request
  .get(insultURL + name)
  .then(res => res.body)
}

export function getHistory() {
  return 
}
