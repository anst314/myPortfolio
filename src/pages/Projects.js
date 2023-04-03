
import React from "react";
import stockScreenShot from '../images/stock-app.png'
import memoryGameScreenShot from '../images/memoryGame.png'

function Projects() {
    const projects = [
        {title: "starWars", url: "https://github.com/anst314/starwars-api"},
        {title: "stocks", url: "https://github.com/anst314/router-stock-app", image: stockScreenShot},
        {title: "memoryGame", url: "https://github.com/anst314/memoryGame", image: memoryGameScreenShot},
    ]
    return (
    <div>
        {projects.map(project=>{
            return (
                <div>
                    <h5>{project.title}</h5>
                    <div>
                    {project.image && <img src={project.image}/>}
                    </div>
                    <a target="_blank" href={project.url}>github repo</a>
                </div>
            )
        })}
    </div>
    )
}

export default Projects;