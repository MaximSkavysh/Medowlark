/**
 * Created by SkavyshM on 11/26/2018.
 */
const express = require('express');
const handlebars = require('express3-handlebars').create({defaultLayout:'main'});
const PORT = process.env.port || 3000;
let app = express();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', PORT);
app.use(express.static(__dirname + '/public'));
app.get('/',(req, res) =>{
    res.render('home');
});

app.get('/about',(req, res) =>{
    res.render('about');
});
app.use((req,res) =>{
    res.status(404);
    res.render('404');
});

app.use((err, req, res, next) =>{
   console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), () =>{
   console.log('Server is starting on port: ' + app.get('port'));
});