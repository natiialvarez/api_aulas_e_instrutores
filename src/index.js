const express = require("express") // utilizando o express
const rotas = require("./rotas") // exportando as rotas
const app = express() // instanciando o express
const PORTA = 3000

app.use(express.json()) // chamando o json
app.use(rotas) // para usar as rotas
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`)
})