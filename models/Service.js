const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceShema = new Schema({
  serviceId: String,
  groupId: String,
  description: String,
  name: String,
  price: Number
});

mongoose.model('service', serviceShema);
