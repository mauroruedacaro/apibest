const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pool = new Pool({
    user: 'mauricior',
    host: 'localhost',
    database: 'supermercado',
    password: 'MrcLfm5126',
    port: 5432,
});

// Conexión a PostgreSQL
pool.connect().then(() => {
    console.log('Conexión a PostgreSQL establecida');
});

// Rutas API
app.use('/api', require('/routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
