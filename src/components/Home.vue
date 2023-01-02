<template>
    <div class="container">
        <div class="side-one">
            <h1>Hello!</h1>
            <p>Im Jennifer Flores</p>
            <p>I'am a Web Developer based in the Philippines</p>
            <button>Show More</button>
        </div>
        <div class="side-two">
            <img src="../assets/photos/PersonalWeb.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeVue',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
    margin: 0px 0px 0px 60px;
    padding: 0px 0px 0px 30px;
    border: 1px solid red;
    height: 85%;
    width: 90%;
    display: flex;
    text-align: left;
    align-items: flex-end;
    justify-content: left;

    .side-one{
        border: 1px solid rgb(46, 7, 7);
        margin-bottom: 10%;
        h1{
            color:#558E96;
            font-size: 40px;
            font-family: 'Open Sans', 'Inter', sans-serif;
        }

        p{
            color: black;
            font-size: 20px;
        }

        button{
            border: none;
            background-color: #558E96;
            width: 9rem;
            height: 2.5rem;
            border-radius: 15px;
            color: #fff;
            font-size: 14px;
        }
    }

    .side-two{
        border: 1px solid red;
        padding-left: 200px;
        img{
            height: 600px;
            width: 500px;
        }
    }
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
