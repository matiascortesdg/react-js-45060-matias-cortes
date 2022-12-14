import { useState } from 'react'

const ItemCount = ( { stock, onAdd, initial=1 } ) => {

        const [count, setCount] = useState(initial);

        const sumar = () => {
            count < stock && setCount(count + 1)

        };

        const restar = () => {
            if (count > 1) 
            setCount(count - 1);
        };

        const reset = () => {
            setCount(1);
        }

        const agregar = () => onAdd(count);

        return (
            <div className="item-count">

                <p className="btn-count">{count}</p>
                <button className="btn-count" onClick={restar}>-</button>
                <button className="btn-count" disabled={count === stock} onClick={sumar}>+</button>
                <button className="btn-count" disabled={stock === 0} onClick={agregar}>Agregar al Carrito</button>
                <button className="btn-count" onClick={reset}>Volver al Valor inicial</button>
            </div>
        )
};

export default ItemCount;

