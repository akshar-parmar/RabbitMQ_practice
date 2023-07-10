const express  = require('express');
const connectQueue = require('./routing_receiving');
const app = express();
const PORT = 4000;
const setUpServer = ()=>{
    app.listen(PORT,()=>{
        console.log("Consumer server started at",PORT);
        console.log("RECEIVING CONNECT_QUEUE CALLED");
        connectQueue();
    });
}
setUpServer();