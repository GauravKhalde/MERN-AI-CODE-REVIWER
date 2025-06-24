
const aiService = require('../services/ai.service') //// We're importing the generateContent function from ai.service.js,
// and using the name aiService to call it in this file.



module.exports.getReview= async(req,res)=>{
    const code = req.body.code;
    if(!code){
        return res.status(400).send("code is required")
    }

    const response = await aiService(code);

    res.send(response)
}