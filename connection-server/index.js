const net = require('net');

const connection = net.createConnection({
    port: 8124
}, () => { 
    console.log('connection successful!');
});

connection.on('error', (err) => {
    console.log(err);
});

connection.on('close', () => {
    console.log('connection close');
});

connection.on('data', (data) => {
    console.log(data.toString());
});