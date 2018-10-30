const gameController = require('../controllers').gameController

module.exports = function (app) {
    app.get('/game/:level', (req, res) => {
        let responseObject = gameController.newGame(req.params.level)
        res.status(responseObject.status).send(responseObject.body)
    })
    
    app.post('/game', (req, res) => {
        let responseObject = gameController.clickBoard(req.body)
        res.status(responseObject.status).send(responseObject.body)
    })
}