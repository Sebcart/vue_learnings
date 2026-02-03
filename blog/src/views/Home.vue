<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPost" :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <button @click="showPost = !showPost">Toggle posts</button>
    <button @click="posts.pop()">Delete posts</button>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import getPosts from '@/composables/getPosts.js';
import { ref } from 'vue';

export default {
  name: 'Home',
  components: {
    PostList
  },
  setup() {
    const {posts, error, load} = getPosts()
    load()

    const showPost = ref(true)

    return {
      posts,
      showPost,
      error
    }
  },
}
</script>
<style>

</style>