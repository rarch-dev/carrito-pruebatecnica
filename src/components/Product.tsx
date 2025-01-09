import * as React from "react";
import Popover from "@mui/material/Popover";
import { usePopoverHandler } from "./popoverUtils";

type ProductListProps = {
  name: string;
  id: number;
  description: string;
  price: number;
  quantity: number;
};

const Product = ({ name, description, price, quantity }: ProductListProps) => {
  const { anchorEl, isPopoverOpen, handlePopoverOpen, handlePopoverClose } = usePopoverHandler();

  return (
    <div className="productContainer">
      <div className="textContainer">
        <h3>{name}</h3>
        <p><b>Descripción:</b> {description}</p>
        <p><b>Precio:</b> RD${price}</p>
        <p><b>Cantidad:</b> {quantity}</p>
      </div>

      <button onClick={handlePopoverOpen}>Añadir 🛒</button>

      <Popover
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div style={{ padding: "10px" }}>
          <p>Información adicional del producto</p>
          <a href="/cart">Ver más detalles</a>
        </div>
      </Popover>
    </div>
  );
};

export default Product;
