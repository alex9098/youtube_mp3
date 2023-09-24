const express = require("express")
const app = express()
const yt = require('ytdl-core')
const cors = require('cors')
const cheerio = require("cheerio")
PORT = process.env.PORT || 3000
app.use(cors({origin:"*"}))


app.get("/:id",async(req,res)=>{
    console.log("hello ");
    try {
         if(id != "favicon.ico"){
        const {id} = req.params
        const videoUrl = `https://www.youtube.com/watch?v=${id}`
        const videoInfo = await yt.getInfo(videoUrl)
        const audio = yt.filterFormats(videoInfo.formats,"audioonly")
        console.log(audio[0].url);
        const url = audio[0].url
        res.json({"url":url})
         }
    } catch (error) {
        console.log(error);
    }
})

app.get('/search/:id',async(req,res)=>{
    console.log(req.params.id);
    try {
        
    } catch (error) {
        res.status(404).send(error)
    }
})


app.listen(PORT,()=>{
    console.log("online now");
})
