const FsContainer = require('../Manager/productManager');
// 
const path = require('path')
const productsPath = path.join('files', 'productos.json')

class FsProductDao {
    productManager = new FsContainer(productsPath);

    async getAll() {
        return await this.productManager.getAll();
    }

}

module.exports = FsProductDao;