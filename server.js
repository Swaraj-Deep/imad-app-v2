var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne = {
    title :'Article One|Swaraj Deep',
    heading:'Article One',
    date: '2 feb 2017',
    content:`
                 <p>
                    Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.
                </p>
                <p>
                    Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.
                </p>
                <p>
                    Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.Hi! I am Swaraj Deep.This is my very first page on my webapp.
                </p>`
};
function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name ="viewport" content="width=device-width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="contents">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h1>
                    ${heading}
                </h1>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/article-one',function(req,res){
   res.send(createTemplate(articleOne));
});
app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-two.html'));
});
app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-three.html'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
