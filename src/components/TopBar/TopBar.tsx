import React from 'react'
import "./TopBar.css"
import { Notifications, Settings, Refresh } from '@mui/icons-material';


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">Data Visualization</span>
                </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <Notifications />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <div className="topbarIconContainer">
                        <Refresh />
                    </div>
                    <img src="https://i.pinimg.com/564x/c8/55/ae/c855aea64c62ef90a746df8d1670b017.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}