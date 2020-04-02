const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index (request, response)  {
        const animais = await connection ('animais').select('*');
   
        return response.json(animais);
       },
    
    async create(request,response) {
        const {name, dogbreed, age } = request.body;

        const cod = crypto.randomBytes(4).toString('HEX');
    
    await connection ('animais').insert({
            cod,
            name,
            dogbreed,
            age,
        
        })
               
        return response.json({ cod }); 
    },



    
};