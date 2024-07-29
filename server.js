const express = require("express");
const http = require("http");
const app = express();
const port = 3000;

const urlencodedParser = express.urlencoded({extended: false});

app.use(express.static("public"))

app.get("/addFriend.html", function (request, response) {
  
})

app.post("/signup.html", urlencodedParser, function (request, response) {
  if(!request.body) return response.sendStatus(400);
  console.log(request.body);
  response.send(`${request.body.fname} - ${request.body.lname}`);
});
var server = http.createServer(app)
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });