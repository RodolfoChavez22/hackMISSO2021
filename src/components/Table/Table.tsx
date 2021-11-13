import React from "react";
import { CircularProgress, Container } from '@material-ui/core';
import { useSelector } from "react-redux";
import MaterialTable from 'material-table';
import { Tooltip } from '@material-ui/core';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ViewColumn {...props} ref={ref} />)
};

const columns = [
    { title: 'Company', field: 'ESTAB_NAME' },
    { title: 'Address', field: 'STREET' },
    { title: 'City', field: 'CITY' },
    { title: 'State', field: 'STATE' },
    { title: 'ZIP', field: 'ZIP' },
    { title: 'Year', field: 'Year' },
    { title: 'Avg # of employees', field: 'EMP_Q1' },
    { title: 'Hours per Quratile', field: 'HOURS_Q2' },
    { title: '# of deaths', field: 'DEATHS_G' },
    { title: 'Cases away', field: 'CAWAY_H' },
    { title: 'Cases while tranfser', field: 'CTRANSFER_I' },
    { title: 'Other cases', field: 'COTHER_J'},
    { title: 'Days away', field: 'DTRANSFER_K' },
    { title: 'Days away transfer', field: 'DAWAY_L' },
    { title: 'injuries', field: 'INJ_M1' },
    { title: 'skin disorders', field: 'SKIN_M2' },
    { title: 'respiratory conditions', field: 'RESP_M3' },
    { title: 'poisonings', field: 'POIS_M4' },
    { title: 'other illnesses', field: 'OTHER_M5' },
    { title: 'hearing loss', field: 'HEARING_M' },
    { title: 'SIC', field: 'SIC' },
    { title: 'NAICS', field: 'NAICS' },
    { title: 'Phone number', field: 'PHONE' },
    { title: 'No unusual buisness', field: 'UNUSUAL_Q3' },
    { title: 'Striks/ lockout', field: 'STRIKE_Q3' },
    { title: 'shutout/ layoff', field: 'SHUT_Q3' },
    { title: 'Seasonal work', field: 'SEASONAL_Q3' },
    { title: 'Severe weather', field: 'DISASTER_Q3' },
    { title: 'shorter work', field: 'SHORT_Q3' },
    { title: 'longer work', field: 'LONG_Q3' },
    { title: 'Other reasons', field: 'OREASON_Q3' },
    { title: 'Other descriptions', field: 'OREASON_DESC' }
];

const DataTable = () => {
    const posts = useSelector((state: any) => state.posts);
    return(
        !posts.length ? <CircularProgress /> : (
            <Container>
                <MaterialTable
                    icons={tableIcons}
                    title="" columns={columns}
                    data={posts}
                    options={ {searchAutoFocus:true, headerStyle:{backgroundColor: 'rgb(142, 192, 221)', fontWeight:"bold", fontSize:17 }, rowStyle:{backgroundColor: 'darkgrey'}, columnResizable:true, tableLayout:"auto"}}
                    
                />    
            </Container>
        )
    );
};

export default DataTable;