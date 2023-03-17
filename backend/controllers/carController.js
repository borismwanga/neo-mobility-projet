const Car = require('../models/car');

exports.createCar = async (req, res) => {
  try {
    const newCar = new Car({
      owner: req.userData.userId, // Use the authenticated user's ID as the car owner
      brand: req.body.brand,
      model: req.body.model,
      year: req.body.year,
      location: req.body.location,
      dailyRate: req.body.pricePerDay, // Update this line
      image: req.body.image,
    });

    const car = await newCar.save();
    res.status(201).json({ message: 'Car created successfully', car });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ message: 'Error creating car hhhhhh', error });
  }
};


exports.getAllCars = async (req, res) => {
    try {
      const cars = await Car.find();
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json({ message: "Error fetching cars", error });
    }
  };
  

exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.status(200).json({ message: 'Car fetched successfully', car });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching car', error });
  }
};

exports.updateCar = async (req, res) => {
    try {
      const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
      if (!updatedCar) {
        return res.status(404).json({ message: 'Car not found' });
      }
  
      res.status(200).json({ message: 'Car updated successfully', car: updatedCar });
    } catch (error) {
      res.status(500).json({ message: 'Error updating car', error });
    }
  };
  
  exports.deleteCar = async (req, res) => {
    try {
      const deletedCar = await Car.findByIdAndDelete(req.params.id);
  
      if (!deletedCar) {
        return res.status(404).json({ message: 'Car not found' });
      }
  
      res.status(200).json({ message: 'Car deleted successfully', car: deletedCar });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting car', error });
    }
  };
 
  
  
