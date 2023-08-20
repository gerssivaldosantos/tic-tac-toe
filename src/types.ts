export type TableState = {
    1: gameSymbol| null;
    2: gameSymbol| null;
    3: gameSymbol| null;
    4: gameSymbol| null;
    5: gameSymbol| null;
    6: gameSymbol| null;
    7: gameSymbol| null;
    8: gameSymbol| null;
    9: gameSymbol| null;
};

export type CellIds = Array<CellId>;

export type CellId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type gameSymbol = 'X' | 'O'

export type play = {
    id: CellId,
    symbol: gameSymbol
}

export type GameResume = Array<play>

export type gameResult = {winner: gameSymbol | null}

export type KeysOfType<T> = (keyof T)[];
