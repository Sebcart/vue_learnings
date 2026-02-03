<template>
  <div class="jobs">
    <h1>Jobs</h1>
    <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{name: 'JobDetails', params: { id: job.id } }">
          <h2>{{ job.title }}</h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      <p>Loading jobs...</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // jobs: [
            //     { id: 1, title: 'Frontend Developer', company: 'Tech Corp' },
            //     { id: 2, title: 'Backend Developer', company: 'Dev Solutions' },
            //     { id: 3, title: 'Full Stack Developer', company: 'Web Innovations' }
            // ]
            jobs: []
        };
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
           .then(res => res.json())
           .then(data => this.jobs = data)
           .catch(err => console.error('Error fetching jobs:', err))
    }
}
</script>

<style>
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}
.job h2:hover {
    background: #ddd;
}
.job a {
    text-decoration: none;
}
</style>