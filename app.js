const express = require('express');
const app = express();

app.use(express.static(__dirname + '/www', {extensions: ['html']}));

app.listen(3001, () => console.log('Listening on port 3000!'));