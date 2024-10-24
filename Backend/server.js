const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'geo_construct'
})

app.get('/districts', (req, res)=>{
    const sql = "select * from districts";
    db.query(sql, (err, data)=>{
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
})

app.get('/', (req, res)=>{
    return res.json(" Hii I Came From the Backend Side")
})

app.listen(8081, ()=>{
    console.log("listening..");
})