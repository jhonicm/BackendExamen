const express = require('express');
const cors = require('cors');
const rutasProduccion = require('./routes/produccionRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'https://frontend-examen-plum.vercel.app',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/producciones', rutasProduccion);

app.listen(PORT, () => {
    console.log(`Servidor está corriendo en http://localhost:${PORT}`);
});
