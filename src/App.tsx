import Table from "./components/Table.tsx";
import GameBoard from "./components/GameBoard.tsx";
import {useState} from "react";
import {gameResult, GameResume, play, TableState} from "./types.ts";
import {calculateVictory} from "./helpers/general.ts";
import styled from 'styled-components';

const AppStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`

function App() {
    const [gameResume, setGameResume] =
        useState<GameResume>([])
    const onUpdateGame = (movement:play, state:{newState: TableState, beforeState:TableState}) => {
        setGameResume(prevState => [...prevState, movement])
        const result: gameResult = calculateVictory(state.newState)
        console.log(state.newState)
        if (result.winner) {
            window.alert(result.winner)
        }
    }
    return (
        <AppStyle>
            <Table onCellUpdate={onUpdateGame} symbolStarts={'X'}/>
            <GameBoard gameResume={gameResume} />
        </AppStyle>
    )
}

export default App
