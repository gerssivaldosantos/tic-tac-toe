import {
    gameResult,
    TableState,
    CellId
} from "../types.ts"; // Import the typings from your file

export function calculateVictory(board: TableState): gameResult {
    const victoriesPossibilities: CellId[][] = [
        /* HORIZONTAL */
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        /* VERTICAL */
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        /* DIAGONAL */
        [1, 5, 9],
        [3, 5, 7],
    ];

    // Check each winning combination
    for (const combo of victoriesPossibilities) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a] };
        }
    }

    // If no winner found, return undefined
    return { winner: undefined };
}
