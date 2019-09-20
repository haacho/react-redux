import { handleActions } from 'redux-actions';
import updateColor from '../actions/UpdateColor';
import obtenerColores from '../actions/ObtenerColores';
import temas from '../../data/Index'

const defaultState = {
    temas: [],
    tema: "primary"
};

const establecer = handleActions({
    [updateColor]: (state = defaultState, action) => {
        return { ...state, tema: action.payload };
    },
    [obtenerColores]: (state = {}, action) => {
        return { ...state, temas };
    }
   
}, []);

export default establecer;