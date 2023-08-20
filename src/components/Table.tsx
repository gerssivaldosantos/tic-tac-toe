import Cell from "./Cell.tsx";
import { useState } from "react";
import {CellId, CellIds, gameSymbol, play, TableState} from "../types.ts";
import styled from "styled-components";

type Props = {
    symbolStarts: gameSymbol;
    onCellUpdate: (movement:play, state:{newState: TableState, beforeState:TableState}) => void
};

export default function Table({ symbolStarts, onCellUpdate }: Props) {
    const onCellPlay = (id: CellId) => {
        if (tableState[id] === '') {
            const newState = { ...tableState, [id]: turnOwner };
            onCellUpdate({id, symbol: turnOwner}, {newState, beforeState: tableState})
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

    const [turnOwner, setTurnOwner] = useState<gameSymbol>(symbolStarts);

    return <TableStyle>{cells}</TableStyle>;
}

const TableStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    height: 50%;
    width: 100%;
    align-self: center;
    justify-self: center;
`
