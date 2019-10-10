rs.status()
ubuntualok@ubuntualokVirtualBox:~/Desktop/MongoReplication$ mongo --port27019 < init_replica.js
rs.slaveOk()
rs.isMaster()
rs.add("ipaddress:port")
db.shutdownServer()

db.getCollection('repl').find({})

rs.isMaster()

rs.initiate(
   {
      _id: "replica_set",
      version: 1,
      members: [
         { _id: 0, host : "10.42.46.136:27017" },
         { _id: 1, host : "10.42.237.118:27017" },
         { _id: 2, host : "10.42.226.192:27017" }
      ]
   }
)

config = rs.conf()

// Add delayed node
config.members[2] = {_id:2, host:"10.105.22.96:27022",priority:0,slaveDelay:60}
config.members[3] = {_id:3, host:"10.105.22.96:27023"}



// Add hidden node
config.members[5] = {_id:5, host:"10.105.22.96:27025","priority" : 0,"hidden" : true}

config
rs.reconfig(config)
// Add arbitory node
rs.addArb("10.105.22.96:27024")
//Remove node
rs.remove("10.105.22.84:27021") // to check if host is removed check rs.conf()

//Check status of current replicaSet
rs.status()

//Convert Secondary to Arbiter and Reuse the Port Number  
rs.remove("<hostname><:port>")
mv /data/db /data/db-old // Move the secondary’s data directory to an archive folder.You may remove the data instead.
mkdir /data/db 
mongod --port 27021 --dbpath /data/db --replSet replica_set
rs.addArb("<hostname><:port>")

// Configure Non-Voting Replica Set Member
config = rs.conf()
config.members[4].votes = 0
config.members[4].priority = 0;
rs.reconfig(config)