const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("server is ready ");
});

app.get("/api/jokes",(req,res)=>{
    const jokes =[
        {
            "id": 1,
            "title": "Knock, Knock",
            "content": "Who's there? Atch. Atch who? Bless you!"
          },
          {
            "id": 2,
            "title": "Dad Joke",
            "content": "Why don't scientists trust atoms? Because they make up everything."
          },
          {
            "id": 3,
            "title": "Pun Time",
            "content": "I used to be a baker because I kneaded dough."
          }

    ];
    res.send(jokes)
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});
