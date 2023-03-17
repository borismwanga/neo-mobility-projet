<template>
    <v-container>
      <v-row>
        <v-col v-for="car in cars" :key="car._id" cols="12" sm="6" md="4">
          <CarCard :car="car" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  import CarCard from '@/components/CarCard.vue';
  
  export default {
    components: {
      CarCard,
    },
    data() {
      return {
        cars: [], // Load cars data from API or Vuex
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/api/cars');
        this.cars = response.data;
      } catch (error) {
        console.error('Error fetching cars data:', error);
      }
    },
  };
  </script>
  