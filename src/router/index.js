import { createRouter, createWebHistory } from 'vue-router';
import Cars from '@/views/Cars.vue';
import AddCar from '@/views/AddCar.vue';
import EditCar from '@/views/EditCar.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import MyBookings from '@/views/MyBookings.vue';
import CarDetails from "@/components/CarDetails.vue";



const routes = [
  { path: '/', component: Cars },
  { path: '/add-car', component: AddCar },
  { path: '/edit-car/:id', component: EditCar, props: true },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/my-booking',
    name: 'MyBookings',
    component: MyBookings,
  },
  {
    path: "/cars/:id",
    name: "CarDetails",
    component: CarDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
