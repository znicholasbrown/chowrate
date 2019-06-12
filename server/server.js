const express = require('express');
const path = require('path');

const app = express();

const SERVER_PORT = process.env.SERVER_PORT;


app.get('/api/getList', ( req, res ) => {
    let list = ['l1', 'l2', 'l3'];

    res.json(list);
    console.log('Sent list: ', list);
});

app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${ SERVER_PORT }.`));