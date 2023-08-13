import './App.css'
import Table from "./components/Table.tsx";
import GameBoard from "./components/GameBoard.tsx";
import {useState} from "react";
import {CellId, GameResume, gameSymbol, play, TableState} from "./types.ts";

const getNewMovement = (newGameState: TableState, oldGameState: TableState):play => {
    const newGameStateEntries: Array<[CellId, gameSymbol]> = Object.entries(newGameState) as unknown as Array<[CellId, gameSymbol]>
    const cellMovement = newGameStateEntries.find(
        ([key, value]) => {
            return value !== oldGameState[key];
        }
    ) as [CellId, gameSymbol]

    return {
            id: cellMovement[0],
            symbol: cellMovement[1]
    }
}

function App() {
    const [gameResume, setGameResume] =
        useState<GameResume>({})
    const onUpdateGame = (newGameState: TableState, oldGameState: TableState) => {
        setGameResume({1: getNewMovement(newGameState, oldGameState)})
        console.log(gameResume)
    }
    return (
        <>
            <Table onCellUpdate={onUpdateGame} symbolStarts={'X'}/>
            <GameBoard gameResume={gameResume} />
        </>
    )
}

export default App
