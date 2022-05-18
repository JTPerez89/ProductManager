const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api/:id', ProductController.findOneProduct);
    app.post('/api/product/new', ProductController.createProduct);
    app.put('/api/:id/update', ProductController.updateProduct);
    app.delete('/api/:id/delete', ProductController.deleteProduct);
}