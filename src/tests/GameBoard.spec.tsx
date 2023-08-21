import {render} from '@testing-library/react';
import '@testing-library/jest-dom'
import GameBoard from "../components/GameBoard.tsx";
import {GameResume} from "../types.ts";
import {describe, expect, it} from "vitest";

const gameResumeMock: GameResume = [
    {
        id: 1,
        symbol: "X"
    },
    {
        id: 5,
        symbol: "O"
    },
    {
        id: 9,
        symbol: "X"
    },
    {
        id: 7,
        symbol: "O"
    },
    {
        id: 6,
        symbol: "X"
    },
    {
        id: 4,
        symbol: "O"
    },
    {
        id: 8,
        symbol: "X"
    },
    {
        id: 3,
        symbol: "O"
    }
];

describe('GameBoard', () => {
    it('Should return a valid component', () => {
        const {getByTestId} = render(<GameBoard gameResume={gameResumeMock}/>);
        gameResumeMock.forEach((play, index) => {
            const button = getByTestId(`${index}-${play.symbol}-${play.id}`);
            expect(button).toHaveTextContent(`${index + 1}º ${play.symbol}#${play.id}`);
            expect(button).toBeInTheDocument();
        });
    });
})
