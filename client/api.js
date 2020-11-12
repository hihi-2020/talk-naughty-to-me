import request from 'superagent'

const insultURL = "/api/insult/"

export function getInsult(name) {
  return request
  .get(insultURL + name)
  .then(res => res.body)
}

export function getHistory() {
  return 
}