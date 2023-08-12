
/* O que esse componente deve fazer?
* - Receber o símbolo a ser exibido dentro do botão;
* - Receber um Id que dá identidade única para esta célula
* - Emitir um evento de clique leva o Id como callback para indicar qual célula que foi marcada
*  */

type props = {
    id: string,
    symbol: string,
    onPlay: (id: string) => void
}

export default function Cell({id, symbol, onPlay}: props) {
    console.log(symbol)
    return <button onClick={() => onPlay(id)}>
        {symbol}
    </button>
}
