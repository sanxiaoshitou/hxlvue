<style scoped lang="less">

    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        width: 170px;
        height: 30px;
        /*background: #5b6270;*/
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
        background-image: url("../../../static/img/logo.png");
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }

    .layout-footer-center {
        text-align: center;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" :active-name="shop" ref="shop">
                    <div class="layout-logo">
                        <!---->
                    </div>
                    <div class="layout-nav" style="width: 35%">
                        <router-link to="/home">
                            <MenuItem name="home">
                                <Icon type="md-home"></Icon>
                                首页
                            </MenuItem>
                        </router-link>
                        <router-link to="/article">
                            <MenuItem name="article">
                                <Icon type="ios-paper"></Icon>
                                文章
                            </MenuItem>
                        </router-link>
                        <router-link to="/video">
                            <MenuItem name="video">
                                <Icon type="logo-youtube"></Icon>
                                视频
                            </MenuItem>
                        </router-link>
                        <router-link to="/music">
                            <MenuItem name="music">
                                <Icon type="ios-paper"></Icon>
                                音乐
                            </MenuItem>
                        </router-link>
                        <router-link to="/library">
                          <MenuItem name="library">
                            <Icon type="ios-navigate"></Icon>
                                文库
                          </MenuItem>
                        </router-link>

                    </div>
                </Menu>
            </Header>
        </Layout>
    </div>
</template>
<script>
    export default {
        name: "main_header",
        data() {
            return {
                shop: "home"
            }
        },
        components: {},
        methods: {
        },
        created() {
            // //读取路径
            // let path = this.$route.path.slice(1);
            // // let menuType =  this.menuLoad(path);
            // this.menuType = path;
            // //
            // console.log(path);
            // // console.log("路由参数" + this.$route.params);

        },
        mounted() {
            //异步更新
            this.$nextTick(()=>{
                this.shop = this.$route.path.slice(1)
                this.$refs.shop.updateActiveName()
            })


        }


    }
</script>
