const mongoProduct = require('./mongoProduct');
const fsProduct = require('./fsProduct')

const selDb = 'fs';

let productDao;

switch (selDb) {
	case 'mongo':
		productDao = new mongoProduct();
		break;
	case 'fs':
		productDao = new fsProduct();
		break;
	default:
		break;
}

module.exports = productDao;