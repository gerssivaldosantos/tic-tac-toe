import styled from 'styled-components'
/* O que esse componente deve fazer?
* - Receber o símbolo a ser exibido dentro do botão;
* - Receber um Id que dá identidade única para esta célula
* - Emitir um evento de clique leva o Id como callback para indicar qual célula que foi marcada
*  */

import {CellId} from "../types.ts";

type props = {
    id: CellId,
    symbol: string,
    onPlay: (id: CellId) => void
}

export default function Cell({id, symbol, onPlay}: props) {
    return <>
    <Button onClick={() => onPlay(id)}>
        {symbol}
    </Button>
    </>
}

/* STYLES */

const Button = styled.button`
    cursor: pointer;
    height: auto;
    border: 1px solid black;
    &:not(:empty) {
        cursor: pointer;
        background-color: lightgreen ;
    }
`
