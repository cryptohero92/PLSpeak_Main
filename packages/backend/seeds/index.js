const Users = require("../model/users");
const Category = require("../model/category");
const Events = require("../model/event");
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

    const insertCategories = async () => {
        var categories = [
            {
                title: 'AI'
            },
            {
                title: 'Business'
            },
            {
                title: 'Crypto'
            },
            {
                title: 'Politics'
            },
            {
                title: 'Pop Culture'
            },
            {
                title: 'Science'
            },
            {
                title: 'Sports'
            }
        ];
        for (const category of categories) {
            Category.findOneAndUpdate(category, category, { upsert: true }, (err, doc) => {
                console.log(doc);
            });
        }
        var subCategories = [
            {
                parent: 'AI',
                title: 'Chat Bots'
            },
            {
                parent: 'Business',
                title: 'Billionaires'
            },
            {
                parent: 'Business',
                title: 'Commodity Prices'
            },
            {
                parent: 'Business',
                title: 'Fed interest rates'
            },
            {
                parent: 'Business',
                title: 'Finance'
            },
            {
                parent: 'Business',
                title: 'Tech'
            },
            {
                parent: 'Crypto',
                title: 'Airdrops'
            },
            {
                parent: 'Crypto',
                title: 'Exchanges'
            },
            {
                parent: 'Crypto',
                title: 'Exploits'
            },
            {
                parent: 'Crypto',
                title: 'Friend Tech'
            },
            {
                parent: 'Crypto',
                title: 'Market Caps'
            },
            {
                parent: 'Crypto',
                title: 'Prices'
            },
            {
                parent: 'Crypto',
                title: 'Stable Coins'
            }
        ];

        for (const category of subCategories) {
            parent = await Category.findOne({title: category.parent});
            Category.findOneAndUpdate({title: category.title}, {parentID: parent._id, title: category.title}, {upsert: true}, (err, doc) => {
                console.log(doc);
            })
        }
    }

    try {
        await insertUsers();
        await insertCategories();
    } catch (error) {
        console.log(error)
    }
}

module.exports = insertSeeds
