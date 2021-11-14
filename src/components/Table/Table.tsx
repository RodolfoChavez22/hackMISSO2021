import React, { forwardRef } from "react";
import { CircularProgress, Container, Tooltip } from '@material-ui/core';
import { useSelector } from "react-redux";
import MaterialTable from 'material-table';
import { 
    AddBox, 
    ArrowUpward , 
    Check, 
    ChevronLeft ,
    ChevronRight , 
    Clear, 
    DeleteOutline, 
    Edit, 
    FilterList, 
    FirstPage , 
    LastPage, 
    Remove, 
    SaveAlt, 
    Search, 
    ViewColumn 
} from '@material-ui/icons';

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
    { title: 'Injuries', field: 'INJ_M1' },
    { title: 'Skin disorders', field: 'SKIN_M2' },
    { title: 'Respiratory conditions', field: 'RESP_M3' },
    { title: 'Poisonings', field: 'POIS_M4' },
    { title: 'Other illnesses', field: 'OTHER_M5' },
    { title: 'Hearing loss', field: 'HEARING_M' },
    { title: 'SIC', field: 'SIC' },
    { title: 'NAICS', field: 'NAICS' },
    { title: 'Phone #', field: 'PHONE' },
    { title: 'No unusual buisness', field: 'UNUSUAL_Q3' },
    { title: 'Striks / Lockout', field: 'STRIKE_Q3' },
    { title: 'Shutout / Layoff', field: 'SHUT_Q3' },
    { title: 'Seasonal work', field: 'SEASONAL_Q3' },
    { title: 'Severe weather', field: 'DISASTER_Q3' },
    { title: 'Shorter work', field: 'SHORT_Q3' },
    { title: 'Songer work', field: 'LONG_Q3' },
    { title: 'Other reasons', field: 'OREASON_Q3' },
    { title: 'Other descriptions', field: 'OREASON_DESC' }
];

const DataTable = () => {
    const posts = useSelector((state: any) => state.posts);
    return(
        /* !posts.length ? <CircularProgress /> : */ (
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