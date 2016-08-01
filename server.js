var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/',function(req,resp){
    resp.send('Hello World');
});

app.listen(app.get('port'),function(){
    console.log('The app is listening on port ....',app.get('port'));
});