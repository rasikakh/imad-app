var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var articles={
 'ArticleOne':{
    title:'article one',
    heading:'article one',
    content:`
   <p> Here is the content of our first article.. Here is the content of our first article.. 
   Here is the content of our first article.. Here is the content of our first article.. 
   Here is the content of our first article.. Here is the content of our first article.. Here is the content of our first article..</p>
  
   <p> Here is the content of our first article.. Here is the content of our first article.. 
   Here is the content of our first article.. Here is the content of our first article.. 
   Here is the content of our first article.. Here is the content of our first article.. Here is the content of our first article..</p>
   
   <p> Here is the content of our first article.. Here is the content of our first article.. 
   Here is the content of our first article.. Here is the content of our first article.. 
   Here is the content of our first article.. Here is the content of our first article.. Here is the content of our first article..</p>
   `
},
 'ArticleTwo':{
    title:'article two',
    heading:'article two',
    content:`
   <p> here is the content of our second article</p>`
},
 'ArticleThree':{
    title:'article three',
    heading:'article three',
    content:`
   <p> here is the content of our third article</p>`
},
};

function CreateTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    
var HTMLtemplate=`
 <html>
 <head>
  <title>${title}</title>
   <meta name="viewport" content="width=device-width , initial-scale=1" />
 <link href="/ui/style.css" rel="stylesheet" />
 </head>
 <body>
     <div class="container">
    <div>
      <a href='/'>home</a>
    </div>
   <hr>
   <h3>${heading}</h3>
   <div>
   <p>${content}</p>
   </div>
 </div>
 </body>
</html>`;
 return HTMLtemplate; 
}

app.get('/:articleName', function(req,res){
  var articleName = req.params.articleName;  
 res.send(CreateTemplate(articles[articleName]));
});



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
