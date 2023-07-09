const amqplib = require('amqplib');

//let us connect to server of rabbitMQ
const connectQueue = async()=>{
    try {
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();
        const queue = 'hello';
        const msg = 'Hello vinit jogi here';
          //if queue is not present then create a queue
        channel.assertQueue(queue, {
            durable: false
          });

          //send msg to queue
        channel.sendToQueue(queue, Buffer.from(msg));
    } catch (error) {
        console.log("something went wrong on basic_sender.js");
        throw error;
    }
}
module.exports = connectQueue;
