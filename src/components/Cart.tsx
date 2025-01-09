const Cart: React.FC = () => {
    return (
        <div className="listContainer cart">
            <h1>Carrito de compras</h1>
            <div defaultValue="El carrito de compras esta vacio."></div>
            <a href="/">Añadir mas productos</a>
        </div>
        
    );
}

export default Cart;