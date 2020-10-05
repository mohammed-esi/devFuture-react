const mongoose = require('mongoose');

// middleware to check a valid id
const checkObjectId = (idTocheck) => (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params[idTocheck])) {
    return res.status(500).json({ success: false, msg: 'Ivalid ID' });
  }
  next();
};

module.exports = checkObjectId;
