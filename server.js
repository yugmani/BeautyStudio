const express = require("express");
const path = require("path");
const mongoose = require("mongoose");


// const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(routes);        //new

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("abeautystudio/public"));
}



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

// app.use(routes);

// app.use(express.static("./abeautystudio/public"));
// Send every request to the React app
// Define any API routes before this runs



app.get('*', (req, res) => {
    const rootHtmlPath = path.resolve(__dirname, '.', 'abeautystudio/public', 'index.html');
  res.sendFile(rootHtmlPath);
  console.log(rootHtmlPath);
})

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
