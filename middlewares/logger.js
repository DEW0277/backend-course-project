const logger = function (req, res, next) {
  console.log('Post requst');

  next()
};



module.exports = logger 
