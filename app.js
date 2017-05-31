var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
//var _ = require('underscore');

//var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

// 添加helper方法
var handlebars = require('express3-handlebars').create(
    {
        defaultLayout: 'main',
        helpers: {
            section: function (name, options) {
                if (!this._sections) this._sections = {};
                this._sections[name] = options.fn(this);
                return null;
            }
        },
        extname: '.handlebars'
    });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', './views/pages');
// app.set('view cache', true);
app.use(express.static(__dirname + '/public'));
app.use('/img', express.static(path.join(__dirname, 'public/img')));

app.listen(port);
console.log('xkFTP started on port ' + port);

app.get('/', function(req, res) {
    res.render('home', {
        title: 'test',
        movies: [
            {
                id: 1,
                title: '111',
                poster: '/img/1.jpg'
            },
            {
                id: 2,
                title: '222',
                poster: '/img/1.jpg'
            },
            {
                id: 3,
                title: '333',
                poster: '/img/1.jpg'
            },
            {
                id: 4,
                title: '444',
                poster: '/img/1.jpg'
            }
        ]
    })
})
