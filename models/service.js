const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  task: {
    type: String,
    required: true,
    trim:true,
  },
  
  price: {
    type: Number,
    default: 0,
    required:true
  }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
