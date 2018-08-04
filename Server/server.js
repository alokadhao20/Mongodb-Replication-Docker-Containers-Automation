var MongoClient = require('mongodb').MongoClient;
const express = require('express')
const app = express()
MongoClient.connect("mongodb://10.0.2.15:27200,10.0.2.15:27118,10.0.2.15:27119/teste?replicaSet=rs1", function (err, db) {
        if (err) {
            console.log("Connection error ", err);
        } else {
            global.db = db;
           
        }
    });
app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/insert', function (req, res) {
     db.collection("repl").insert({ 'x': 1 }, function (err, doc) {
                if (err) {
                    console.log("insertion error ", err);
                     res.send(err)
                } else {
                     console.log("Data inserted ", doc);
                   res.send(doc);
                }
            });  
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})