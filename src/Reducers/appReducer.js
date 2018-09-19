import * as APP_TYPES from '../Constants/app-types';
const defaultAppState = {
    loading:false
}

export const appReducer = (state=defaultAppState, action)=>{
    const {type,payload}=action;
    switch (type) {
        case APP_TYPES.APP_IS_BUSY:
            return {...state,loading:true};
        case APP_TYPES.APP_IS_ACCESS:
            return {...state,loading:false};
        default:
            return {...state};
            break;
    }
}