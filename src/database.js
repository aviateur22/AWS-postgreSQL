/**Connection database AWS */
const {Client} = require('pg');

client = new Client();

client.connect((err)=>{

if(err){
    console.log('failed AWS database connection: ' + err.stack);
    return;
}
    console.log('success database connection');
});    
   

module.exports = client;