const express=require('express');
const bodyParser=require('body-parser');
const api=require('./routes/api');
const app=express();
const mysql=require('mysql');
const cors=require('cors');
// const User=require('./models/user');
// const sponsor=require('./models/sponsor')


app.use(bodyParser.json());
app.use(cors());


app.use('/api',api);

//cors
// app.use((req,res,next)=>{
//   res.header("Access-Control-Allow-Origin","*");
//   res.header("Access-Control-Allow-Origin","origin, X-Requested-With, Content-Type, Accept, Authorization");
// //   if(req.method ==='OPTIONS'){
// //       res.header('Access-Control-Allow-Origin','PUT, POST, PATCH, DELETE')
// //       res.status(200).json({});

  
// })

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// // Error handling
// app.use((req,res,next)=>{
//     const error=new Error('Not found');
//     error.status=404;
//     next(error);
// });

// app.use((error,req,res,next)=>{
//     res.status(error.status || 500);
//     res.json({
//         error:{
//             message:error.message
//         }
//     })
// })


//table created
app.get('/createpoststable',(req,res)=>{
    let sql='CREATE TABLE user1(email varchar(255),password varchar(255))';
    db.query(sql,(err,result)=>{
        if(err) throw err;
       console.log(result);
        res.send('created pulse table');
    });
});

app.get('/',function(req,res){
res.send('hello from server');
});

//server listening on port 3000
app.listen('3000',()=>{
    console.log('server started on 3000');
});
