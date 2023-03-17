<template>
    <v-container>
      <h1>Register</h1>
      <v-form @submit.prevent="register">
        <v-text-field
          v-model="userData.name"
          label="Name"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="userData.email"
          label="Email"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="userData.phoneNumber"
          label="Phone Number"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="userData.password"
          label="Password"
          type="password"
          required
          outlined
        ></v-text-field>
        <v-btn type="submit" color="primary">Register</v-btn>
      </v-form>
      <v-snackbar v-model="showError" color="error" timeout="5000">
        {{ errorMessage }}
      </v-snackbar>
    </v-container>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        userData: {
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
        },
        showError: false,
        errorMessage: "",
      };
    },
    methods: {
      async register() {
        try {
          const response = await axios.post("http://localhost:3000/api/users/register", this.userData);
  
          if (response.data && response.data.message) {
            this.$router.push("/login");
          } else {
            this.showError = true;
            this.errorMessage = "Registration failed. Please try again.";
          }
        } catch (error) {
          this.showError = true;
          this.errorMessage = error.response ? error.response.data.message : "An error occurred.";
        }
      },
    },
  };
  </script>
  