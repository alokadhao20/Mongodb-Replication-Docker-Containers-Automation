var MongoClient = require('mongodb').MongoClient;
const express = require('express')


ConnectionString = "mongodb://"+
            "10.42.104.177:27017,"+
            "10.42.156.183:27017,"+
            "10.42.246.241:27017/"+
            "failOverCheck"+
            "?replicaSet=replica_set"

MongoClient.connect(ConnectionString, function (err, db) {
        if (err) {
            console.log("Connection error ", err);
        } else {

            var documentNumber = 0;
            function insertDocument() {
                db.collection("repl").insert({'documentNumber': documentNumber++}, function(err, doc){
                if(err){
                    console.log("Data insert error  ", err);
                } else {
                    console.log("Document inserted", doc);
                }

                console.log("Dispatched insert");
                setTimeout(insertDocument, 1000);
            });
            }
            insertDocument();
           
        }
    });
