const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Habilitar CORS para permitir acessos de qualquer origem
app.use(cors());

app.get('/consulta', async (req, res) => {
    const cnpj = req.query.cnpj;
    const apiUrl = `https://www.receitaws.com.br/v1/cnpj/${cnpj}`;
    
    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao consultar CNPJ' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor proxy rodando na porta ${PORT}`);
});
