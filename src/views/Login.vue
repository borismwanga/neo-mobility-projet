<template>
    <v-container>
      <h1>Login</h1>
      <v-form @submit.prevent="login">
        <v-text-field
          v-model="userData.email"
          label="Email"
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
        <v-btn type="submit" color="primary">Login</v-btn>
      </v-form>
      <v-snackbar v-model="showError" color="error" timeout="5000">
        {{ errorMessage }}
      </v-snackbar>
    </v-container>
  </template>
  
  <script>
  import axios from "@/axiosConfig";


  
  export default {
    data() {
      return {
        userData: {
          email: "",
          password: "",
        },
        showError: false,
        errorMessage: "",
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post("http://localhost:3000/api/users/login", this.userData);
  
          if (response.data && response.data.token) {
            localStorage.setItem("token", response.data.token);
            this.$router.push("/");
          } else {
            this.showError = true;
            this.errorMessage = "Invalid email or password.";
          }
        } catch (error) {
          this.showError = true;
          this.errorMessage = error.response ? error.response.data.message : "An error occurred.";
        }
      },
    },
  };
  </script>
  