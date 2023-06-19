<template>
  <!--https://blog.logrocket.com/using-v-model-vue-3-build-complex-forms/ -->
  <div class="forms">
    <h1>Forms</h1>
    <form @submit.prevent="submitForm">
      <input type="email" placeholder="EMAIL" v-model="form.email" /> => {{ form.email }}
      <br />
      <input type="password" placeholder="PASSWORD" v-model="form.password" /> =>
      {{ form.password }}
      <br />
      <input type="checkbox" v-model="form.hobby" value="dance" />Dance
      <input type="checkbox" v-model="form.hobby" value="sport" />sport
      <input type="checkbox" v-model="form.hobby" value="gym" />gym => {{ form.hobby }}
      <br />
      <input type="radio" name="gender" v-model="form.gender" value="male" />Male
      <input type="radio" name="gender" v-model="form.gender" value="female" />Female =>
      {{ form.gender }}
      <br />
      <select v-model="form.country">
        <option v-for="cl in countryList" :key="cl" :value="cl">{{ cl }}</option>
      </select>
      => {{ form.country }}
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  methods: {
      submitForm: function(){
          console.log("form data=>>>", this.form)
      }
  },
  setup() {
    const form = reactive({
      email: '',
      password: '',
      hobby: [],
      gender: '',
      country: ''
    })

    const countryList = ['IN', 'US', 'UK']

    return {
      form,
      countryList
    }
  }
}
</script>
