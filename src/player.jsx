import { useState } from "react";

export default function Player(){
    const playerStyle = {
        border: '2px solid aquamarine',
        margin: "15px",
        padding: '15px',
        borderRadius: '15px'
    }

    const [player, setPlayer] = useState(11);
    
    const addPlayer = () => {
        return(setPlayer(player+1))
    }
    const removePlayer = () => {
        return(setPlayer(player-1))
    }

    return(
        <div style={playerStyle}>
            <h3>Player: {player}</h3>
            <button onClick={removePlayer}>Remove</button>
            <button onClick={addPlayer}>Add</button>
        </div>
    )
}