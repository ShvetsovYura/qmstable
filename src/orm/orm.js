import {ORM} from 'redux-orm';
import QmsItem from './models/QmsItem';

const orm = new ORM();
orm.register(QmsItem);

export default orm;