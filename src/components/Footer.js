
import React from 'react'
import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import "../styles/Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div> 
                <LinkedIn />
                <GitHub />
                <Twitter />
            </div>
            <p> &copy; 2023</p>        
        </div> 
        );  
}

export default Footer;