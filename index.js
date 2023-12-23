require('dotenv').config()
const express = require('express')
const app = express()
//const port = 5000

const gitHubData = {
  "login": "MujtabaMubasher",
  "id": 81616586,
  "node_id": "MDQ6VXNlcjgxNjE2NTg2",
  "avatar_url": "https://avatars.githubusercontent.com/u/81616586?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/MujtabaMubasher",
  "html_url": "https://github.com/MujtabaMubasher",
  "followers_url": "https://api.github.com/users/MujtabaMubasher/followers",
  "following_url": "https://api.github.com/users/MujtabaMubasher/following{/other_user}",
  "gists_url": "https://api.github.com/users/MujtabaMubasher/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/MujtabaMubasher/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/MujtabaMubasher/subscriptions",
  "organizations_url": "https://api.github.com/users/MujtabaMubasher/orgs",
  "repos_url": "https://api.github.com/users/MujtabaMubasher/repos",
  "events_url": "https://api.github.com/users/MujtabaMubasher/events{/privacy}",
  "received_events_url": "https://api.github.com/users/MujtabaMubasher/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Mujtaba Mubasher",
  "company": null,
  "blog": "",
  "location": "Lahore, Pakistan",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-03-30T08:24:00Z",
  "updated_at": "2023-10-01T06:06:02Z"
}

app.get('/', (req, res) => {
  res.send('Hello World! , <ul> <li><a href="https://jubilant-dollop-7699qjpxggcwpv6-3000.app.github.dev/google">Google</a></li> <li><a href="https://jubilant-dollop-7699qjpxggcwpv6-3000.app.github.dev/github">GitHub</a></li> <li><a href="https://jubilant-dollop-7699qjpxggcwpv6-3000.app.github.dev/githubapi">Github MM Data</a></li></ul>')
})

app.get('/google' , (req , res)=>{
    res.send(`<h1>google.com<h1/>`)
})

app.get('/github', (req,res)=>{

    res.send('<a href="https://github.com/MujtabaMubasher">Visit Mujtaba Mubasher GitHUb profile</a>')
})

app.get('/githubapi' , (req,res)=>{
    res.json(gitHubData)
})

//app.listen(port)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
  //console.log(process.env);
})