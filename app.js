const express = require('express');
const cors = require('cors');
const rutasProduccion = require('./routes/produccionRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/producciones', rutasProduccion);

app.listen(PORT, () => {
    console.log(`Servidor está corriendo en http://localhost:${PORT}`);
});