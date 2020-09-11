const mongoose = require('mongoose');

module.exports = mongoose.connect("mongodb://localhost:27017/self-game", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
