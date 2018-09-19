import {Model,attr} from 'redux-orm';
import * as CRUD_ACTIONS from '../../Constants/crud-types';
import * as MOCK_ACTIONS from '../../Constants/test-types';

import faker from 'faker';

class QmsItem extends Model{
    static reducer(action,Item,session){
        const {type,payload} = action;
        const largedataset = true;
        switch(type){
            case MOCK_ACTIONS.MOCK_FAKE_DATA:
            let ds = largedataset?1000:50;
            for(let i=0;i<ds;i++){
                session.QmsItem.create({
                    id:session.QmsItem.count()>0?session.QmsItem.last().id+1:1,
                    serverIp:faker.internet.ip(),
                    serverName:faker.internet.domainName(),
                    address:faker.address.streetAddress(),
                    gosb:faker.random.number(),
                    vsp:faker.random.number(),
                    carModel:'lanos',
                    carVendor:'chevrolet',
                    dateMake:faker.date.past(),
                    dateSold:faker.date.past(),
                    datePay:faker.date.future(),
                    country:faker.address.country(),
                    city:faker.address.city(),
                    email:faker.internet.email(),
                    telephone:faker.phone.phoneNumber(),
                    job:faker.lorem.slug(),
                    company:faker.company.companyName(),
                    firstName:faker.name.firstName(),
                    lastName:faker.name.lastName(),
                    findName:faker.name.findName(),
                    jobTitle:faker.name.jobTitle(),
                    prefix:faker.name.prefix(),
                    suffix:faker.name.suffix(),
                    title:faker.name.title(),
                    jobDescriptor:faker.name.jobDescriptor(),
                    jobArea:faker.name.jobArea(),
                    jobType:faker.name.jobType()
                })
            }
            break;
            case MOCK_ACTIONS.GET_MOCK_DATA_SUCCESSFUL:
               // session.QmsItem.all().delete();
                payload.map(item=>{
                    session.QmsItem.create(item);
                    return null;
                });
                break;
            case CRUD_ACTIONS.READ_ITEM:

            break;
            default: 
                //return session.QmsItem.all()
                break;
        }
    }
}

QmsItem.modelName = 'QmsItem';
QmsItem.fields={
    id:attr(),
    serverIp:attr(),
    serverName:attr(),
    address:attr(),
    gosb:attr(),
    vsp:attr(),
    carModel:attr(),
    carVendor:attr(),
    dateMake:attr(),
    dateSold:attr(),
    datePay:attr(),
    country:attr(),
    city:attr(),
    email:attr(),
    telephone:attr(),
    job:attr(),
    company:attr(),
    firstName:attr(),
    lastName:attr(),
    findName:attr(),
    jobTitle:attr(),
    prefix:attr(),
    suffix:attr(),
    title:attr(),
    jobDescriptor:attr(),
    jobArea:attr(),
    jobType:attr()
};

export default QmsItem;