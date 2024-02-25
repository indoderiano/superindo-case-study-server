const jwt=require('jsonwebtoken')

module.exports={

    checkAdmin: (req, res, next) => {

      console.log("thetasdfasdf", req.get("Authorization"));
      // var ret = "data-123".replace(/data-/g,'');

      let access_token = req.get("Authorization").replace(/Bearer /g, '');

      console.log("access token",access_token);

      let private_key = "superindo";
      // let access_token = jwt.sign({ role: role }, private_key, {expiresIn: '24h'});

      jwt.verify(access_token, private_key, function(err, decoded) {
        if (err) {
          return res.status(500).send({error_description: "access denied"});
        } else {
          // console.log("decoded ", decoded);
          if (decoded.role == "administrator") {
            req.decoded = decoded;
            next()
          } else {
            return res.status(500).send({error_description: "access denied"});
          }
        }

      })
    },
    checkCustomer: (req, res, next) => {

      console.log("thetasdfasdf", req.get("Authorization"));
      // var ret = "data-123".replace(/data-/g,'');

      let access_token = req.get("Authorization").replace(/Bearer /g, '');

      console.log("access token",access_token);

      let private_key = "superindo";
      // let access_token = jwt.sign({ role: role }, private_key, {expiresIn: '24h'});

      jwt.verify(access_token, private_key, function(err, decoded) {
        if (err) {
          return res.status(500).send({error_description: "access denied"});
        } else {
          // console.log("decoded ", decoded);
          if (decoded.role == "customer") {
            req.decoded = decoded;
            next()
          } else {
            return res.status(500).send({error_description: "access denied"});
          }
        }

      })
    }

}