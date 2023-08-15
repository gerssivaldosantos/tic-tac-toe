export type TableState = {
    1: gameSymbol| '';
    2: gameSymbol| '';
    3: gameSymbol| '';
    4: gameSymbol| '';
    5: gameSymbol| '';
    6: gameSymbol| '';
    7: gameSymbol| '';
    8: gameSymbol| '';
    9: gameSymbol| '';
};

export type CellIds = Array<CellId>;

export type CellId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type gameSymbol = 'X' | 'O'

export type play = {
    id: CellId,
    symbol: gameSymbol
}

export type GameResume = Array<play>

export type gameResult = {winner?: gameSymbol}

export type KeysOfType<T> = (keyof T)[];
