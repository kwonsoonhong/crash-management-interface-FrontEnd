<template>
  <div>
    <b-navbar type="is-black" fixed-top shadow >
      <template slot="brand">
        <b-navbar-item>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="/">
          Home
        </b-navbar-item>
        <b-navbar-item href="/crash">
          Crash
        </b-navbar-item>
      </template>
    </b-navbar>
    <br />
    <title>PEL crash Dashboard</title>
    <!-- Main Sector -->
    <div class="container is-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
