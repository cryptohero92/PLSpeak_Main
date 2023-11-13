require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const http = require("http");
var cors = require('cors')
const connectDB = require('./db/connect')
const UserRouter = require('./routes/users')
const AuthRouter = require('./routes/auth')
const MessagesRouter = require('./routes/messages')
const MessageRouter = require('./routes/message')
const ReferralsRouter = require('./routes/referrals')
const PostRouter = require('./routes/post')
const CommentRouter = require('./routes/comment')
const AttachmentRouter = require('./routes/attachment')
const ChattRouter = require('./routes/chat')
const fs = require("fs");


const parseResponse = require('./middlewares/parseResponse');

const validateJwtToken = require('./middlewares/auth')
const { celebrate, Joi, errors, Segments } = require('celebrate');
const registerSockets = require('./sockets/index');
const insertSeeds = require('./seeds');


const app = express();

app.use(cors())

const port = process.env.SERVER_PORT || 5000
const server = app.listen(port, () => console.log(`App listening on port ${port}!`));

// build-in middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());


const io = registerSockets(server);
app.set('io', io)

app.use(parseResponse)
app.use('/public', express.static('public'))
const folderName = "public/data/uploads";
fs.mkdir(folderName, { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  }
});
//public routes 
app.use('/api/v1/auth', AuthRouter);
// app.use('/api/v1/admin', AdminRouter);
// app.use('/api/v1/games', GamesRouter);
// app.use('/api/v1/currency', CoinRouter);
// app.use('/api/v1/players', PlayersRouter);
app.use('/api/v1/messages', MessagesRouter);
app.use('/api/v1/post', PostRouter);
app.use('/api/v1/comment', CommentRouter);
app.use('/api/v1/users', UserRouter);

app.use(validateJwtToken)
//private routes
app.use('/api/v1/message', MessageRouter);
app.use('/api/v1/referral', ReferralsRouter);
app.use('/api/v1/attachment', AttachmentRouter);
app.use('/api/v1/chat',ChattRouter)


// app.use('/api/v1/rewards', RewardsRouter);
// app.use('/api/v1/matches', MatchesRouter);
// app.use('/api/v1/transactions', TransactionsRouter);


// application middlewares
app.use('*', (req, res) => {
    res.sendError({
        message: 'No route found!',
        statusCode: 404
    })
});

app.use(errors());


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await insertSeeds();
        // app.listen(port, () => console.log(`App listening on port ${port}!`));
    } catch (err) {
        console.log(err);
    }
}
start();
