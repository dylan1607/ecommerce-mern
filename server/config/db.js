require("dotenv").config();
const mongoos = require("mongoose");

// const connectdb = async () => {
//     try {
//         await mongoos.connect(process.env.MONGO_URL, {
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
  await mongoos
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("Connection Database Success !!"))
    .catch((error) => {
      console.error("Failed Connection to Database");
      process.exit(1);
    });
};

module.exports = connectdb;
