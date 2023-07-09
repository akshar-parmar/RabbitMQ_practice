const express  = require('express');
const connectQueue = require('./basic_sender');
const app = express();
const PORT = 3000;
const setUpServer = ()=>{
    app.listen(PORT,()=>{
        console.log("Producer server started at",PORT);

        console.log("CALLING CONNECT_QUEUE");
        connectQueue();
    });
}
setUpServer();