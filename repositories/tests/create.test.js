const {expect} = require('chai');
const captainLogRepository = require('../captainLogRepository');
const db = require('../../db');

describe('captainLogRepository.create', () => {
    beforeAll(async() => {
        await db.connect();
    });

    afterAll(async() => {
        await db.disconnect();
    });

    it('should return insertedCount when insert a new object', async() => {
        const newCaptainLog = await captainLogRepository.create({
            
            "title" :"The real conflict",
            "entry": "Captain's log, Stardate 4211.4. Keeping our presence here secret… is an enormous tactical advantage. Therefore, I cannot risk contact with Starfleet Command. I must take action on my own judgment. I've elected to violate orders… and make contact with planet inhabitants here.",
            "shipIsBroken" : "true"
        });
        expect(newCaptainLog.insertedCount).to.equal(1);
    });
});