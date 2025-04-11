const devolverHoraActual = () => {
    const ahora = new Date()
    const hora = ahora.getHours()
    const minuto = ahora.getMinutes()
    const segundo = ahora.getSeconds()

    const horaActual = `${hora}:${minuto}:${segundo}`

    return horaActual
}

export default devolverHoraActual