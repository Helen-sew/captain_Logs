const captainLogController = require('./controllers/captainLogController');

module.exports = app => {
    app.get('/logs', captainLogController.getAll);
    // app.get('/logs/:title', captainLogController.show);
    app.get('/logs/new', captainLogController.sendNewForm);
    app.post('/logs', captainLogController.create);


};


