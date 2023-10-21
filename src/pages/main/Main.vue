<template>
    <div>
        <Home />
        <Projects />
    </div>
</template>

<script>
import Home from '../home/Home.vue'
import Projects from '../projects/Projects.vue'
export default {
    name: "MainPage",
    components: {
        Home,
        Projects,
    }
}
</script>

<style lang="scss" scoped></style>