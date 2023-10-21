<!-- ProjectDetail.vue -->
<template>
    <div>
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <img :src="require(`@/assets/${project.image}`)" alt="Project Image" />
    </div>
</template>
  
<script>
import { projects } from '@/mockData'

export default {
    props: ['id'],
    computed: {
        project() {
            return projects.find(project => project.id === parseInt(this.id))
        },
    },
}
</script>
  