<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      routes: []
    };
  },
  created() {
    this.getAllRoutes();
  },
  methods: {
    getAllRoutes() {
      this.$router.options.routes.forEach(route => {
        this.routes.push({
          name: route.name,
          path: route.path
        });
      });
    }
  }
};
</script>
