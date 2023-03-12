export const ANADIR_MOVIMIENTO = "ANADIR_MOVIMIENTO"
export const ELIMINAR_MOVIMIENTO = "ELIMINAR_MOVIMIENTO"

export const anadirMovimiento = (movimiento) => ({
    type: ANADIR_MOVIMIENTO,
    payload: movimiento
})

export const eliminarMovimiento = (movimientoId) => ({
    type: ELIMINAR_MOVIMIENTO,
    payload: movimientoId
})