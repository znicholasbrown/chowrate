<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html, body {
  background-color: #333;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #DC7633;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #DC7633;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
