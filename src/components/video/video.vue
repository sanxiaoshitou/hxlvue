<template>
  <Content :style="{padding: '0 50px'}">
    <Breadcrumb :style="{margin: '20px 0'}">
      <BreadcrumbItem>Video</BreadcrumbItem>

    </Breadcrumb>
    <Card>
      <div style="overflow: hidden;" id="main">
        <!--卡片-->
        <div class="flatty" v-for="i in n" :key="i">
          <div class="card" @click="layerPay()">
            <img class="card__picture" :src="imgUrl()" alt="">
            <div class="card-infos">
              <h2 class="card__title">Example 1</h2>
              <p class="card__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, eius, asperiores. Incidunt sapiente
                est quae iure...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Content>
</template>

<script>
  import ViDetail from './video_details'

  export default {
    name: "main_video",
    data() {
      return {
        text: "",
        n: 16
      }
    },
    created() {
      this.load();
    },
    methods: {
      load() {


      },
      imgUrl() {//随机图片
        //图片引用 引发问题
        let imgArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "1.jpeg", "2.jpeg", "3.jpg", "4.jpg", "5.jpg",
          "item-1.png", "item-2.png", "item-3.png", "item-4.png", "item-5.png"];
        let n = Math.floor(Math.random() * (16 - 1));
        let imgUrl = "/static/img/" + imgArr[n];
        return imgUrl;

      },
      layerPay() {
        // this.$layer.msg("ddjjd");

        //1.iframe
        this.$layer.iframe({
          content: {
            content: ViDetail, //传递的组件对象
            parent: this,//当前的vue对象
            data: []//props
          },
          area: ['800px', '600px'],
          title:"视频播放",
        });
        //this.$parent 取父级

        // this.$layer.open({
        //   type: 2,
        //   title: false,
        //   area: ['400px', '360px'],
        //   shade: 0.8,
        //   closeBtn: 0,
        //   shadeClose: true,
        //   content: {
        //     content: ViDetail,
        //     parent: this,//当前的vue对象
        //     data: []//props
        //   }
        // });
      }

    },
    components: {
      ViDetail
    },
    mounted() {

    },
    updated() {

    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/styles/layui/layui/css/layui.css";

  .card {
    background: #fff;
    border-radius: 6px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, .1);
    display: flex;
    flex-direction: column;
    transition: box-shadow .2s ease-in-out;
  }

  .flatty {
    width: 412px;
    /*height: 400px;*/
    display: block;
    transform: translate3d(0px, 0px, 0px);
    opacity: 1;
    float: left;
    margin-left: 1.2%;
    margin-top: 1.2%;
  }

  .card img {
    height: 280px;
    max-width: 100%;
    transition: all 2s ease 0s;
    cursor: pointer;
  }

  .card img:hover {
    transform: scale(0.8);
    /*transition: all 2s ease-in-out 0s;*/
  }


  .card-infos {
    padding: 20px;
    background: #fff;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
</style>
