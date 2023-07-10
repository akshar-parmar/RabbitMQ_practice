const express  = require('express');
const connectQueue = require('./routing_sending');
const app = express();
const PORT = 3000;
const setUpServer = ()=>{
    app.listen(PORT,()=>{
        console.log("Producer server started at",PORT);
        console.log("CALLING CONNECTQUEUE");
        connectQueue();
    });
}
setUpServer();