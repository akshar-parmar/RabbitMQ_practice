const amqplib = require('amqplib');

const EXCHANGE_NAME = 'logs';
const EXCHANGE_TYPE = 'fanout';
const QUEUE_NAME = '';

const connectQueue = async()=>{
    try {
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();

        await channel.assertExchange(EXCHANGE_NAME,EXCHANGE_TYPE, {
            durable: false
          });

        const q = await channel.assertQueue(QUEUE_NAME);
        const BINDING_KEY = "";
        await channel.bindQueue(q.queue,EXCHANGE_NAME,BINDING_KEY);

        channel.consume(q.queue, (msg) => {
            if (msg) {
              console.log(msg.content.toString());
              channel.ack(msg);
            }
          });
    } catch (error) {
        console.log("something went wrong on publisher_sender.js");
        throw error;
    }
};

module.exports = connectQueue;

