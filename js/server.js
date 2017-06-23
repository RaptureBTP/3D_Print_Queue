/**
 * Created by Brady on 6/23/2017.
 */
console.log('Loading server...');
const WEB = `${__dirname}`;

let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');
let path = require('path');
let app = express();

//load express third-party middleware modules
let rest = require('./PrinterREST');

// //app.use('/', rest);
// app.get('/', function (req, res) {
//     res.render('index', {});
// });



//Serve up static files
app.use(express.static(path.join(WEB, '../')));

app.use(bodyParser.json());

//start server
app.listen(6060, function () {
    console.log('Listening on port 6060');
});

app.post('/update',function(req,res){
    console.log(req.body.table);//.params.msg
    fs.writeFile('../queue2.json', JSON.stringify(req.body.table), 'utf8');
    //console.log("Created file");
});

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../') });
});
