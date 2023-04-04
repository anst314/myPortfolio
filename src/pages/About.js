

import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import image from '../images/android-selfie4.PNG'

function About() {
    return(  
    <div>
        <h2>Hello, My name is Anthony</h2>
        <div className="prompt"> 
        <p>
            Hello and welcome to my website. My name is Anthony Stanton, and I am so glad you've 
            stopped by to learn a little bit more about me. <br></br>
            I am a Software Engineer based in Pittsburgh PA., and I am passionate about web 
            development. <br></br>

            But my life is not all about work- I also enjoy sci-fi movies, and basketball. 
            When I'm not on my computer you will usually find me spending time with family or<br></br>
            transporting to the future as a super hero android.

            I created this site as a launchpad for my creativity. I hope you find it as budding
            potential.  If you have any questions or just want to say hello, please don't 
            hesitate to contact me.

            Thank you again for stopping by, and I hope you have a great day!

           

            
        </p>

        <div>
        <img id="about-pic" src={image}/>
        </div>


        <LinkedIn />
        <Email />
        <GitHub />
        </div>
    </div>
    )
}

export default About;