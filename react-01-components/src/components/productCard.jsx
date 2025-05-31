const ProductCard =() =>{
    const handleIncrement=() =>{
            console.log("Estoy en el manejo de incremento");
    }
    const handleDecrement= ()=>{
            console.log("Estoy en el manejo de decremento");
    }
    return (
        <div>
            <p>title </p>
            <p>raiting</p>
            <p>price</p>
            <p>count</p>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}> +</button>
        </div>
    )
}

export {ProductCard};