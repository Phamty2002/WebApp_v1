// routes/products.js
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management operations
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the product.
 *           example: 1
 *         name:
 *           type: string
 *           description: The name of the product.
 *           example: Sample Product
 *         price:
 *           type: number
 *           description: The price of the product.
 *           example: 29.99
 *         description:
 *           type: string
 *           description: The description of the product.
 *           example: This is a sample product description.
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: A list of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       '500':
 *         description: Internal Server Error
 */


/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: The requested product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewProduct'
 *     responses:
 *       '201':
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly created product.
 *                 name:
 *                   type: string
 *                   description: The name of the product.
 *                 price:
 *                   type: number
 *                   description: The price of the product.
 *                 description:
 *                   type: string
 *                   description: The description of the product.
 *                 message:
 *                   type: string
 *                   description: A success message.
 *                   example: Product created successfully
 *       '500':
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /products/{name}:
 *   put:
 *     summary: Update a product by name
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: The name of the product to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProduct'
 *     responses:
 *       '200':
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message.
 *                   example: Product updated successfully
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /products/{name}:
 *   delete:
 *     summary: Delete a product by name
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: The name of the product to delete.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message.
 *                   example: Product deleted successfully
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal Server Error
 */

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', productsController.createProduct);
router.put('/update/:name', productsController.updateProductByName);
router.delete('/delete/:name', productsController.deleteProductByName);
module.exports = router;
