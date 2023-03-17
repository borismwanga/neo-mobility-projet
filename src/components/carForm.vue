<template>
  <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
    <v-text-field
      v-model.lazy="car.brand"
      label="Brand"
      :rules="[requiredRule]"
      required
    ></v-text-field>
    <v-text-field
      v-model.lazy="car.model"
      label="Model"
      :rules="[requiredRule]"
      required
    ></v-text-field>
    <v-text-field
      v-model.lazy="car.year"
      label="Year"
      type="number"
      :rules="[requiredRule]"
      required
    ></v-text-field>
    <v-text-field
      v-model.lazy="car.pricePerDay"
      label="Price Per Day"
      type="number"
      :rules="[requiredRule]"
      required
    ></v-text-field>
    <v-text-field
      v-model.lazy="car.location"
      label="Location"
      :rules="[requiredRule]"
      required
    ></v-text-field>
    <v-text-field
      v-model.lazy="car.imageUrl"
      label="Image URL"
    ></v-text-field>
    <v-textarea
      v-model.lazy="car.description"
      label="Description"
    ></v-textarea>
    <v-btn type="submit">Submit</v-btn>
  </v-form>
</template>



<script>
export default {
  
  props: {
    submitForm: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      valid: true,
      car: {
        brand: '',
        model: '',
        year: null,
        pricePerDay: null,
        location: '',
        imageUrl: '',
        description: ''
      },
      requiredRule: (value) => !!value || "This field is required.",
    };
  },
  methods: {
    submitForm() {
  console.log('Form validation status:', this.valid);
  if (this.valid) {
    console.log('Submitting car form');
    console.log('Car data to be emitted:', this.car); 
    this.$emit("submit-form", this.car);
  }
},

    resetForm() {
      this.$refs.form.reset();
    },
  },
};
</script>
