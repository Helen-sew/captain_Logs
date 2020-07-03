const db = require('../db');

module.exports = {
    async getAll() {
        const captainLogs = await db.captain.find().toArray();
        console.log(captainLogs);
        return captainLogs;
    },
    async show(title) {
        const oneCaptainLog = await db.captain.findOne({title: {'$regex': `^${title}$`, '$options': 'i'}});
        console.log(oneCaptainLog);
        if(!title) throw new Error("No such title");
        return oneCaptainLog;
    },
    async create(item) {
        try{
            return await db.captain.insertOne(item);
        } catch(err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
        }
    },
    async update(title, item) {
        try{
            const updatedCaptainLog = await db.captain.updateOne({
                title: {'$regex': `^${title}$`, '$options': 'i'}
             }, {
                 $set: item
             }); 
             if(!updatedCaptainLog.result.n) {
                 throw new Error(`This item with title ${title} does not exists!`);
            }
            return updatedCaptainLog;

        } catch(err) {
            throw new Error(`Due to ${err.message}, you cannot update item with ${JSON.stringify(item)}`);
        }
    },
    async delete(item) {
        const deletedCaptainLog = await db.captain.deleteOne(item);
        return deletedCaptainLog;
    },
    async getOneByTitle(title) {
        const foundCaptainLog = await db.captain.findOne({title: {'$regex': `^${title}$`, '$options': 'i'}});
        if(!title) throw new Error("No such title");
        return foundCaptainLog;
    }

};