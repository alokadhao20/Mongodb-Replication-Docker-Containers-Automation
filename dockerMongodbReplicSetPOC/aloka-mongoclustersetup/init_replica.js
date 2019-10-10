print(HOST1);
print(HOST2);
print(HOST3);
config = {
    _id: "replica_set",
    members: [
        {
            _id: 0,
             host: HOST1
        },
        {
            _id: 1,
             host: HOST2
        },
        {
            _id: 2,
             host: HOST3
        }
    ]
};
print(config.members[0].host);
print(config.members[1].host);
print(config.members[2].host);
rs.initiate(config)
rs.status()