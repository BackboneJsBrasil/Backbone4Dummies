var express       = require('express');
var app           = express();
var cors          = require('cors');
var serveStatic   = require ('serve-static');
var bodyParser    = require('body-parser');
var dataBase			= require('./database/dbConfig')
var Api           = require("./api");
var Router        = require("./routes");


app.use(bodyParser.json());
app.use(cors());

app.use("/node_modules", express.static(__dirname + '/../node_modules'));
app.use("/app", express.static(__dirname + '/../app'));

Api.setup(app);
Router.setup(app);

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'));
console.log('Server listening at port ' + app.get('port'));