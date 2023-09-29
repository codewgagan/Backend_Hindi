require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const gitHubData = {
  login: "codewgagan",
  id: 122716450,
  node_id: "U_kgDOB1CBIg",
  avatar_url: "https://avatars.githubusercontent.com/u/122716450?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/codewgagan",
  html_url: "https://github.com/codewgagan",
  followers_url: "https://api.github.com/users/codewgagan/followers",
  following_url:
    "https://api.github.com/users/codewgagan/following{/other_user}",
  gists_url: "https://api.github.com/users/codewgagan/gists{/gist_id}",
  starred_url: "https://api.github.com/users/codewgagan/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/codewgagan/subscriptions",
  organizations_url: "https://api.github.com/users/codewgagan/orgs",
  repos_url: "https://api.github.com/users/codewgagan/repos",
  events_url: "https://api.github.com/users/codewgagan/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/codewgagan/received_events",
  type: "User",
  site_admin: false,
  name: "Gagan Gowda",
  company: null,
  blog: "",
  location: "Mumbai",
  email: null,
  hireable: true,
  bio: "👋 Hello there! I'm Gagan Gowda, a passionate computer science student in my third year of studies, specializing in web development.",
  twitter_username: null,
  public_repos: 8,
  public_gists: 0,
  followers: 1,
  following: 10,
  created_at: "2023-01-15T06:33:37Z",
  updated_at: "2023-09-21T11:15:31Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Gagans Account");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please Login Before Shopping</h1>");
});
app.get("/bookish", (req, res) => {
  res.send("<h2>Best Books for Soul</h2>");
});
app.get("/github", (req, res) => {
  res.json(gitHubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
