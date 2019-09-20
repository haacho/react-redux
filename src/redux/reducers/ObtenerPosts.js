import { handleActions } from 'redux-actions';
import obtenerPostsSuccess from '../actions/Posts';
import temas from '../../data/Index'


const defaultState = {
    posts:"kiki"
};

export default handleActions({
    
    [obtenerPostsSuccess]: (state = defaultState, action) => {
        return { ...state, temas };
    },
   
}, []);