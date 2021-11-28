const express = require('express');
require('dotenv').config();
const router = require('./src/router');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT,()=>{
    console.log(`host listen on http://localhost:${PORT}`);
})
