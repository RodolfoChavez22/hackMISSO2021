import React from 'react'
import "./TopBar.css"
import { Notifications, Settings, Refresh } from '@mui/icons-material';
import {useAuth0} from '@auth0/auth0-react'
import LoginButton from './loginlogoutButton/LoginButton';
import LogoutButton from './loginlogoutButton/LogoutButton';

export default function Topbar() {
    const Authenticated: any = useAuth0().isAuthenticated;
    
    return (
        (Authenticated===false)?<LoginButton />:<LogoutButton />
    )
}