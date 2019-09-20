import { combineReducers } from "redux";

import obtenerPosts from "./ObtenerPosts";
import establecer from "./EstablecerColor";

export default combineReducers({
    obtenerPosts,
    establecer,
});
