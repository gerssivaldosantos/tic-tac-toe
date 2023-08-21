import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Cell from "../components/Cell.tsx";
import {describe, it , expect} from "vitest";

describe('Cell Component', () => {
    it('Should create a cell with "X" symbol', async () => {
        const symbol = 'X'
        render(<Cell id={1} onPlay={() => null} symbol={symbol}/>)
        expect(screen.getByTestId('1')).toHaveTextContent('X')
    })
    it('Should create a cell with "O" symbol', async () => {
        const symbol = 'O'
        render(<Cell id={1} onPlay={() => null} symbol={symbol}/>)
        expect(screen.getByTestId('1')).toHaveTextContent('O')
    })
    it('Should create a cell with none symbol', async () => {
        const symbol = ""
        render(<Cell id={1} onPlay={() => null} symbol={symbol}/>)
        expect(screen.getByTestId('1')).toHaveTextContent('')
    })
})

