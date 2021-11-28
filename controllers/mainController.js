const dataMapper = require('../src/dataMapper');

const mainController = {

    homePage : (req,res)=>{
        dataMapper.fetchAllData((err, data)=>{

            if(!err){
                res.send(data.rows);
            }
            else{
                res.send('error query: ' + err);
            }
            
        });

        

    }
};
module.exports = mainController;
