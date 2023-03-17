<template>
  <v-hover>
    <v-col
      slot-scope="{ hover }"
      @click="goToCarDetails"
      :class="{'car-card-hover': hover}"
      class="car-card mb-4"
      cols="12"
    >
      <v-card height="100%" class="d-flex flex-column">
        <v-img :src="car.imageUrl" height="200px"></v-img>
        <v-card-text class="flex-grow-1">
          <!-- Car brand, model, and year -->
          <h3>{{ car.brand }} {{ car.model }} ({{ car.year }})</h3>

          <!-- Car location -->
          <p>Location: {{ car.location }}</p>

          <!-- Car price per day -->
          <p>Price per day: €{{ car.pricePerDay }}</p>

          <!-- Car description -->
          <p class="text-clamp">{{ car.description }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="primary" @click.stop="goToCarDetails">Read more</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-hover>
</template>

<script>
export default {
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToCarDetails() {
      this.$router.push({ name: 'CarDetails', params: { id: this.car._id } });
    },
  },
};
</script>

<style scoped>
  .car-card {
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .car-card-hover {
    /* Add desired hover effects, e.g., change box-shadow or scale */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  .text-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
