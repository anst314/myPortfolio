
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PlayerDetail from "../components/PlayerDetail";

function StarWars() {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        fetch("https://swapi.dev/api/films/")
        .then(response=> response.json()) 
        .then(data=> {
            console.log(data.results)
            setFilms(data.results)})
    }, []);
    return (
    <div>
        {films.map(film=> {
            return(
                <div>
                    {film.director}
                    {film.producer}
                </div>
            )

        })}
    </div>
    )
}

export default StarWars;