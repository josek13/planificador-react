import React from "react";
import Movimiento from "./Movimiento";

export default function ListaMovimientos({ movimientos, eliminarMovimiento }) {
  movimientos = movimientos.sort((a, b) => {
    return new Date(b.fecha) - new Date(a.fecha)
  })
  return (
    <div>
      <h3>Movimientos</h3>
      <ul className="list">
        {movimientos.map((movimiento) => {
          return (
            <Movimiento
              key={movimiento.id}
              movimiento={movimiento}
              eliminarMovimiento={(id) => eliminarMovimiento(id)}
            />
          );
        })}
      </ul>
    </div>
  );
}
