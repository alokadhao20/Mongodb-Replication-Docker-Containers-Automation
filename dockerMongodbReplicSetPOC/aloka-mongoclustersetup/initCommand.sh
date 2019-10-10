echo "Executing command"
# echo "command will be mongo --host $HOSTTOINITIATE --port PORTTOINITIATE"
if [ -z "$HOSTTOINITIATE" ] 
then
    echo "HOSTTOINITIATE is empty"
    exit
else 
    echo "HOSTTOINITIATE contains $HOSTTOINITIATE"
fi

if [ -z "$PORTTOINITIATE" ] 
then
    echo "PORTTOINITIATE is empty"
    exit
else 
    echo "PORTTOINITIATE contains $PORTTOINITIATE"
fi

if [ -z "$HOST1" ] 
then
    echo "HOST1 is empty"
    exit
else 
    echo "HOST1 contains $HOST1"
fi

if [ -z "$HOST2" ] 
then
    echo "HOST2 is empty"
    exit
else 
    echo "HOST2 contains $HOST2"
fi

if [ -z "$HOST3" ] 
then
    echo "HOST3 is empty"
    exit
else 
    echo "HOST3 contains $HOST3"
fi

mongo --eval "var HOST1 = '$HOST1'; var HOST2 = '$HOST2'; var HOST3 = '$HOST3'" --host $HOSTTOINITIATE --port $PORTTOINITIATE  init_replica.js