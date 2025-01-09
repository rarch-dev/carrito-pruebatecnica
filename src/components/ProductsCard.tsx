type Product = {
    name: string;
    description: string;
    price: number;
};

const ProductsDetails = ({ product }: { product: Product }) => {
    return (
        <div className="ProductsCardContainer">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
}

export default ProductsDetails;