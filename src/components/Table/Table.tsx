import React from "react";
import { CircularProgress, Container } from '@material-ui/core';
import { useSelector } from "react-redux";
import MaterialTable from 'material-table';

const columns = [
    { title: 'Company', field: 'ESTAB_NAME' },
    { title: 'Address', field: 'STREET' },
    { title: 'City', field: 'CITY' },
    { title: 'State', field: 'STATE' },
    { title: 'ZIP', field: 'ZIP' },
    { title: 'Year', field: 'Year' },
    { title: 'Avg # of employees', field: 'EMP_Q1' },
    { title: 'HOURS_Q2', field: 'HOURS_Q2' },
    { title: 'DEATHS_G', field: 'DEATHS_G' },
    { title: 'CAWAY_H', field: 'CAWAY_H' },
    { title: 'CTRANSFER_I', field: 'CTRANSFER_I' },
    { title: 'COTHER_J', field: 'COTHER_J'},
    { title: 'DTRANSFER_K', field: 'DTRANSFER_K' },
    { title: 'DAWAY_L', field: 'DAWAY_L' },
    { title: 'INJ_M1', field: 'INJ_M1' },
    { title: 'SKIN_M2', field: 'SKIN_M2' },
    { title: 'RESP_M3', field: 'RESP_M3' },
    { title: 'POIS_M4', field: 'POIS_M4' },
    { title: 'OTHER_M5', field: 'OTHER_M5' },
    { title: 'HEARING_M', field: 'HEARING_M' },
    { title: 'SIC', field: 'SIC' },
    { title: 'NAICS', field: 'NAICS' },
    { title: 'PHONE', field: 'PHONE' },
    { title: 'UNUSUAL_Q3', field: 'UNUSUAL_Q3' },
    { title: 'STRIKE_Q3', field: 'STRIKE_Q3' },
    { title: 'SHUT_Q3', field: 'SHUT_Q3' },
    { title: 'SEASONAL_Q3', field: 'SEASONAL_Q3' },
    { title: 'DISASTER_Q3', field: 'DISASTER_Q3' },
    { title: 'SHORT_Q3', field: 'SHORT_Q3' },
    { title: 'LONG_Q3', field: 'LONG_Q3' },
    { title: 'OREASON_Q3', field: 'OREASON_Q3' },
    { title: 'OREASON_DESC', field: 'OREASON_DESC' }
];

const DataTable = () => {
    const posts = useSelector((state: any) => state.posts);

    return(
        !posts.length ? <CircularProgress /> : (
            <Container>
                <MaterialTable columns={columns} data={posts}/>    
            </Container>
        )
    );
};

export default DataTable;