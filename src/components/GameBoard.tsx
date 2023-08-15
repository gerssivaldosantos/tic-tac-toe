import {GameResume, play} from "../types.ts";
import {JSX} from "react";

type props = {
    gameResume: GameResume
}

export default function GameBoard({gameResume}: props) {
    const resumes: JSX.Element[] = gameResume.map((value: play, index: number) => {
       return <li key={index}><h3>{index + 1}º - {value.symbol} em #{value.id}</h3></li>
    })
    return <>
        <ul>
            {resumes}
        </ul>
    </>
}
