const express = require('express');
const req = require('express/lib/request');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('api/libros', (req, res) => res.json({
    nombre:"prueba"
}))

// Routes
app.use(require('./routes/index'));

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function() {
    console.log("Server started......." + port);
  });

  /*
app.listen(process.env.PORT || 3000)
console.log('Server on port', 3000);

*/