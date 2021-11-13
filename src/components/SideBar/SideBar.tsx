import { 
    HomeRounded, 
    AssessmentRounded, 
    StorageRounded,
    ImportExportRounded,
    TrackChanges, 
    AddRounded
} from '@mui/icons-material';

import "./SideBar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Dashboard</h3>
                    <ul className="sidebarList active">
                        <li className="sidebarListItem">
                            <HomeRounded className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentRounded className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <StorageRounded className="sidebarIcon" />
                            Data
                        </li>
                        <h3 className="sidebarTitle"> Analyze Data </h3>
                        <ul className="sidebarList active">
                            <li className="sidebarListItem">
                                <ImportExportRounded className="sidebarIcon" />
                                Upload
                            </li>
                            <li className="sidebarListItem">
                                <TrackChanges className="sidebarIcon" />
                                Changes
                            </li>
                            <li className="sidebarListItem">
                                <AddRounded className="sidebarIcon" />
                                Add
                            </li>
                            <h3 className="sidebarTitle"> Analyze Data </h3>
                            <ul className="sidebarList active">
                                <li className="sidebarListItem">
                                    <ImportExportRounded className="sidebarIcon" />
                                    Make a Report
                                </li>
                                <li className="sidebarListItem">
                                    <TrackChanges className="sidebarIcon" />
                                    Changes
                                </li>
                                <li className="sidebarListItem">
                                    <AddRounded className="sidebarIcon" />
                                    Add
                                </li>
                                <h3 className="sidebarTitle"> Analyze Data </h3>
                                <ul className="sidebarList active">
                                    <li className="sidebarListItem">
                                        <ImportExportRounded className="sidebarIcon" />
                                        Exchange
                                    </li>
                                    <li className="sidebarListItem">
                                        <TrackChanges className="sidebarIcon" />
                                        Changes
                                    </li>
                                    <li className="sidebarListItem">
                                        <AddRounded className="sidebarIcon" />
                                        Add
                                    </li>
                                </ul>
                            </ul>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}