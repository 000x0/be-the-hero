const express = require('express')

const app = express()

//rota
app.post('/users', (req, res) => {
    return res.json({
        evento: "'Semana'",
        aluno: "Rafael"
    })
})

app.listen(3638)