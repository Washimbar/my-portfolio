<!-- Home.vue -->
<template>
    <div>
        <h1>My Portfolio</h1>
        <div v-for="project in projects" :key="project.id">
            <router-link :to="'/project/' + project.id">
                <h2>{{ project.title }}</h2>
            </router-link>
        </div>
    </div>
</template>
  
<script>
import { projects } from '@/data/mockData'

export default {
    data() {
        return {
            projects,
        }
    },
}
</script>
  