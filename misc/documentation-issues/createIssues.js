const fetch = require('node-fetch')
require('dotenv').config()

const file = require('./issues.json')

const createIssuesFromJSON = (file) => {
  file.forEach((issue) => {
    fetch(`https://api.github.com/repos/equinor/design-system/issues`, {
      method: 'post',
      body: JSON.stringify(issue),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${process.env.TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(`Issue created at ${json.url}`)
      })
  })
}

createIssuesFromJSON(file)
