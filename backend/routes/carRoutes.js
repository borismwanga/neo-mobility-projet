const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const checkAuth = require('../middlewares/checkAuth');

router.post('/', checkAuth, carController.createCar);
router.get('/', carController.getAllCars);
router.get('/:id', carController.getCarById);
router.put('/:id', checkAuth, carController.updateCar);
router.delete('/:id', checkAuth, carController.deleteCar);

module.exports = router;
