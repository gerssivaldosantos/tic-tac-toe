import {gameResult, KeysOfType, TableState} from "../types.ts";

export const calculateVictory = (tableState: TableState):gameResult => {
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
    /*const oPlayerIndexes:number[] =
        tableKeys.filter(key => tableState[key] === 'O')*/
    if ( victoriesPossibilities.find(
        possibility => possibility.every( id => xPlayerIndexes.includes(id) ) )
    ) {
        return {winner: 'X'}
    }
    return {}
}
