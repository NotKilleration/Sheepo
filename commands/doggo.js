module.exports = {
    name: 'doggo',
    async execute(message, args, Discord  ){
        

        message.react('🐶');

        const fetch = require('node-fetch')

        let keyword = "dog";


        let doggogif = `https://api.tenor.com/v1/search?q=${keyword}&key=${process.env.TENORKEY}&contentfilter=high`


        let response = await fetch(doggogif);

        let result = await response.json();

        const randomdoggo = Math.floor(Math.random() * result.results.length);

        const doggooo = result.results[randomdoggo].url


        message.channel.send(doggooo);


        
    
    


        
        


    }

};
