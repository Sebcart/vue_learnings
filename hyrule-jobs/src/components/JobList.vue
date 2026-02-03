<template>
<div class="job-list">
  <p>Order by: {{ order }}</p>
  <transition-group name="list" tag="ul">
    <li v-for="job in orderedJobs" :key="job.id">
      <h2>{{ job.title }} in {{ job.location }}</h2>
      <div class="salary">
        <img src="@/assets/rupee.svg" alt="Rupee Icon" />
        <p>{{  job.salary }} rupees</p>
      </div>
      <div class="description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magni ipsa saepe a iure cumque ipsam dignissimos atque consectetur distinctio minus adipisci, nihil neque perferendis maiores sapiente explicabo ullam? Dolores dolorum ipsam natus modi at repellat praesentium laboriosam blanditiis velit, atque recusandae ea fugit commodi voluptatem numquam perspiciatis quis obcaecati molestias quam totam. Hic, nihil neque. Deserunt libero repudiandae impedit nulla magnam eum vitae aperiam fugiat qui nam provident eaque amet rerum recusandae odio ex incidunt, eligendi voluptatum, nisi quia explicabo modi similique. Veniam voluptate commodi non quis. Ut eaque excepturi suscipit dolor dolore numquam vero voluptatum laboriosam obcaecati labore.</p>
      </div>
    </li>
  </transition-group>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import Job from '@/types/Job';
import OderTerm from '@/types/OderTerm';

export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>
    },
    order: {
      required: true,
      type: String as PropType<OderTerm>
    }
  },
  setup(props) {
    const orderedJobs = computed(() =>{
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1
      });
    })
    return { orderedJobs }
  }
})
</script>


<style scoped>
  .job-list {
    max-width: 960px;
    margin: 40px auto;
  }
  .job-list ul {
    padding: 0;
  }
  .job-list li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
  }
  .job-list h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
  }
  .salary {
    display: flex;
  }
  .salary img {
    width: 30px;
  }
  .salary p {
    color: #17bf66;
    font-weight: bold;
    margin: 10px 4px;
  }
  .list-move {
    transition: all 1s;
  }
</style>