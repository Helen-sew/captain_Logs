const {expect} = require('chai'); 
const captainLogRepository = require('../captainLogRepository');
const db = require('../../db');

describe('captainLogRepository.getAll', () => {
    beforeAll(async() => {
        await db.connect();
    });

    afterAll(async() => {
        await db.disconnect();

    });

    it('should return an array', async() => {
        const captainLogs = await captainLogRepository.getAll();
        expect(captainLogs).to.be.an('array');
    });

    it('should return all captainLogs', async() => {
        const captainLogs = await captainLogRepository.getAll();
        expect(captainLogs.length).to.be.greaterThan(0);
    })



});