const devolverHoraActual = () => {
    const ahora = new Date()
    const hora = ahora.getHours()
    const minuto = ahora.getMinutes()
    const segundo = ahora.getSeconds()

    const horaActual = `${hora}:${minuto}:${segundo}`

    return horaActual
}

const devolverFechaCompleta = () => {
    const ahora = new Date()
    const fechaCompleta = ahora.toLocaleDateString("es-AR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    })
    return fechaCompleta
}

export default {devolverHoraActual, devolverFechaCompleta}

