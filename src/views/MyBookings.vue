<template>
  <v-container>
    <h1>My Bookings</h1>
    <v-data-table
      :headers="headers"
      :items="bookings"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.startDate="{ item }">
        {{ item.startDate | formatDate }}
      </template>
      <template v-slot:item.endDate="{ item }">
        {{ item.endDate | formatDate }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn color="error" @click="deleteBooking(item._id)">Delete</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      headers: [
        { text: 'Car', value: 'car' },
        { text: 'Start Date', value: 'startDate' },
        { text: 'End Date', value: 'endDate' },
        { text: 'Total', value: 'totalPrice' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      bookings: [],
    };
  },
  mounted() {
    this.fetchBookings();
  },
  methods: {
    async fetchBookings() {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/bookings', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.bookings = response.data.bookings;
    },
    async deleteBooking(bookingId) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:3000/api/bookings/${bookingId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.bookings = this.bookings.filter((booking) => booking._id !== bookingId);
      } catch (error) {
        console.error('Error deleting booking:', error);
      }
    },
  },
  filters: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(date).toLocaleDateString('fr-BE', options);
    },
  },
};
</script>
