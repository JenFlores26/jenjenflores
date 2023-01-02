<template>
  <!-- <nav class="top-bar-nav">
    <router-link to="/" class="top-bar-link"><i class="icofont-spoon-and-fork">Home</i></router-link>
    <router-link to="/about" class="top-bar-link"><i class="icofont-spoon-and-fork">About Me</i></router-link>
  </nav> -->
  <div class="section1" id="home">
    <nav class="top-nav">
      <div class="header">
        <header>JenFlores</header>
        <p></p>
      </div>
      <div class="nav">
        <router-link to="/" class="top-bar-link">Home</router-link>
        <router-link to="/about" class="top-bar-link">About Me</router-link>
        <router-link to="/works" class="top-bar-link">Works</router-link>
        <router-link to="/contact" class="top-bar-link">Contact</router-link>
      </div>
    </nav>
    <hr class="style-one"/>
    <Home/>
  </div>
  <router-view/>
</template>

<script>
import Home from '@/components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}

body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #96c3f0;
}
.section1{
  width: 100%;
  height: 750px;
  background-image: url('../src/assets/photos/JF.png');
  background-size: cover;

  .top-nav{
    padding: 60px 60px 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header{
      display: flex;

      header{
      font-size: 40px;
      font-family: Inter, sans-serif;
      color: #151515;
      font-weight: 600;
      }

      p{
        width: 7px;
        height: 7px;
        background-color: #558E96;
        margin: 30px 0px 0px 4px;
        border-radius: 50%;
        font-size: 50px;
      }
    }

    .nav{
      width: 400px;
      display: flex;
      font-size: 18px;
      justify-content: space-around;
      font-family: 'Inter', sans-serif;

      a{
        text-decoration: none !important;
      }
    }
  }

  .style-one{
    border: 0;
    height: 1px;
    background: #333;
    margin: 10px 50px 0px 50px;
    background-image: linear-gradient(to right, #61aab4, #558E96, #ccc);
  }

}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
