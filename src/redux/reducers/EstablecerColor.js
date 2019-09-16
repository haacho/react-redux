import { handleActions } from 'redux-actions';
import  updateColor from '../actions/UpdateColor';
import  obtenerColores  from '../actions/ObtenerColores';
import temas from '../../data/Index'

export default handleActions({
    [updateColor]: (state = {}, action) => {
        return {...state, tema: action.payload};
    },
    [obtenerColores]: (state= {}, action) => {
        return {...state, temas};
    }
}, []);