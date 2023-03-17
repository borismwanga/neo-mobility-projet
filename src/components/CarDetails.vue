<template>
    <v-container>
      <h1>{{ car.brand }} {{ car.model }}</h1>
  
      <!-- Car image -->
      <v-img :src="car.imageUrl" height="200px"></v-img>
  
      <!-- Car details -->
      <p>Year: {{ car.year }}</p>
      <p>Location: {{ car.location }}</p>
      <p>Price per day: €{{ car.pricePerDay }}</p>
      <p>Description: {{ car.description }}</p>
  
      <!-- Rent car form -->
      <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.lazy="rental.startDate"
              label="Start Date"
              type="date"
              :rules="[requiredRule]"
              required
              class="date-picker"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.lazy="rental.endDate"
              label="End Date"
              type="date"
              :rules="[requiredRule]"
              required
              class="date-picker"
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- Display total price -->
        <p class="total-price">Total price: €{{ totalPrice }}</p>
        <v-btn type="submit">Rent Car</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  // ... The rest of your script ...
  </script>
  
  <style scoped>
    .date-picker {
      max-width: 250px;
    }
  
    .total-price {
      font-size: 1.5em;
      font-weight: bold;
    }
  </style>
  