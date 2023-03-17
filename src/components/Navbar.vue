<template>

<div class="navMenu" id="navMenuId">
  <div class="title">
    <router-link to="/" class="white--text" >Car Renting App</router-link>
  </div>
    
  <div class="login">
    <template v-if="isLoggedIn">
      <router-link class="main_links" to="/add-car">Add Car</router-link>
      <router-link class="main_links" to="/my-booking">My Bookings</router-link>
      <router-link class="main_links" to="/logout" @click.native="logout">Logout</router-link>
    </template>

    <template v-else>
      <router-link class="main_links" to="/login">Login</router-link>
      <router-link class="main_links" to="/register">Register</router-link>
    </template>

  </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    isLoggedIn() {
      return localStorage.getItem("token") !== null;
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.navMenu{
  top:0;
    overflow:hidden;
    background-color:#000000;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.navMenu a{
    float:left;
    display:block;
    color:#f2f2f2;
    text-align:center;
    padding:14px 16px;
    text-decoration:none;
    font-size:17px
}
.navMenu a.active{
    background-color:#25a186;
    color:#FFF
}
.navMenu .icon{
    display:none
}
.fa-bars:before{
    content:"\f0c9"
}
.navMenu .dropdown{
    float:left;
    overflow:hidden
}
.navMenu .dropdown .dropbtn{
    font-size:16px;
    border:none;
    outline:none;
    color:#FFFFFF;
    padding:14px 16px;
    background-color:#000000;
    font-family:inherit;
    margin:0;
    width:100%;
    text-align:left
}
.main_links{
    background-color:#000000;
    color:#FFFFFF;
    line-height:1
}
.main_links:hover{
    background-color:#800000;
    color:#FFFFFF
}
.navMenu .navbar a:hover,.navMenu .dropdown:hover .dropbtn{
    background-color:#800000;
    color:#FFFFFF
}
.navMenu .dropdown-content{
    display:none;
    position:absolute;
    background-color:#000;
    min-width:160px;
    box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);
    z-index:1
}
.navMenu .dropdown-content a{
    float:none;
    color:#FFF;
    padding:12px 16px;
    text-decoration:none;
    display:block;
    text-align:left;
    background-color:#808040;
    color:#000000
}
.navMenu .dropdown-content a:hover{
    background-color:#333;
    color:#FFFFFF
}
.navMenu .dropdown:hover .dropdown-content{
    display:block
}
@media screen and (max-width: 768px){
    .navMenu a:not(:first-child){
        display:none
    }
    .navMenu .dropdown{
        display:none
    }
    .navMenu a.icon{
        float:right;
        display:block
    }
    .navMenu.mobileView{
        position:relative
    }
    .navMenu.mobileView .icon{
        position:absolute;
        right:0;
        top:0
    }
    .navMenu.mobileView a{
        float:none;
        display:block;
        text-align:left
    }
    .navMenu.mobileView .dropdown{
        float:none;
        display:block;
        text-align:left
    }
    .navMenu .dropdown-content{
        position:relative
    }
}

</style>
