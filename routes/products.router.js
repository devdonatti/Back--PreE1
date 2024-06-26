import { Router } from "express";
import { productManager } from "../src/index.js";

const productsRouter = Router()


productsRouter.get ('/', async (req,res) =>{
    try {
        const {limit} = req.query;
        const products = await productManager.getProducts()

        if (limit) {
            const limitedProducts = product.slice (0,limit)
            return res.json (limitedProducts)
        }

        return res.json(products)

    } catch (error) {
        console.log (error)
        res.send ("Error al intentar recibir los productos")
    }
})

productsRouter.get('/:pid', async (req , res) =>{
    try {
        const {pid} = req.params;
        const products = await productManager.getProductById(pid)
        res.json (products)

    } catch (error) {
        console.log (error);
        res.send (`Error al intentar recibir el producto con id ${pid}`)

    }
})


productsRouter.post ('/', async (req,res )=> {
    try {
        const {title, description, price, thumbnail, code, status =true, category } = req.body;
        const response = await productManager.addProduct({title, description, price, thumbnail, code, status, category})
        res.json (response)
        
    } catch (error) {
        console.log (error);
        res.send (`Error al intentar agregar producto`)

    }

})

productsRouter.put('/:pid' , async (req,res )=>{
    const {pid} = req.params ;
    try {
        const {title, description, price, thumbnail, code, status=true, category } = req.body;
        const response = await productManager.updateProduct(pid,{title, description, price, thumbnail, code, status, category})
        res.json(response)
    } catch (error) {
        console.log (error);
        res.send (`Error al intentar editar producto con id ${pid}`)

    }

})

    productsRouter.delete('/:pid' , async (req,res )=>{
        const {pid} = req.params ;
        try {
            await productManager.deleteProduct(pid)
            res.send ('Producto eliminado con exito')
            
        } catch (error) {
            console.log (error);
            res.send (`Error al eliminar producto con id ${pid}`)
    
        }

})

export {productsRouter}
