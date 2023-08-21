import {GameResume, play} from "../types.ts";
import {JSX} from "react";
import styled from "styled-components";

type props = {
    gameResume: GameResume
}

export default function GameBoard({gameResume}: props) {
    const resumes: JSX.Element[] = gameResume.map((value: play, index: number) => {
       return <button data-testid={`${index}-${value.symbol}-${value.id}`} key={index}> {index + 1}º  {value.symbol}#{value.id}</button>
    })
    return <GameBoardStyle>
        <div>
            {resumes}
        </div>
    </GameBoardStyle>
}

const GameBoardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 50%;
  
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding: 0 1rem 1rem 1rem;
    width: 100%;
  }
  
  div > button {
    border: none;
    background-color: white;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.20);
    border-radius: 0.5rem;
    width: 100%;
    font-size: 1.2rem;
    margin: 0.1rem;
    padding: 1rem 0
  }
`
