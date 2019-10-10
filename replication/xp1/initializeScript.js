config = {
    _id: "replica_set",
    members: [
        {
            _id: 0,
             host: "10.42.95.52:27017"
        },
        {
            _id: 1,
             host: "10.42.254.98:27017"
        },
        {
            _id: 2,
             host: "10.42.189.114:27017"
        }
    ]
}
rs.initiate(config)
rs.status()