<template>
  <v-container>
    <h1>Add Car</h1>
    <CarForm :submitForm="addCar" />
    <v-snackbar v-model="showSuccess" color="success" timeout="5000">
      Car added successfully!
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from 'axios';
import CarForm from '@/components/CarForm.vue';

export default {
  components: {
    CarForm,
  },
  data() {
    return {
      showSuccess: false,
    };
  },
  methods: {
    async addCar(car) {
  try {
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    console.log('Car data to be sent:', car); 

    const response = await axios.post('http://localhost:3000/api/cars', car, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    console.log('Response from API:', response); 

    this.showSuccess = true;

    setTimeout(() => {
      this.$router.push('/cars');
    }, 500);
  } catch (error) {
    console.error('Error adding car:', error);
  }
},




  },
};
</script>
