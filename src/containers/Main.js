import React, { Component } from "react";
import { connect } from "react-redux";
import Presupuesto from "../components/Presupuesto";
import AnadirMovimiento from "../components/AnadirMovimiento";
import { anadirMovimiento, eliminarMovimiento } from "../redux/actions";
import ListaMovimientos from "../components/ListaMovimientos";
import GastosIngresos from "../components/GastosIngresos";

export class Main extends Component {
  render() {
    const { movimientos, anadirMovimiento, eliminarMovimiento } = this.props;
    return (
      <div className="container">
        <Presupuesto movimientos={movimientos} />
        <GastosIngresos movimientos={movimientos}/>
        <AnadirMovimiento
          anadirMovimiento={(movimiento) => anadirMovimiento(movimiento)}
          id={movimientos[0] ? movimientos[0].id + 1 : 1}
        />
        <ListaMovimientos movimientos={movimientos} eliminarMovimiento={(id) => eliminarMovimiento(id)}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movimientos: state.movimientos,
});

const mapDispatchToProps = (dispatch) => ({
  anadirMovimiento: (movimiento) => dispatch(anadirMovimiento(movimiento)),
  eliminarMovimiento: (id) => dispatch(eliminarMovimiento(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
