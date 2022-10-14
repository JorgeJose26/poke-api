const express = require('express');
const app = express();
const pokeRoutes = require('./router/pokeRoutes')

app.use('/pokemon', pokeRoutes);

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});

