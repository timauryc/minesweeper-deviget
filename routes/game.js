const gameController = require('../controllers').gameController

module.exports = function (app) {
    app.get('/game/:level', (req, res) => {
        gameController.newGame(req.params.level).then((responseObject) => {
            res.status(responseObject.status).send(responseObject.body)
        })
    })
    
    app.post('/game', (req, res) => {
        gameController.clickBoard(req.body).then((responseObject) => {
            res.status(responseObject.status).send(responseObject.body)
        })
    })
}