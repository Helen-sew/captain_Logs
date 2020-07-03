const captainLogController = require('./controllers/captainLogController');

module.exports = app => {
    app.get('/logs', captainLogController.getAll);
    app.get('/logs/new', captainLogController.getNewForm);
    app.post('/logs', captainLogController.create);
    app.get('/logs/:title', captainLogController.show);
    app.get('/logs/:title/edit', captainLogController.getEditForm);
    app.put('/logs/:title', captainLogController.update);
    app.delete('/logs/:title', captainLogController.delete);

};


