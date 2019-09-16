import { createStore } from "redux";
import reducerEstablecer from "./reducers/EstablecerColor"


const defaultState = {
    temas:[],
    tema: "primary"
};

export default createStore(reducerEstablecer, defaultState);
