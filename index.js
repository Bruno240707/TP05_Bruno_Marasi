import express from "express";
import devolverHoraActual from "./src/time.js"

const app = express()
const port = 3000

app.get('/horaActual', (req, res) => {
    res.send(devolverHoraActual())
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})