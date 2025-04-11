import devolverHoraActual from "./src/time.js"

app.get('/hora', (req, res) => {
    res.send(devolverHoraActual())
})