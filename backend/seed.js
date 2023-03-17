require('dotenv').config();


const mongoose = require('mongoose');
const faker = require('faker'); 
const User = require('./models/User');
const Car = require('./models/Car');

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Connected to MongoDB');

    const users = Array.from({ length: 15 }, () => {
      const user = new User({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.phoneNumber(),
      });

      return user.save();
    });

    const createdUsers = await Promise.all(users);
    console.log('Sample users created:', createdUsers);

    const cars = Array.from({ length: 30 }, () => {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
      const car = new Car({
        owner: createdUsers[randomUserIndex]._id,
        brand: faker.company.companyName(),
        model: faker.vehicle.model(),
        year: faker.date.past(10).getFullYear(),
        pricePerDay: faker.random.number({ min: 50, max: 300 }),
        location: faker.address.city(),
        imageUrl: faker.image.imageUrl(),
        description: faker.lorem.sentences(),
      });

      return car.save();
    });

    const createdCars = await Promise.all(cars);
    console.log('Sample cars created:', createdCars);

    // Close the connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

