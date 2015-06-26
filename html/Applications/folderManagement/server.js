var express = require('express');
var	app     = express();

var mongojs = require('mongojs');
var db = mongojs('folders',['folderList']);

var bodyParser = require('body-parser');
app.use(express.static(__dirname));
app.use(bodyParser.json());

/*app.get('/',function(req,res){
	res.sendFile(__dirname+'/folderManage.html');

});
*/
app.get('/myFolderList',function(req,res){

	db.folderList.find(function(err,docs){
		//console.log(docs);
		res.json(docs);
	});
});

app.get('/myFolderList/:id',function(req,res){
	var id = req.params.id;
	if(req.params.id != -1){
		
		db.folderList.find({parentId:id},function(err,docs){
			res.json(docs);
		});
	}else{
		console.log(id)
		db.folderList.find({parentId:id},function(err,docs){
			res.json(docs);
		});
	}
		
})

app.post('/myFolderList',function(req,res){
	//console.log(req)
	db.folderList.insert(req.body,function(err,docs){
		res.json(docs)
	});
});

app.listen(3000,function(){
	console.log('I am Listening');
});