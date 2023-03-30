
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PlayerDetail from "../components/PlayerDetail";

function Home() {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch("https://www.balldontlie.io/api/v1/players")
        .then(response=> response.json()) 
        .then(data=> {setPlayers(data.data)})
    }, []);
    return (
    <div>
        {players.map(player=> {
            return <PlayerDetail player = { player }/>

        })}
    </div>
    )
}

export default Home;