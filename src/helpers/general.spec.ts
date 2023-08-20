import {describe, expect, it} from "vitest";
import {calculateVictory} from "./general.ts";
import {gameResult} from "../types.ts";

describe('General', () => {
    describe('calculateVictory', () => {
        it('Should return X Winner', () => {
            const result: gameResult = calculateVictory({
                1: "X",
                2: "O",
                3: "X",
                4: "O",
                5: "X",
                6: "O",
                7: "O",
                8: "X",
                9: "X"
            })
            expect(result.winner).toEqual('X')
        })
        it('Should return O Winner', () => {
            const result: gameResult = calculateVictory({
                1: "O",
                2: "O",
                3: "",
                4: "X",
                5: "O",
                6: "X",
                7: "X",
                8: "X",
                9: "O"
            })
            expect(result.winner).toEqual('O')
        })

        it('Should return no Winner', () => {
            const result: gameResult = calculateVictory({
                1: "X",
                2: "O",
                3: "X",
                4: "X",
                5: "O",
                6: "O",
                7: "O",
                8: "X",
                9: "X"
            })
            expect(result.winner).toEqual(undefined)
        })
    })
})
