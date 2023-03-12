import React from "react";

export default function GastosIngresos({ movimientos }) {
  const cantidad = movimientos.map((movimiento) => Number(movimiento.cantidad));
  const ingreso = cantidad
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);
  const gasto = cantidad
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);
  const balance = Math.abs((gasto / ingreso) * 100).toFixed(2)
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Ingresos</h4>
        <p className="money plus">€{ingreso}</p>
      </div>
      <div>
        <h4>Gastos</h4>
        <p className="money minus">€{gasto}</p>
      </div>
      <div>
        <h4>Balance</h4>
        <p className="balance">{balance}% Gastado</p>
      </div>
    </div>
  );
}
