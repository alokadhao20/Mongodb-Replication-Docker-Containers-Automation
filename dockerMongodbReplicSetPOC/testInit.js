config = {
    _id: "myReplSet1",
    members: [
        {
            _id: 0,
             host: "alokadhao.com:30007",
            priority: 0,
            slaveDelay: 60
        },
        {
            _id: 1,
             host: "alokadhao.com:30008",
        },
        {
            _id: 2,
             host: "alokadhao.com:30009",
        }
    ]
}

rs.initiate(config)
rs.status()