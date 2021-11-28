const database = require('./database');

/**
 * requete SQL
 */
const dataMapper = {

    fetchAllData : (callback)=>{
        const query = 'SELECT * FROM "family"';
        database.query(query, callback);

    },

    fetchDataById :()=>{

    },

    fetchDataByName : ()=>{

    }

}
module.exports = dataMapper;
