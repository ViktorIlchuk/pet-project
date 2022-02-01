const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const studentsRouters = require('./routes/students.js');
const MongoClient = require("mongodb").MongoClient;

const app = express();

const CONNECTION_URL = 'mongodb+srv://ViktorIlchuk:scorpions94@cluster0.18vuu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
const client = new MongoClient(CONNECTION_URL);
const connection = mongoose.connection;
const option = {
    socketTimeoutMS: 3000000,
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

client.connect(err => {
    if (err) {
        console.log("Error occurred while connecting to MongoDB...", err);
    };
    console.log("Connected to Mongodb");
    client.close();
});

mongoose.Promise = Promise;
mongoose.connect(CONNECTION_URL, option);
  
connection.on("connected", () => console.log("Connected to database"));
connection.on("error", err => console.log("Connection failed with - ", err));

app.use('/', studentsRouters);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));