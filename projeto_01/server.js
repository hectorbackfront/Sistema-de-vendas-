const express = require("express");
const cors = require("cors");
const conexao = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API do sistema de vendas funcionando!");
});

app.get("/produtos", (req, res) => {
    const sql = "SELECT * FROM produtos";

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar produtos:", erro);
            return res.status(500).json({ erro: "Erro ao buscar produtos" });
        }

        res.json(resultados);
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});