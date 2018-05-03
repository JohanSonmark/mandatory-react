/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props){
    let newMessage;
    const gameMessage = {
        player1: "Det är spelare X tur",
        player2: "Det är spelare O tur",
        player1won: 'Grattis! spelar "X" har vunnit',
        player2won: 'Grattis! spelar "O" har vunnit',
        draw: "Oavgjort!"
    };
    console.log (props);

    if (props.showMessage.winner === 1 || props.showMessage.winner === 2){
        props.showMessage.winner === 1 ? newMessage = gameMessage.player2won : newMessage = gameMessage.player1won
    }
    else if (!props.showMessage.board.includes(0)){
        newMessage = gameMessage.draw;
    }
    else {
        props.showMessage.player === "plr1" ? newMessage = gameMessage.player2 : newMessage = gameMessage.player1
    }


    return (
        <h2>{newMessage}</h2>
    );
}
