<template>
  <div id="app">
    <header>
      <div class="title">
        <img src="./assets/heart.svg" alt ="Heart Icon"/>
        <h1>Hyrule Jobs</h1>
      </div>
      <p class="order">
        <button @click="handleClick('title')"> order by title</button>
        <button @click="handleClick('salary')"> order by salary</button>
        <button @click="handleClick('location')"> order by location</button>
      </p>
    </header>

    <JobList :jobs="job" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue';
import Job from './types/Job';
import OderTerm from './types/OderTerm';
import JobList from './components/JobList.vue';


export default defineComponent({
  name: 'App',
  components: {
    JobList,
  },
  setup() {
    const job = ref<Job[]>([
      { id: 1, title: 'farm worker', location: 'Hyrule', salary: 100000 },
      { id: 2, title: 'blacksmith', location: 'Kakariko Village', salary: 80000 },
      { id: 3, title: 'guard', location: 'Hyrule Castle', salary: 90000 },
      { id: 4, title: 'merchant', location: 'Market', salary: 70000 },
      { id: 5, title: 'adventurer', location: 'Various Locations', salary: 120000 },
    ])

    const order = ref<OderTerm>('title');
    const handleClick = (term: OderTerm) => {
      order.value = term;
    }

    return { job, handleClick, order };
  },
    // Using reactive and toRefs
    // const state = reactive({
    //   name: 'Link',
    //   age: 25 as string | number,
    // });

    // state.name = 'Mario';

    // return {...toRefs(state)};

    // Using ref
    // const name = ref('Link')
    // const age = ref<number |  string>(25)
    // age.value = 'Twenty Five'

    // return { name, age };
});
</script>

<style>
  header {
    text-align: center;
  }
  header .order {
    margin-top: 20px;
  }
  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  header .title{
    display: flex;
    justify-content: center;
  }
  header img {
    width: 60px;
    margin-right: 20px;
  }
  header h1 {
    font-size: 3em;
  }
</style>
