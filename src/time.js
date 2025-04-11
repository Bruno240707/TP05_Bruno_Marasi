const devolverHoraActual = () => {
    const ahora = new Date()
    const hora = ahora.getHours()
    const minuto = ahora.getMinutes()
    const segundo = ahora.getSeconds()

    const horaActual = `${hora}:${minuto}:${segundo}`

    return horaActual
}

const devolverFechaCompleta = () => {
    const timestamp = Date.now()
    const fechaActual = new Date(timestamp)

    return fechaActual
}

export default {devolverHoraActual, devolverFechaCompleta}

