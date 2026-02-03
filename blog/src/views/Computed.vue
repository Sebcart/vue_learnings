<template>
  <div class="home">
    <input type="text" v-model="search" />
    <p>Searching term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  setup() {
    const search = ref('')
    const names = ref(['Seba', 'Mario', 'Luigi', 'Peach', 'Yoshi', 'Toad', 'Bowser', 'Wario'])

    watch(search, () => {
      console.log('Search term changed to:', search.value)
    })

    watchEffect(() => {
      console.log('Current search term is:', search.value)
    })

    const matchingNames = computed( () => {
      return names.value.filter(name => name.includes(search.value))
    })

    return {
      names,
      search,
      matchingNames
    }
  },
}
</script>
