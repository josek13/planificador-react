import { ANADIR_MOVIMIENTO, ELIMINAR_MOVIMIENTO } from "./actions"

const initialState = {
    movimientos: []
}

const expenseTrackerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ANADIR_MOVIMIENTO:
            return {
                ...state,
                movimientos: [action.payload, ...state.movimientos]
            }
        case ELIMINAR_MOVIMIENTO:
            return {
                ...state,
                movimientos: state.movimientos.filter((movimiento) => movimiento.id !== action.payload)
            }
        default: return state
    }
}

export default expenseTrackerReducer