const captainLogRepository = require('../repositories/captainLogRepository');

module.exports = {
    async getAll (req, res) {
        const allCaptainLogs = await captainLogRepository.getAll();
        return res.render('captain/index.ejs', {allCaptainLogs});
    },
    async getNewForm (req, res) {
        await res.render('captain/new.ejs');
    },

    async show (req, res) {
        try{
        const showOneCaptainLogs = await captainLogRepository.show(req.params.title);
        return res.render('captain/show.ejs', {showOneCaptainLogs})
        }catch(err) {
            return res.send(err.message);
        }
    }, 
    
    async create (req, res) {
        try{
            const item = {
                'title': req.body.title,
                'entry': req.body.entry,
                'isShipBroken': req.body.shipIsBroken,
                'date': req.body.date

                
            };
            
            await captainLogRepository.create(item);
            return res.redirect('/logs');
        }catch (err) {
            return res.send(err.message);
        }
    },

    async getEditForm (req, res) {
        try{
            const item = await captainLogRepository.getOneByTitle(req.params.title);
            return res.render('captain/edit.ejs', {item});
        }catch(err) {
            return res.render('errors/404', {err});
        }

    },

    async update (req, res) {
        try{
            const item = {
                'title': req.body.title,
                'entry': req.body.entry,
                'isShipBroken': req.body.shipIsBroken,
                'date': req.body.date
            };
            await captainLogRepository.update(req.params.title, item);
            return res.redirect('/logs');
        }catch(err) {
            return res.render('errors/404', {err});
        }
    },
    async delete (req, res) {
        try{
            console.log(req.params)
            await captainLogRepository.delete(req.params);
            return res.redirect('/logs');
        }catch (err) {
            return res.send(err.message);
        }
    }
    
    
};
