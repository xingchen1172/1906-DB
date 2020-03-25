const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://192.168.117.192";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {

const collection = client.db("mongodb1906").collection("users");   //连接数据库和集合


}

