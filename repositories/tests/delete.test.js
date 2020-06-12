const {expect} = require('chai');
const captainLogRepository = require('../captainLogRepository');
const db = require('../../db');

describe('captainLogRepository.delete', ()=> {
    beforeAll(async() => {
        await db.connect();
    });

    afterAll(async() => {
        await db.disconnect();
    });

    it('should delete an item', async()=>{
        const deletedCaptainLog = await captainLogRepository.delete({title:'The real conflict'});
        expect(deletedCaptainLog.result.n).to.equal(1);
    });
});