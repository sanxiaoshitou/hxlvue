<template>
  <Content :style="{padding: '0 50px'}">
    <Breadcrumb :style="{margin: '20px 0'}">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <!--<BreadcrumbItem>Components</BreadcrumbItem>-->
      <!--<BreadcrumbItem>Layout</BreadcrumbItem>-->
    </Breadcrumb>
    <Card>
      <div style="min-height: 1600px;">



        <!--文章主体-->
        <div class="article-main">
          <Carousel autoplay v-model="value2" loop id="carLoop">
            <CarouselItem>
              <div class="demo-carousel">
                <img src="../../../static/img/1.jpeg">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="../../../static/img/2.jpeg">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="../../../static/img/3.jpg">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="../../../static/img/4.jpg">
              </div>
            </CarouselItem>
          </Carousel>


          <h2>
            文章推荐
          </h2>



          <div class="article-list">
            <figure><img src="../../../static/img/01.jpg" class="layImg"></figure>
            <ul>
              <h3>
                <a href="article_details.html">住在手机里的朋友</a>
              </h3>
              <p>现在跨界联姻，时尚、汽车以及运动品牌联合手机制造商联合发布手机产品在行业里已经不再新鲜，上周我们给大家报道过著名手表制造商瑞士泰格·豪雅（Tag Heuer）
                联合法国的手机制造商Modelabs发布的一款奢华手机的部分谍照，而近日该手机终于被正式发布了...</p>
              <p class="autor">
                <span class="lm f_l"><a href="#">个人博客</a></span>
                <span class="dtime f_l">2014-02-19</span>
                <span class="viewnum f_r">浏览（<a href="#">459</a>）</span>
                <span class="pingl f_r">评论（<a href="#">30</a>）</span></p>
            </ul>
          </div>

          <div class="article-list">
            <figure><img src="../../../static/img/02.jpg" class="layImg"></figure>
            <ul>
              <h3>
                <a href="article_details.html">住在手机里的朋友</a>
              </h3>
              <p>现在跨界联姻，时尚、汽车以及运动品牌联合手机制造商联合发布手机产品在行业里已经不再新鲜，上周我们给大家报道过著名手表制造商瑞士泰格·豪雅（Tag Heuer）
                联合法国的手机制造商Modelabs发布的一款奢华手机的部分谍照，而近日该手机终于被正式发布了...</p>
              <p class="autor">
                <span class="lm f_l"><a href="#">个人博客</a></span>
                <span class="dtime f_l">2014-02-19</span>
                <span class="viewnum f_r">浏览（<a href="#">459</a>）</span>
                <span class="pingl f_r">评论（<a href="#">30</a>）</span></p>
            </ul>
          </div>
          <br>
          <br>
          <!--<Page v-bind:dataCount="120"></Page>-->
        </div>

        <!--侧栏-->
        <side></side>
      </div>
    </Card>
  </Content>
</template>

<script>
  import Page from '../../components/template/page/page'
  import Side from '../main/side'

  export default {
    name: "main_home",
    data() {
      return {
        value2: 0
      }
    },
    components: {
      Page,
      Side
    }
  }
</script>

<style scoped>
  @import "../../assets/styles/layui/global.css";
  /*@import "../../styles/layui/layui/css/layui.css";*/
  /*@import "../../styles/layui/layui/css/modules/layer/default/layer.css";*/
  /*@import "../../styles/layui/layui/css/layui.css";*/
  /**文章列表 主**/
  .article-main {
    /*margin: 15px 0;*/
    width: 60%;
    float: left;
    margin-left: 8%;
    /*margin-left: 10%;*/

  }

  .layui-col-md4 {
    float: right;
    width: 20%;
    margin-right: 8%;
    margin-top: 24px;
  }

  a {
    color: #333;
    text-decoration: none;
    width: 120px;
    height: 60px;
  }


  #carLoop{
    margin-left: 5%;
    width: 90%;
  }

  .demo-carousel{
    height: 380px;
  }

  .demo-carousel img{
    max-width: 100%;
  }

</style>
