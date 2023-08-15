import './App.css'
import Table from "./components/Table.tsx";
import GameBoard from "./components/GameBoard.tsx";
import {useState} from "react";
import {gameResult, GameResume, KeysOfType, play, TableState} from "./types.ts";

const calculateVictory = (tableState: TableState):gameResult => {
    const victoriesPossibilities = [
        /* HORIZONTAL */
        [1,2,3],
        [4,5,6],
        [7,8,9],
        /* VERTICAL */
        [1,4,5],
        [2,5,8],
        [3,6,9],
        /* DIAGONAL */
        [1,5,9],
        [3,5,7]
    ]
    const tableKeys: KeysOfType<TableState> = Object.keys(tableState) as unknown as KeysOfType<TableState>
    const xPlayerIndexes:number[] =
        tableKeys.filter(key => tableState[key] === 'X')
            .sort()
            .map(key => Number(key))
    const oPlayerIndexes:number[] =
        tableKeys.filter(key => tableState[key] === 'O')
            .sort()
            .map(key => Number(key))
    if (JSON.stringify(victoriesPossibilities).includes(JSON.stringify(xPlayerIndexes))) return {winner: 'X'}
    if (JSON.stringify(victoriesPossibilities).includes(JSON.stringify(oPlayerIndexes))) return {winner: 'O'}
    return {}
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
        <>
            <Table onCellUpdate={onUpdateGame} symbolStarts={'X'}/>
            <GameBoard gameResume={gameResume} />
        </>
    )
}

export default App
