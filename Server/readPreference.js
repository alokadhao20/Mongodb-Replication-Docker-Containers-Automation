var MongoClient = require('mongodb').MongoClient;
var ReadPreference = require('mongodb').ReadPreference;
const express = require('express')


ConnectionString = "mongodb://" +
    "10.42.104.177:27017," +
    "10.42.156.183:27017," +
    "10.42.246.241:27017/" +
    "failOverCheck" +
    "?w=1&readPreference=secondary&replicaSet=replica_set"

MongoClient.connect(ConnectionString, function (err, db) {
    if (err) {
        console.log("Connection error ", err);
    } else {

        var documentNumber = 0;
        function insertDocument() {
            db.collection("repl").insert({ 'documentNumber': 1 }, function (err, doc) {
                if (err) {
                    console.log("Data insert error  ", err);
                } else {
                    console.log("Document insert", doc);
                }
            });
        }
        insertDocument();
        read()
        function read() {
            db.collection("repl").findOne({ 'documentNumber': 1 },{'readPreference': ReadPreference.PRIMARY}, function (err, doc) {
                if (err) {
                    console.log("Data insert error  ", err);
                } else {
                    console.log("Document Read", doc);
                }

                //console.log("Dispatched insert");
                setTimeout(read, 1000);
            });
        }

    }
});