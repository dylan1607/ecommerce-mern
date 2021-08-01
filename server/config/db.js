require('dotenv').config();
const mongoos = require('mongoose');
 
// const connectdb = async () => {
//     try {
//         await mongoos.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         console.log("MongooseDB connection success")
//     } catch (error) {
//         console.log("Connect database failed");
//         process.exit(1);
//     }
// }

const connectdb = async () => {
    await mongoos.connect(process.env.MONGO_URIa, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(res => console.log('Connection Success !!'))
    .catch (error => {
        console.error('Connection Failed');
        process.exit(1);
    })
}

module.exports = connectdb;