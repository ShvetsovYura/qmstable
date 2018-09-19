import {Table, TableRow, TableBody, Icon } from "semantic-ui-react";
import React from 'react';


export const TableDataRow=(props)=>{
    const {rows} = props;
    console.log(rows);
    return(
        <TableBody>
        {
            rows.map(row=>{
                return (
                    <Table.Row key={row.id}>
                           <Table.Cell>{row.id}</Table.Cell>
                           <Table.Cell error>
                                <Icon name={"attention"}/>
                                {row.serverIp}
                            </Table.Cell>
                            <Table.Cell>{row.serverName}</Table.Cell>
                            <Table.Cell>{row.address}</Table.Cell>
                            <Table.Cell>{row.gosb}</Table.Cell>
                            <Table.Cell>{row.vsp}</Table.Cell>
                            <Table.Cell>{row.carModel}</Table.Cell>
                            <Table.Cell>{row.carVendor}</Table.Cell>
                            
                            <Table.Cell>{row.country}</Table.Cell>
                            <Table.Cell>{row.city}</Table.Cell>
                            <Table.Cell>{row.email}</Table.Cell>
                            <Table.Cell>{row.telephone}</Table.Cell>
                            <Table.Cell>{row.job}</Table.Cell>
                            <Table.Cell>{row.company}</Table.Cell>
                            <Table.Cell>{row.firstName}</Table.Cell>
                            <Table.Cell>{row.lastName}</Table.Cell>
                            <Table.Cell>{row.findName}</Table.Cell>
                            <Table.Cell>{row.jobTitle}</Table.Cell>
                            <Table.Cell>{row.prefix}</Table.Cell>
                            <Table.Cell>{row.suffix}</Table.Cell>
                            <Table.Cell>{row.title}</Table.Cell>
                            <Table.Cell>{row.jobDescriptor}</Table.Cell>
                            <Table.Cell>{row.jobArea}</Table.Cell>
                            <Table.Cell>{row.jobType}</Table.Cell>
                    </Table.Row>
                )
            })
        }
        </TableBody>    
        
        
    )
};