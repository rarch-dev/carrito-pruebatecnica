type ProductListProps = {
    name: string;
    description: string;
    price: number;
    quantity: number;
};

const Product = ({ name, description, price, quantity }: ProductListProps) => {
    const product = {
        name,
        description,
        price,
        quantity,
    };
    return (
<div className="productContainer">
            <div className="textContainer">
            <h3>{product.name}</h3>
            <p><b>Descripcion:</b> {product.description}</p>
            <p><b>Precio:</b> RD${product.price}</p>
            <p><b>Cantidad:</b> {product.quantity}</p>
            </div>
            <button>Añadir 🛒</button>
        </div>
    );
}

export default Product;