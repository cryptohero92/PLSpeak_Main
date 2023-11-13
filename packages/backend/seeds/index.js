const Users = require("../model/users");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const insertSeeds = async () => {

    const insertUsers = async () => {
        var users = [
            { userName: 'Admin', accountAddress: process.env.SUPER_ADMIN_WALLET_ADDRESS, privilege: 1},
        ];
        for (const user of users) {
            Users.findOneAndUpdate(user, user, { upsert: true }, (err, doc) => {
                console.log(doc);
            });
        }
    }
    try {
        await insertUsers();
    } catch (error) {
        console.log(error)
    }
}

module.exports = insertSeeds
