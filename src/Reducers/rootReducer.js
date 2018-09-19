import { combineReducers } from "redux";
import {createReducer} from 'redux-orm';
import orm from '../orm/orm';
import { appReducer } from "./appReducer";

const rootReducer = combineReducers({
    orm:createReducer(orm),
    app:appReducer
});

export default rootReducer;