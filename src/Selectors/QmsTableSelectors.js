import {createSelector} from 'redux-orm';
import orm from '../orm/orm';
const db = (state)=>state.orm;

export const getAllRecords = createSelector(
    orm,db,(session)=>{
        console.log('QTSelector records:',session.QmsItem.all().toModelArray());
       return session.QmsItem.all().toModelArray();
    }
);