import Cell from "./Cell.tsx";
import { useState } from "react";
import {CellId, CellIds, TableState} from "../types.ts";

type Props = {
    symbolStarts: string;
    onCellUpdate: (newState: TableState, before:TableState) => void
};

export default function Table({ symbolStarts, onCellUpdate }: Props) {
    const onCellPlay = (id: CellId) => {
        if (tableState[id] === '') {
            const newState = { ...tableState, [id]: turnOwner };
            onCellUpdate(newState, tableState)
            setTableState(newState);
            if (turnOwner === 'X') {
                setTurnOwner('O');
            } else if (turnOwner === 'O') {
                setTurnOwner('X');
            }
        }
    };

    const [tableState, setTableState] = useState<TableState>({
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
    });

    const cellIds:CellIds = [1,2,3,4,5,6,7,8,9];
    const cells = cellIds.map((id) => (
        <Cell
            key={id}
            id={id}
            onPlay={onCellPlay}
            symbol={tableState[id]}
        />
    ));

    const [turnOwner, setTurnOwner] = useState(symbolStarts);

    return <div className="table">{cells}</div>;
}
