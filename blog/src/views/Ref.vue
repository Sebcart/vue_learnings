<template>
  <div class="home">
    <p>My name is {{ name }} and my age is {{ age }}.</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    const name = ref('Mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'Luigi'
      age.value = 28
      console.log('Button clicked!')
    }

    return {
      name,
      age,
      handleClick,
    }
  },
}
</script>
