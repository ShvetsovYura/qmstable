import * as CRUD_TYPES from '../Constants/crud-types';
import * as MOCK_TYPES from '../Constants/test-types';
import * as APP_TYPES from '../Constants/app-types';
import DataService from '../Services/DataService';


export const getAllItems = ()=>{
    return{
        type:CRUD_TYPES.READ_ITEM,
        payload:null
    }
};

export const mockDataToTable=()=>{
    return{
        type:MOCK_TYPES.MOCK_FAKE_DATA,
        payload:null
    }
}

export const fetchMockData=  ()=>{
    return async (dispatch)=>{
        dispatch({
            type:APP_TYPES.APP_IS_BUSY,
            payload:null
        });
        const data = await DataService.getData();

        dispatch({
            type:MOCK_TYPES.GET_MOCK_DATA_SUCCESSFUL,
            payload:data
        });
        dispatch({
            type:APP_TYPES.APP_IS_ACCESS,
            payload:null
        });
    }

    
}