const express = require('express')
const app = express();
const PORT = 3000;

const agentesRouter = require("./routes/agentesRoutes")
const casosRouter = require("./routes/casosRoutes")

app.use(express.json());

app.use(agentesRouter);
app.use(casosRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Erro interno no servidor" });
});

app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando em localhost:${PORT}`);
});