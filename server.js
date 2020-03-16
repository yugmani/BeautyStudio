const express = require("express");
const path = require("path");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 3000;



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("abeautystudio/public"));
}
*/

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/beauty",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);


const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log("MongoDB database connection established successfully");
})

// Use apiRoutes
const customerRouter = require('./routes/customers');
const serviceRouter = require('./routes/services')

app.use("/customers", customerRouter);
app.use("/services", serviceRouter);

// Send every request to the React app
// Define any API routes before this runs
/*
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./abeautystudio/public/index.html"));
  console.log(__dirname);
});
*/

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
