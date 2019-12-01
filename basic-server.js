import bodyParser from "body-parser"
import express from "express"

const articlesInfo = {
    "learn-react" : {
        upvotes: 0,
    },
    "learn-javascript" : {
        upvotes: 0,
    },
    "learn-css": {
        upvotes: 0
    }
}

const app = express()

app.use(bodyParser.json())

app.post("/api/articles/:name/upvote",(req,res)=>{
    const articleName = req.params.name
    articlesInfo[articleName].upvotes += 1
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)
})
app.listen(8000, ()=> console.log("listening on port 8000"))
