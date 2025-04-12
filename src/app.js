import express from "express"
import time from "./time.js"

const app = express()

app.get('/', (req, res) => {
    res.send("Bienvenido a mi servidor!")
})

app.get('/hora', (req, res) => {
    const hora = time.devolverHoraActual()
    res.send(hora)
})

app.get('/fechaCompleta', (req, res) => {
    const fecha = time.devolverFechaCompleta()
    res.send(fecha)
})

app.use((req, res) => {
    res.status(404).send({error: "Ruta no encontrada"})
})

export default app