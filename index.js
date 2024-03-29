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
        var {id} = req.params
         if(id != "favicon.ico"){
        let videoUrl = `https://www.youtube.com/watch?v=${id}`
        let videoInfo = await yt.getInfo(videoUrl)
        if(!videoInfo) {
         videoUrl = `https://youtu.be/Q3pOVxHW8XY?si=${id}`
         videoInfo = await yt.getInfo(videoUrl)     
        }
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
