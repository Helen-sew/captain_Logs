const {expect} = require('chai');
const captainLogRepository = require('../captainLogRepository');
const db = require('../../db');

describe('captainLogRepository.show', () => {
    beforeAll(async() => {
        await db.connect();
    });

    afterAll(async() => {
        await db.disconnect()
    });

    it('should return an object', async()=> {
        const oneCaptainlog = await captainLogRepository.show('The Kelvan incident');
        expect(oneCaptainlog).to.be.an('object');
        expect(oneCaptainlog.title).to.equal('The Kelvan incident')
    });

    it('should return an object, ignoring case sensitivity', async() => {
        const oneCaptainlog = await captainLogRepository.show('The Kelvan incident');
        expect(oneCaptainlog.title).to.equal('The Kelvan incident');
    });

    it('should throw an error if the title cannot be found', async() => {
        try{
            await captainLogRepository.show('Apple');
            
        }catch (err) {
            expect(err.message).to.equal('Non-existence');
        }
    });


});

