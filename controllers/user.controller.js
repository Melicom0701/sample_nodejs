const userServices = require('../services/user.services.js');



const HelloWorld = (req, res) => {
    result = userServices.HelloWorld("Hello World");
    res.status(200).json({message: result});
}

module.exports = {
    HelloWorld
}
