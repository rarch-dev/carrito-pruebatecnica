import ProductsDetails from "../components/ProductsCard";

const Cart = () => {
  
  return (
    <div>
      <ul>
          <ProductsDetails product={{ name: "Producto 1", description: "Descripción del producto 1", price: 100 }} />
          
          <ProductsDetails product={{ name: "Producto 2", description: "Descripción del producto 2", price: 200 }} />

          <ProductsDetails product={{ name: "Producto 3", description: "Descripción del producto 3", price: 300 }} />
      </ul>
    </div>
  );
}

export default Cart;