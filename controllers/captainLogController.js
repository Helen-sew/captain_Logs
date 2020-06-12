const captainLogRepository = require('../repositories/captainLogRepository');

module.exports = {
    async getAll (req, res) {
        const allCaptainLogs = await captainLogRepository.getAll();
        return res.render('captain/index.ejs', {allCaptainLogs});
    },

    // async show (req, res) {
    //     try{
    //     const showOneCaptainLogs = await captainLogRepository.show(req.params.title);
    //     return res.render('captain/show.ejs', {showOneCaptainLogs})
    //     }catch(err) {
    //         return res.send(err.message);
    //     }
    // }, 
    async sendNewForm (req, res) {
        await res.render('captain/new.ejs');
    },
    async create (req, res) {
        try{
            const item = {
                'title': req.body.title,
                'entry': req.body.entry,
                'isShipBroken': req.body.shipIsBroken
            };
            await captainLogRepository.create(item);
            return res.redirect('/logs');
        }catch (err) {
            return res.send(err.message);
        }
    },






};