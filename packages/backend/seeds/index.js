
// const Games = require("../model/games");
// const Admin = require("../model/admin");
const Users = require("../model/users");
// const Currency = require("../model/currency");
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Connect to MongoDB via 

const generateHash = async (password) => await bcrypt.hash(password, saltRounds);


const insertSeeds = async () => {
    const insertAdmin = async () => {
        var admins = [
            { name: 'Super Admin', email: 'admin@gmail.com', password: await generateHash('Admin@123') },
        ];
        for (const admin of admins) {
            Admin.findOneAndUpdate(admin, admin, { upsert: true }, (err, doc) => {
                console.log(doc);
            });
        }
    }

    const insertUsers = async () => {
        var users = [
            { userName: 'Guest', email: 'guest@gmail.com', password: await generateHash('Guest@123') },
        ];
        for (const user of users) {
            Users.findOneAndUpdate(user, user, { upsert: true }, (err, doc) => {
                console.log(doc);
            });
        }
    }

    // const insertCoin = async () => {
    //     var currencies = [
    //         { currencyName: 'ETH', isActive: true },
    //         { currencyName: 'BTC', isActive: true },
    //         { currencyName: 'BNB', isActive: true },
    //         { currencyName: 'USDT', isActive: true },
    //     ];
    //     for (const currency of currencies) {
    //         Currency.findOneAndUpdate(currency, currency, { upsert: true }, (err, doc) => {
    //             console.log(doc);
    //         });
    //     }
    // }

    // const insertGames = () => {
    //     var games = [
    //         { name: 'Crypto Blocks', isActive:true, gameTypes: ['machine', 'one-to-one', 'one-to-many'] },
    //         { name: 'Space Invaders',isActive:false, gameTypes: ['machine', 'one-to-one', 'one-to-many'] },
    //         { name: 'ultimate-pong',isActive:false, gameTypes: ['machine', 'one-to-one', 'one-to-many'] }

    //     ];
    //     for (const game of games) {
    //         Games.findOneAndUpdate(game, game, { upsert: true }, (err, doc) => {
    //             console.log(doc);
    //         });
    //     };
    // }
    try {
        await insertUsers();
        // await insertAdmin();
        // await insertGames();
        // await insertCoin();
    } catch (error) {
        console.log(error)
    }
}

module.exports = insertSeeds
