const express = require('express')
const app = express()
// simple hello world node app 
// shows the purpose of branches, tags, and releases!!!!!!!
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
    res.send('hello bryce! nice to see you!')
}); app.listen(APP_PORT, () => {
    console.log(`Running app at port:${APP_PORT}`)
})
