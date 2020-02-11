const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// const User=require('../models/user');
// const jwt = require('jsonwebtoken');

//create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'simpledb'
});

db.connect((err) => {
    if (err) throw err;
    console.log('mysql connected');
  
  });

  //for testing
router.get('/', (req, res,next) => {
    res.send('from api');
  });
  
  //register
  router.post('/register', (req, res,next) => {
  
    let email = req.body.email;
    let password = req.body.password;
  
    let sql = "INSERT INTO user1 VALUES (?,?)";
    db.query(sql, [email, password], function (err, result) {
      if (err) {
        console.password(err)
      }
      else {
        // let payload = { subject: result._id }
        // let token = jwt.sign(payload, 'secretKey')
        res.send(result);
      }
    })
    //login
router.post('/login', (req, res,next) => {
    let email = req.body.email;
    let password = req.body.password;
    let sql = "SELECT * FROM user1 WHERE email = ?"
    db.query(sql, [email,password], function (error, results) {
      if (error) {
        // console.log("error ocurred",error);
        res.send({
          "code": 400,
          "failed": "error ocurred"
        })
      } else {
        // console.log('The solution is: ', results);
        if (results.length > 0) {
          if (results[0].email==email && results[0].password == password) {
            // let payload = { subject: results._id }
            // let token = jwt.sign(payload, 'secretKey')
            //  return res.status(200).send({ token })
            res.send(results)
  
          } else {
            res.send({
              "code": 204,
              "success": "Email and password does not match"
            });
          }
          
        }
        else{
          res.send({
            "code": 204,
            "success": "Email and password does not match"
          });
        }
      }
    });
  
  });

  
  
  });

  module.exports=router;