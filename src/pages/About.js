

import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";

function About() {
    return(  
    <div>
        <h2>Hello, My name is Anthony</h2>
        <div className="prompt"> 
        <p>
            I'm an aspiring software developer that loves learning and creating websites.
        </p>
        <LinkedIn />
        <Email />
        <GitHub />
        </div>
    </div>
    )
}

export default About;