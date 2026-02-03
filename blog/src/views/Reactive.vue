<template>
  <div class="home">
    <h2>Refs</h2>
    <p>{{ seba.name }} is {{ seba.age }} years old.</p>
    <button @click="updateSeba">Update seba</button>

    <h2>Reactive</h2>
    <p>{{ sebaTwo.name }} is {{ sebaTwo.age }} years old.</p>

    <button @click="updateSebaTwo">Update sebaTwo</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Home',
  setup() {
    const seba = ref ({name: 'Sebastian', age: 25 })
    const sebaTwo = reactive ({name: 'Mario', age: 5 })


    const updateSeba = () => {
      seba.value.name = 'Seb'
      seba.value.age = 45
    }

    const updateSebaTwo = () => {
      sebaTwo.name = 'Luigi'
      sebaTwo.age = 10
    }

    return {
      seba,
      updateSeba,
      sebaTwo,
      updateSebaTwo
    }
  },
}
</script>
