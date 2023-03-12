import React from "react";

export default function Movimiento({ movimiento, eliminarMovimiento }) {
  let simbolo = movimiento.cantidad >= 0 ? "+" : "-";
  return (
    <li className={movimiento.cantidad >= 0 ? "mas" : "menos"}>
      {movimiento.texto}
      <span>
        <span style={{ marginRight: 8 }}>{movimiento.categoria}</span>
        <span style={{ marginRight: 8 }}>{movimiento.asunto}</span>
        {simbolo}${Math.abs(movimiento.cantidad)}
        <span style={{ marginLeft: 8 }}>{movimiento.fecha}</span>
      </span>
      <button
        className="delete-btn"
        onClick={() => eliminarMovimiento(movimiento.id)}
      >
        X
      </button>
    </li>
  );
}
