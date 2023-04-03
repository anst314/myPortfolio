
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PlayerDetail from "../components/PlayerDetail";
import { Card, Grid } from 'semantic-ui-react'

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
    <Grid columns={3}>
        {films.map(film=> {
            return(
                <Grid.Column>
                    <Card>
                        <Card.Content>
                           <Card.Header>{film.title}</Card.Header>
                            <Card.Description>
                                <div>Director: {film.director}</div>
                                <div>Producer: {film.producer}</div>
                            </Card.Description>
                        </Card.Content>

                    </Card>
                    
                </Grid.Column>
            )

        })}
    </Grid>
    )
}

export default StarWars;