import React, { Component } from 'react';
import { connect } from 'react-redux';
import Listado from './Listado';
import updateColor from '../../redux/actions/UpdateColor';
import obtenerColores from '../../redux/actions/ObtenerColores';

class ListaColores extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {      
        const { obtenerTemas } = this.props;
        obtenerTemas();
    }

    render() {
        const { temas, escoger } = this.props;
        return (
            <div>              
                <Listado temas={temas} accion={escoger} ></Listado>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    temas: state.temas,
    tema: state.tema
});

const mapDispatchToProps = dispatch => ({
    obtenerTemas() {
        dispatch(obtenerColores());
    },
    escoger(tema) {
        dispatch(updateColor(tema));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListaColores);