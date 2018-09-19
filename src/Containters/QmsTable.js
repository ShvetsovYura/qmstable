import {Table, Container, Button, Dimmer, Loader} from 'semantic-ui-react';
import React,{PureComponent} from 'react';
import {TableDataRow} from '../Components/TableDataRow';
import {connect} from 'react-redux';
import * as QmsTableSelector from '../Selectors/QmsTableSelectors';
import * as TableActionCreators from '../Actions/QmsItemsActions';
import { bindActionCreators } from 'redux';
import * as AppSelectors from '../Selectors/AppSelector';

const  mapStateToProps=(state)=>{
    return {
        rowitems:QmsTableSelector.getAllRecords(state),
        isLoading:AppSelectors.loadingState(state)
    }
};

class QmsTable extends PureComponent{
    constructor(props){
        super(props);
        const {dispatch} = props;

        this.boundActionCreators = bindActionCreators(TableActionCreators,dispatch);
    };


    render(){
        return( 
            
            <div style={{"height":"650px","width":"100%","overflowX":"scroll"}}>
                {
                    (this.props.isLoading)?
                    <Dimmer active>
                        <Loader size="massive"></Loader>
                    </Dimmer> 
                        :
                            <div>
                            <Button onClick={()=>this.boundActionCreators.fetchMockData()}>MOCK_DATA</Button>
                        
                            <Table compact={"very"} 
                                size={"small"}
                                selectable={true} 
                                striped={true} singleLine sortable
                            >
                                    <Table.Header>
                                        <Table.Row >
                                        <Table.HeaderCell>row.id</Table.HeaderCell>
                                            <Table.HeaderCell>row.serverIp</Table.HeaderCell>
                                            <Table.HeaderCell>row.serverName</Table.HeaderCell>
                                            <Table.HeaderCell>row.address</Table.HeaderCell>
                                            <Table.HeaderCell>row.gosb</Table.HeaderCell>
                                            <Table.HeaderCell>row.vsp</Table.HeaderCell>
                                            <Table.HeaderCell>row.carModel</Table.HeaderCell>
                                            <Table.HeaderCell>row.carVendor</Table.HeaderCell>
                                            <Table.HeaderCell>row.dateMake</Table.HeaderCell>
                                            <Table.HeaderCell>row.dateSold</Table.HeaderCell>
                                            <Table.HeaderCell>row.datePay</Table.HeaderCell>
                                            <Table.HeaderCell>row.country</Table.HeaderCell>
                                            <Table.HeaderCell>row.city</Table.HeaderCell>
                                            <Table.HeaderCell>row.email</Table.HeaderCell>
                                            <Table.HeaderCell>row.telephone</Table.HeaderCell>
                                            <Table.HeaderCell>row.job</Table.HeaderCell>
                                            <Table.HeaderCell>row.company</Table.HeaderCell>
                                            <Table.HeaderCell>row.firstName</Table.HeaderCell>
                                            <Table.HeaderCell>row.lastName</Table.HeaderCell>
                                            <Table.HeaderCell>row.findName</Table.HeaderCell>
                                            <Table.HeaderCell>row.jobTitle</Table.HeaderCell>
                                            <Table.HeaderCell>row.prefix</Table.HeaderCell>
                                            <Table.HeaderCell>row.suffix</Table.HeaderCell>
                                            <Table.HeaderCell>row.title</Table.HeaderCell>
                                            <Table.HeaderCell>row.jobDescriptor</Table.HeaderCell>
                                            <Table.HeaderCell>row.jobArea</Table.HeaderCell>
                                            <Table.HeaderCell>row.jobType</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                        <TableDataRow rows={this.props.rowitems}></TableDataRow>
                                </Table>
                            </div>
                }
            </div>
        )
    };
}

export default connect(mapStateToProps)(QmsTable);
