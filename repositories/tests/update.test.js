const {expect} = require('chai');
const captainLogRepository = require('../captainLogRepository');
const db = require('../../db');

describe('captainLogRepository.update', () => {
    beforeAll(async() => {
        await db.connect();
    });

    afterAll(async() => {
        await db.disconnect();
    });

    it('should update an existing object and return an updated object', async() => {
        const updatedCaptainLog = await captainLogRepository.update('The real conflict', {
            "title" :"The Rose Matter",
            "entry":"Captain's log, Stardate 4658.9. With the Enterprise under control of the Kelvans, we are approaching the energy barrier at the edge of our galaxy. Spock and Scotty have devised a suicide plan to stop the Kelvans. They have rigged the ship to explode on my signal." ,
            "shipIsBroken" : "true"  
        });
        expect(updatedCaptainLog.result.n).to.equal(1);
    });

    it('should return error when item to be updated does not exist', async() => {
        try{
        const updatedCaptainLog = await captainLogRepository.update('Monster', {
            "title" :"The Rose Matter",
            "entry":"Captain's log, Stardate 4658.9. With the Enterprise under control of the Kelvans, we are approaching the energy barrier at the edge of our galaxy. Spock and Scotty have devised a suicide plan to stop the Kelvans. They have rigged the ship to explode on my signal.",
            "shipIsBroken" :"false"
        });
            expect(updatedCaptainLog.result.n).to.equal(1);
        }catch(err) {
            expect(err.message).to.be.an('string');
        }
    });
});