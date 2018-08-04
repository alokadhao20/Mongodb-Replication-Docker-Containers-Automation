config = {
    _id: "rs1",
    members: [
        {
            _id: 0,
             host: "mongo1:27017",
            priority: 0,
            slaveDelay: 60
        },
        {
            _id: 1,
             host: "mongo2:27017",
        },
        {
            _id: 2,
             host: "mongo3:27017",
        }
    ]
}

rs.initiate(config)
rs.status()