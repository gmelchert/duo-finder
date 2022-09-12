import express from "express";

const app = express()

app.get('/', async (req, res) => {

    res.json([
        { id: 1, name: 'Anuncio 1' },
        { id: 2, name: 'Anuncio 2' },
        { id: 3, name: 'Anuncio 3' },
        { id: 4, name: 'Anuncio 4' }
    ])
})

app.listen(3333)
console.log('ok')