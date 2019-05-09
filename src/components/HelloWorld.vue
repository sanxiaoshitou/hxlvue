<template>
  <div class="hello">
    <Header></Header>
    <!--内容-->
    <router-view>

    </router-view>

    <!--尾部-->
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/main/header'
  import Footer from '../components/main/footer'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Header,
      Footer
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .index {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    text-align: center;

    h1 {
      height: 150px;

      img {
        height: 100%;
      }
    }

    h2 {
      color: #666;
      margin-bottom: 200px;

      p {
        margin: 0 0 50px;
      }
    }

    .ivu-row-flex {
      height: 100%;
    }
  }
</style>
