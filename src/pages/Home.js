import React from 'react'
import image from '../images/selfie-formal.jpg'

function Home() {
  return (
    <div>
      <h1>Hello, I'm <span>Anthony Stanton</span> and Nice to meet you!</h1>
      <>I'm a designer who loves to create beautiful and functional websites
        for businesses and individuals. Let's collaborate for your next web 
        design project.
      </>
        {/* <audio controls> */}
  {/* <source src={audio} type="audio/*"/> */}
    {/* </audio> */}
       <div><img id="selfie" src={image}/></div> 
        <iframe width="700" height="500" allow="autoplay" src="https://player.vimeo.com/video/553617869?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1" title="description"></iframe>
        <iframe width="700" height="500" allow="autoplay" src="https://player.vimeo.com/video/764388093?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1"></iframe>

    </div>
  )
}

export default Home;