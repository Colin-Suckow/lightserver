var express = require('express');
var app = express();

port = 3000;

app.get('/send_data', (req, res) => {
    var data = req.query.light; 
    
    if(data) {
        res.send(data);
    } else {
        res.send("No data");
    }
})

app.listen(port, () => console.log("Server started"));