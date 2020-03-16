// const mongoose = require("mongoose");
// const db = require("../models");

// // This file empties the Customers collection and inserts the customers below

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactbeauty"
// );


// //collection beautySeed

// const beautySeed = [
//   {
//     name: "Jenny",
//     email: "jenny@net.net",
//     phone: "3232221111",
//     service: "waxing",
//   },
//   {
//     name: "Shelly",
//     email: "shelly@net.net",
//     phone: "3233334444",
//     service: "threading",
//   },
//   {
//     name: "Samantha",
//     email: "sam@net.net",
//     phone: "3234445555",
//     service: "threading",
//   },
//   {
//     name: "Justin",
//     email: "threading",
//     phone: "3235556666",
//     service: "waxing",
//   }
// ];

// //db Beauty

// db.Beauty.remove({})
//   .then(() => db.Beauty.collection.insertMany(beautySeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
