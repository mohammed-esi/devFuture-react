const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicesSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  profile: {},
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  email: {
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('servicess', ServicesSchema);
