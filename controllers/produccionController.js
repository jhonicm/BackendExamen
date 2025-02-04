const produccionData = require('../data/datos.json');
const Produccion = require('../models/produccionModel');
const fs = require('fs');
const path = require('path');

const obtenerProducciones = (req, res) => {
    const totalProductividad = produccionData.productions.reduce((total, produccion) => total + produccion.productividad, 0);
    res.json({
        producciones: produccionData.productions,
        totalProductividad
    });
};

const agregarProduccion = (req, res) => {
    const nuevaProduccion = new Produccion(
        req.body.id,
        req.body.estacion,
        req.body.productividad,
        req.body.nivelProductividad
    );
    produccionData.productions.push(nuevaProduccion);
    const totalProductividad = produccionData.productions.reduce((total, produccion) => total + produccion.productividad, 0);

    fs.writeFileSync(path.join(__dirname, '../data/datos.json'), JSON.stringify(produccionData, null, 2));

    res.status(201).json({
        nuevaProduccion,
        totalProductividad
    });
};

module.exports = {
    obtenerProducciones,
    agregarProduccion
};