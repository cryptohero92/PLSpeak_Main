const { jwtVerify } = require('../helpers/JWT');
// const Admin = require('../model/admin');
const Users = require('../model/users');

// const PersonType = db.PersonType


module.exports = function (req, res, next) {
  try {
    const accessToken = req.headers.authorization && req.headers.authorization.split(' ')[1];
    // console.log("s-s-s>>>>>>>> accessToken",accessToken)
    if (!accessToken) return res.sendError({ success: false, message: 'Access denied. No token provided.' });
    const decoded = jwtVerify(accessToken);
    console.log("s-s-s>>>>>>>> tocken",decoded)
    Users.findOne({ _id: decoded.userId }).then(user => {
      if (!user) return res.sendError({ message: 'The user does not exist or session is expired!' });
      console.log("s-s-s>>>>>>>> user",user)
      req.user = user
      next();
    }).catch((err) => {
      return res.status(404).sendError({ message: err.message || 'The user does not exist' });
    })
  } catch (err) {
    return res.status(400).sendError({ message: err.message || 'Invalid token' });
  }
}