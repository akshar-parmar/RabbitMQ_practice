const amqplib = require('amqplib');

//let us connect to server of rabbitMQ
const connectQueue = async()=>{
    try {
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();
        const queue = 'hello';

          //if queue is not present then create a queue
        channel.assertQueue(queue, {
            durable: false
          });

            // Listener
            channel.consume(queue, (msg) => {
            if (msg !== null) {
            console.log('Recieved:', msg.content.toString());
            channel.ack(msg);
            } else {
            console.log('Consumer cancelled by server');
            }
        });

    } catch (error) {
        console.log("something went wrong on basic_receiver.js");
        throw error;
    }
}
module.exports = connectQueue;