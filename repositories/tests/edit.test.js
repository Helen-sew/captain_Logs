const {expect} = require('chai');
const captainLogRepository = require('../captainLogRepository');
const db = require('../../db');

describe('captainLogRepository.getOneByTitle', () => {
    beforeAll(async () => {
        await db.connect();
    }),

    afterAll(async () => {
        await db.disconnect();
    }),

    it('should return an object', async()=> {
        const foundCaptainlog = await captainLogRepository.getOneByTitle('The Kelvan incident');
        expect(foundCaptainlog).to.be.an('object');
        expect(foundCaptainlog.title).to.equal('The Kelvan incident')
    });

    it('should return an object, ignoring case sensitivity', async() => {
        const foundCaptainlog = await captainLogRepository.getOneByTitle('The Kelvan incident');
        expect(foundCaptainlog.title).to.equal('The Kelvan incident');
    });

    it('should throw an error if the title cannot be found', async() => {
        try{
            await captainLogRepository.getOneByTitle('Apple');
            
        }catch (err) {
            expect(err.message).to.equal('Non-existence');
        }
    });

});