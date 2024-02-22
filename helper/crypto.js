const crypto=require('crypto')

module.exports=(password)=>{
    return crypto.createHmac('sha256','superindo').update(password).digest('hex')
}