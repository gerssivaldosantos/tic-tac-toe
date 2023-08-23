import Table from "./components/Table.tsx";
import GameBoard from "./components/GameBoard.tsx";
import {useState} from "react";
import {gameResult, GameResume, play, TableState} from "./types.ts";
import {calculateVictory} from "./helpers/general.ts";
import styled from 'styled-components';

const initialTableState = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null
}

function App() {
    const [gameResume, setGameResume] =
        useState<GameResume>([])
    const onUpdateGame = (movement:play, state:{newState: TableState, beforeState:TableState}) => {
        setGameResume(prevState => [...prevState, movement])
        const result: gameResult = calculateVictory(state.newState)
        if (result.winner) {
            window.alert(result.winner)
        }
    }
    return (
        <AppStyle>
            <Table initialTableState={initialTableState} onCellUpdate={onUpdateGame} symbolStarts={'X'}/>
            <GameBoard gameResume={gameResume} />
        </AppStyle>
    )
}

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #f4f4f4;
`

export default App
