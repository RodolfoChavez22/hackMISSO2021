import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = ()=>{
    const { loginWithRedirect}:any = useAuth0();
    return (
        <div className ="topbar">
            <div className = "topbarWrapper">
                <div className = "topleft">
                    <span className="logo">Data Visualization</span> 
                </div>
                <div className = "topright">
                    <div className="logInOutButton">
                        <button onClick={()=> loginWithRedirect()}>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default LoginButton