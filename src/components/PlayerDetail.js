
function PlayerDetail({ player }) {
    console.log(player)
    return (
        <div style={{marginTop: "50px"}}>
            {player.last_name},
            {player.first_name}
        </div>
    )
}

export default PlayerDetail;
