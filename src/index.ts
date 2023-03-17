import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3333, () => {
    console.log('Server iniciado na porta 3333 com sucesso!')
})