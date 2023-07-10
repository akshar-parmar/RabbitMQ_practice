const amqplib = require('amqplib');

const EXCHANGE_NAME = 'logs';
const EXCHANGE_TYPE = 'fanout';
const QUEUE_NAME = '';

const connectQueue = async()=>{
    try {
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();

        channel.assertExchange(EXCHANGE_NAME,EXCHANGE_TYPE, {
            durable: false
          });

        channel.publish(
            EXCHANGE_NAME, 
            QUEUE_NAME, 
            Buffer.from("Hello, sending message now to all queues using fanout")
            );
        
    } catch (error) {
        console.log("something went wrong on publisher_sender.js");
        throw error;
    }
};

module.exports = connectQueue;

