import { 
    ScatterPlot,
    AccountBox,
    ShowChart,
    TableChart,
    Map,
    BarChart
} from '@mui/icons-material';
import { LineStyle } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./SideBar.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Dashboard</h3>
                    <ul className="sidebarList active">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                <span className="sidebarWord">Home</span>
                            </li>
                        </Link>
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <AccountBox className="sidebarIcon" />
                                <span className="sidebarWord">Users</span>
                            </li>
                        </Link>
                        <Link to="/scatter-plot" className="link">
                            <li className="sidebarListItem">
                                <ScatterPlot className="sidebarIcon" />
                                <span className="sidebarWord">Scatter Plot</span>
                            </li>
                        </Link>
                        <Link to="/line-graph" className="link">
                            <li className="sidebarListItem">
                                <ShowChart className="sidebarIcon" />
                                <span className="sidebarWord">Line Graph</span>
                            </li>
                        </Link>
                        <Link to="/table" className="link">
                            <li className="sidebarListItem">
                                <TableChart className="sidebarIcon" />
                                <span className="sidebarWord">Table</span>
                            </li>
                        </Link>
                        <Link to="/map" className="link">
                            <li className="sidebarListItem">
                                <Map className="sidebarIcon" />
                                <span className="sidebarWord">Map</span>
                            </li>
                        </Link>
                        <Link to="/bar" className="link">
                            <li className="sidebarListItem">
                                <BarChart className="sidebarIcon" />
                                <span className="sidebarWord">Bar</span>
                            </li>
                        </Link>
                        <Link to="/Data-upload" className="link">
                            <li className="sidebarListItem">
                                <CloudUploadIcon className="sidebarIcon" />
                                <span className="sidebarWord">Incident Report</span>
                            </li>
                        </Link>

                    </ul>
                </div>
            </div>
        </div>
    );
}