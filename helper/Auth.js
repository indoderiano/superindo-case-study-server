const jwt=require('jsonwebtoken')

module.exports={
    encrypt: ( password ) => {
      jwt.verify(token, 'shhhhh', function(err, decoded) {
        console.log(decoded.foo) // bar
      });
    }

}