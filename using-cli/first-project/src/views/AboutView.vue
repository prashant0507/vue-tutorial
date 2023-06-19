<script setup>
import AboutChild from './AboutChild.vue'
</script>

<template>
  <div class="about">
    <div class="header">
      <h1>Variable</h1>
      <p>{{ mobile }}</p>
      <!--<p>{{mobile = 8888}}</p>-->
      <!-- It's valid -->
      <p>{{ 10 + 10 }}</p>
      <p>{{ email }}</p>

      <h1>Method</h1>
      <p>{{ getName(27) }}</p>
      <p>{{ getData() }} - {{ getData().name }} - {{ getData().email }}</p>
      <button @click="updateData('xyz', 'xyv@gmail.com')">Update Data</button>

      <h1>Two Way Binding and Get Value from Form</h1>
      <input type="text" v-model="city" placeholder="city" />
      <h5>{{ city }}</h5>

      <br />

      <input type="text" v-model="colony" placeholder="colony" />
      <h5>{{ colony }}</h5>

      <br />

      <input type="checkbox" v-model="hobby" value="dance" /> Dance
      <input type="checkbox" v-model="hobby" value="sing" /> sing
      <input type="checkbox" v-model="hobby" value="cricket" /> Cricket
      <h5>{{ hobby }}</h5>

      <br />

      <input type="radio" v-model="gender" name="gender" value="male" /> Male
      <input type="radio" v-model="gender" name="gender" value="female" /> Female
      <h5>{{ gender }}</h5>

      <br />

      <p>option is integrate with <b>v-for</b></p>
      <select v-model="country">
        <!--value is containing variable thats why we are using :value-->
        <!--if we will not use :value, in getFormValue() method, we will get option.val instead of actual value-->
        <option v-for="option in options" :value="option.val">{{option.name}}</option>
      </select>

      <br />

      <button @click="getFormValue()">Get Value</button>
      
      <br />
      
      <h1>Conditional Rendering (if, else-if, else)</h1>
      <p v-if="gender == 'male'">show the male</p>
      <p v-else-if="gender == 'female'">show the female</p>
      <p v-else>No gender is selectd</p>

      <br />
      
      <h1>for</h1>
      <div v-for="(value, key) in profile">
        {{key}}-{{value}}
      </div>

      <h1>parent to child</h1>
      <AboutChild name="prashant shrivastava" city="Gwalior" :parentFun="parentFun" :profile="profile" />

    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      profile:{
        name:'prashant',
        age:27,
        city:'Gwalior'
      },
      city: '',
      colony: '',
      hobby: [],
      gender:'',
      country:'',
      options:[
        {
          val:'ind',
          name:'India'
        },
        {
          val:'us',
          name:'US'
        },
        {
          val:'uk',
          name:'UK'
        }
      ],
      email: 'pra98935@gmail.com',
      mobile: 969122456,
      obj: {
        name: 'prashant',
        email: 'pra98935@gmail.com'
      }
    }
  },
  methods: {
    getName: function (age) {
      return 'Prashant' + ' ' + age
    },
    getData() {
      return this.obj
    },
    updateData(name, email) {
      this.obj.name = name
      this.obj.email = email
      return this.obj
    },
    getFormValue() {
      console.log('get form value city', this.city, this.colony)
      console.log('get form value colony', this.colony)
      console.log('get form value hobby', this.hobby)
      console.log('get form value Gender', this.gender)
      console.log('get form value Country', this.country)
    },
    parentFun(name='default') {
      alert("parent function called=>>"+name);
    }
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

h1 {
  color: red;
}
</style>
