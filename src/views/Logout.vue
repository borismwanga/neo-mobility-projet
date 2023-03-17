<template>
    <div></div>
  </template>
  
  <script>
  export default {
    name: "Logout",
    created() {
      this.logout();
    },
    methods: {
      logout() {
        localStorage.removeItem("token");
        this.$router.push("/login");
      },
    },
  };
  </script>
  