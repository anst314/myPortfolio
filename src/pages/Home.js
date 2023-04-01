import React from 'react'
import audio from '../images/hiphop-lofi-music.m4a'

function Home() {
  return (
    <div>
        {/* <audio controls> */}
  {/* <source src={audio} type="audio/*"/> */}
    {/* </audio> */}
        <iframe width="700" height="500" allow="autoplay" src="https://player.vimeo.com/video/553617869?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1" title="description"></iframe>

    </div>
  )
}

export default Home;