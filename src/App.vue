<template>
  <div id="app">
    <div id="nav" class="padding-top-5px padding-bottom-10px">
      <router-link class="padding-right-15px" to="/">Home</router-link>
      <router-link class="padding-right-15px" to="/about">About</router-link>
      <router-link class="padding-right-15px" to="/notes">Notes</router-link>
      <router-link class="padding-right-15px" to="/tasks">Tasks</router-link>
      <router-link class="padding-right-15px" to="/calendar">Calendar</router-link>
      <router-link class="padding-right-15px" to="/more">More</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  text-align: right;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.padding-left-5px {
  padding-left: 5px;
}
.padding-right-5px {
  padding-right: 5px;
}
.padding-top-5px {
  padding-top: 5px;
}
.padding-bottom-5px {
  padding-bottom: 5px;
}

.padding-left-10px {
  padding-left: 10px;
}
.padding-right-10px {
  padding-right: 10px;
}
.padding-top-10px {
  padding-top: 10px;
}
.padding-bottom-10px {
  padding-bottom: 10px;
}

.padding-left-15px {
  padding-left: 15px;
}
.padding-right-15px {
  padding-right: 15px;
}
.padding-top-15px {
  padding-top: 15px;
}
.padding-bottom-15px {
  padding-bottom: 15px;
}
</style>
