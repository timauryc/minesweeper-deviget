const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 8080;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static('public'));

//TODO
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/game.html');
})

require('./routes/game')(app);


app.listen(process.env.PORT || PORT, function () {
    console.log('listening on port: ', process.env.PORT || PORT);
});

module.exports = app;