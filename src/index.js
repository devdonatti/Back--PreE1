import express from "express";
import { ProductManager } from "./productManager.js";
import { CartManager } from "./cartManager.js";
import { productsRouter } from "../routes/products.router.js";
import { cartsRouter } from "../routes/carts.router.js";
import config from "./config.js"

const PORT = 8080;
const app = express();

export const productManager = new ProductManager;
export const cartManager = new CartManager;

app.use (express.json())
app.use ('/api/products',productsRouter)
app.use ('/api/carts',cartsRouter)
app.use ('/static', express.static (`${config.DIRNAME}/public`))

app.listen (PORT, (req,res)=> {
    console.log (`servidor escuchando en el puerto ${PORT}`)
})