import React, { useState } from "react";

export default function AnadirMovimientos({id, anadirMovimiento}) {
  const [categoria, setCategoria] = useState("Salud");
  const [asunto, setAsunto] = useState("");
  const [cantidad, setCantidad] = useState(0)
  const [fecha, setFecha] = useState("")
  const onSubmit = (event) => {
      event.preventDefault()
      const nuevoMovimiento = {
          id: id,
          categoria: categoria,
          asunto: asunto,
          cantidad: cantidad,
          fecha: fecha
      }
      anadirMovimiento(nuevoMovimiento)
      setCategoria("");
      setAsunto("")
      setCantidad(0)
      setFecha("")
  }
  return (
    <div>
      <h3>Añadir movimientos</h3>
      <form onSubmit={onSubmit}>
      <div className="form-control">
          <label>Categoria</label>
          <select value={categoria} onChange={(event) => setCategoria(event.target.value)} type="categoria">
            <option value="Salud">Salud</option>
            <option value="Hogar">Hogar</option>
            <option value="Ócio">Ócio</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
        <div className="form-control">
          <label>Asunto</label>
          <input value={asunto} onChange={(event) => setAsunto(event.target.value)} placeholder="Añade un asunto" type="text" />
        </div>
        <div className="form-control">
          <label>Cantidad</label>
          <input value={cantidad} onChange={(event) => setCantidad(event.target.value)} placeholder="Introduce una cantidad" type="number" />
        </div>
        <div className="form-control">
          <label>Fecha</label>
          <input value={fecha} onChange={(event) => setFecha(event.target.value)} type="date" />
        </div>
        <button className="btn">Añadir</button>
      </form>
    </div>
  );
}
