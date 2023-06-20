<template>
  <!--https://blog.logrocket.com/using-v-model-vue-3-build-complex-forms/ -->
  <div class="forms">
    <h1>Forms and Validation</h1>
    
    <form @submit.prevent="submitForm">
      <input type="email" placeholder="EMAIL" v-model="form.email" /> => {{ form.email }}
      <span class="error" v-if="isSubmitButtonClicked== true && form.email == ''">Email is Required</span>
      <br />

      <input type="password" placeholder="PASSWORD" v-model="form.password" /> => {{ form.password }}
      <span class="error" v-if="isSubmitButtonClicked== true && form.password == ''">Password is Required</span>
      <br />

      <input type="checkbox" v-model="form.hobby" value="dance" />Dance
      <input type="checkbox" v-model="form.hobby" value="sport" />sport
      <input type="checkbox" v-model="form.hobby" value="gym" />gym => {{ form.hobby }}
      <span class="error" v-if="isSubmitButtonClicked== true && form.hobby.length == 0">Hobby is Required</span>
      <br />

      <input type="radio" name="gender" v-model="form.gender" value="male" />Male
      <input type="radio" name="gender" v-model="form.gender" value="female" />Female => {{ form.gender }}
      <span class="error" v-if="isSubmitButtonClicked== true && form.gender == ''">Gender is Required</span>
      <br />

      <select v-model="form.country">
        <option v-for="cl in countryList" :key="cl" :value="cl">{{ cl }}</option>
      </select>
      => {{ form.country }}
      <span class="error" v-if="isSubmitButtonClicked== true && form.country == ''">Country is Required</span>
      <br />

      <button type="submit">Submit</button>
      <br/>
      <a v-bind:href="vueLink" target="_blank">VUE LINK</a> ==> v-bind:href == :href
      <br/>
      <p>{{ this.form }}</p>
    </form>

    <h2>Form Data</h2>
    <ul>
    <li v-for="(value, key) in form" :key="key">
    {{key}} - {{value}}
    </li>
    </ul>

  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  data() {
    return {
      vueLink:'https://vuejs.org/',
      errors:[],
      isSubmitButtonClicked: false
    }
  },
  methods: {
    submitForm: function () {
      this.errors = [];
      this.isSubmitButtonClicked = true;
      console.log('form data=>>>', this.form);

      for(let item in this.form){
        if(this.form[item] == '' || this.form[item].length == 0){
          this.errors.push(item);
        }
      }

      if(this.errors.length == 0){
        alert("form submitted");
      }else{
        alert("form is not valid");
      }

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

<style scoped>
.error {
  color:red;
}
</style>
