import Product from "./Product";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import React from 'react';

const ProductList = () => {
    const BasicPopover = ({ anchorEl, handleClose }: { anchorEl: HTMLButtonElement | null, handleClose: () => void }) => {
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;

        return (
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>

        );
    };

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);


    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    <BasicPopover anchorEl={anchorEl} handleClose={handlePopoverClose} />

    return (
        <div className="listContainer" >
            <h1>Lista de Productos 💻</h1>
            <a href="/cart">Ver Carrito</a>
            <div className="ProductsContainer">
                <Product
                    id={1}
                    name="Teclado Mecánico RGB"
                    description="Teclado mecánico con retroiluminación RGB y switches táctiles."
                    price={120}
                    quantity={15}
                />

                <Product
                    id={2}
                    name="Mouse Gamer"
                    description="Mouse óptico con 7 botones programables y luces RGB."
                    price={60}
                    quantity={25}
                />

                <Product
                    id={3}
                    name="Monitor 144Hz"
                    description="Monitor gaming Full HD con 144Hz de tasa de refresco y 1ms de respuesta."
                    price={250}
                    quantity={10}
                />

                <Product
                    id={4}
                    name="Silla Gamer"
                    description="Silla ergonómica para gamers con soporte lumbar y reposabrazos ajustables."
                    price={180}
                    quantity={8}
                />

                <Product
                    id={5}
                    name="Audífonos Gamer"
                    description="Audífonos con sonido envolvente 7.1 y micrófono desmontable."
                    price={80}
                    quantity={20}
                />

                <Product
                    id={6}
                    name="Tarjeta Gráfica RTX 3060"
                    description="GPU con 12GB GDDR6 ideal para gaming y diseño."
                    price={400}
                    quantity={5}
                />

                <Product
                    id={7}
                    name="Procesador AMD Ryzen 7"
                    description="Procesador de 8 núcleos y 16 hilos, ideal para gaming y multitarea."
                    price={300}
                    quantity={10}
                />

                <Product
                    id={8}
                    name="Memoria RAM 16GB DDR4"
                    description="Kit de memoria RAM de alta velocidad, 3200MHz."
                    price={90}
                    quantity={30}
                />

                <Product
                    id={9}
                    name="Disco SSD 1TB"
                    description="Unidad SSD de 1TB con tecnología NVMe para mayor velocidad."
                    price={100}
                    quantity={12}
                />

                <Product
                    id={10}
                    name="Fuente de Poder 750W"
                    description="Fuente certificada 80 Plus Gold para sistemas gaming."
                    price={110}
                    quantity={15}
                />

                <Product
                    id={11}
                    name="Placa Madre ATX"
                    description="Placa madre compatible con procesadores AMD Ryzen y soporte para DDR4."
                    price={150}
                    quantity={10}
                />

                <Product
                    id={12}
                    name="Case Gamer"
                    description="Gabinete con panel lateral de vidrio templado y ventiladores RGB incluidos."
                    price={70}
                    quantity={8}
                />

                <Product
                    id={13}
                    name="Refrigeración Líquida"
                    description="Sistema de enfriamiento líquido con iluminación RGB para CPU."
                    price={120}
                    quantity={10}
                />

                <Product
                    id={14}
                    name="Controlador RGB"
                    description="Controlador de tiras LED y ventiladores RGB con control remoto."
                    price={30}
                    quantity={25}
                />

                <Product
                    id={15}
                    name="Kit de Ventiladores RGB"
                    description="Set de 3 ventiladores RGB de alto rendimiento."
                    price={50}
                    quantity={20}
                />

                <BasicPopover anchorEl={anchorEl} handleClose={handlePopoverClose} />
            </div>
        </div>

    );
};

export default ProductList;

