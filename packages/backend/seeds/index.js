const Users = require("../model/users");
const Category = require("../model/category");
const Event = require("../model/event");
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
            await Category.findOneAndUpdate(category, category, { upsert: true });
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
            },
            {
                parent: 'Politics',
                title: 'Courts'
            },
            {
                parent: 'Politics',
                title: 'Elections'
            },
            {
                parent: 'Politics',
                title: 'Global Politics'
            },
            {
                parent: 'Politics',
                title: 'Middle East'
            },
            {
                parent: 'Politics',
                title: 'Oil'
            },
            {
                parent: 'Politics',
                title: 'US Politics'
            },
            {
                parent: 'Pop Culture',
                title: 'Celebrities'
            },
            {
                parent: 'Pop Culture',
                title: 'Film & TV'
            },
            {
                parent: 'Pop Culture',
                title: 'Music'
            },
            {
                parent: 'Pop Culture',
                title: 'Twitter'
            },
            {
                parent: 'Science',
                title: 'Academia'
            },
            {
                parent: 'Science',
                title: 'Climate & Weather'
            },
            {
                parent: 'Science',
                title: 'Space'
            },
            {
                parent: 'Sports',
                title: 'Basketball'
            },
            {
                parent: 'Sports',
                title: 'Boxing/MMA'
            },
            {
                parent: 'Sports',
                title: 'Chess'
            },
            {
                parent: 'Sports',
                title: 'ESports'
            },
            {
                parent: 'Sports',
                title: 'Football'
            },
            {
                parent: 'Sports',
                title: 'Racing'
            },
            {
                parent: 'Sports',
                title: 'Soccer'
            }

        ];

        for (const category of subCategories) {
            parent = await Category.findOne({title: category.parent});
            await Category.findOneAndUpdate({title: category.title}, {parentID: parent._id, title: category.title}, {upsert: true});
        }
    }

    const insertEvents = async () => {
        var events = [
            {
                title: '2023 Global Heat Increase',
                detail: `This market will resolve to "Yes" if the data for the Global Land-Ocean Temperature Index for 2023 shows an increase of 1.13°C or greater when it is released. Otherwise, this market will resolve to "No".

                An anomaly of 1.13°C or greater for 2023 will be sufficient to resolve this market to "Yes" immediately once the data becomes available regardless of whether the figure for 2023 is later revised.
                
                The primary resolution source for this market will be the figure found in the table titled "Land-Ocean Temperature Index (C)" under the column "No_Smoothing" in the row "2023" (https://data.giss.nasa.gov/gistemp/graphs/graph_data/Global_Mean_Estimates_based_on_Land_and_Ocean_Data/graph.txt). If NASA's "Global Temperature Index" is rendered permanently unavailable, other information from NASA may be used. If no information for 2023 is provided by NASA by March 1, 2024, 11:59:59 PM ET, this market will resolve 50-50.`,
                image: `https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2F2023-globa_401a763c5a243d579de21a5ef5309f38_256x256_qual_100.webp&w=96&q=100`,
                category: 'Climate & Weather',
                endDate: new Date('2023-12-31'),
                bettingOptions: [
                    {
                        title: '1.05+'
                    },
                    {
                        title: '1.08+'
                    },
                    {
                        title: '1.11+'
                    },
                    {
                        title: '1.13+'
                    },
                    {
                        title: '1.15+'
                    },
                    {
                        title: '1.18+'
                    }
                ]
            },
            {
                title: 'Will ETH hit $2,500 by EOY?',
                detail: `This market will immediately resolve to “Yes” if any Coinbase 1 minute candle for ETH-USD between 9 Nov '23 00:00 and 31 Dec '23 23:59 in the ET timezone has a final “High” price of 2,500.00 or higher. Otherwise, this market will resolve to "No".

                The resolution source for this market is https://www.coinbase.com/, specifically the ETH-USD "High" prices currently available at https://www.coinbase.com/advanced-trade/ETH-USD with “1m” and “Candles” selected on the top bar.
                
                To see the "High" prices, mouse over particular candles and look at the value "H" at the top of the chart.
                
                Please note that this market is about the price according to Coinbase ETH-USD, not according to other sources or spot markets.`,
                image: `https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fwill-eth-h_f160175896785659eb445b920ff6ea54_256x256_qual_100.webp&w=96&q=100`,
                category: 'Prices',
                endDate: new Date('2023-12-31')
            },
        ];

        for (const event of events) {
            let category = await Category.findOne({title: event.category});
            event.category = category._id;
            console.log('Event Category is ', event.category);
            await Event.findOneAndUpdate({title: event.title}, event, {upsert: true});
        }
    }

    try {
        await insertUsers();
        await insertCategories();
        await insertEvents();
    } catch (error) {
        console.log(error)
    }
}

module.exports = insertSeeds
