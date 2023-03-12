import React from "react";

export default function Presupuesto({ movimientos }) {
  const cantidad = movimientos.map((movimiento) => Number(movimiento.cantidad));
  const total = cantidad.reduce((acc, item) => acc + item, 0);
  return (
    <div>
      <h4>Presupuesto</h4>
      <h1>${total}</h1>
    </div>
  );
}
