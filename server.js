
//telling the npm that we need express to connect the webserver
var express 			= require('express'),
//For to use express we are going to create an application called "app" to use express
	app					= express(),
	bodyParser 			= require("body-parser"),
	mongoose 			= require("mongoose"),
	meetupsController 	= require("./server/controller/meetups-controller.js");

mongoose.connect('mongodb://localhost:27017/mean-demo');
app.use(bodyParser());

// calling get(), a http request method
app.get('/',function(req,res){
	res.sendFile(__dirname + '/client/views/index.html');
});

//Any file requested under js folder will be available via express
app.use('/js',express.static(__dirname + '/client/js'));

app.get("/api/meetups",meetupsController.list);
app.post("/api/meetups",meetupsController.create);

//telling express to listen port 3000 for handling incoming http requests sent by the node server
app.listen(3000,function(){
	console.log('I\'m Listening..');
})