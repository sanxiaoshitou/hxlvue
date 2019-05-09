<template>
    <Card>
        <div style="overflow: hidden;">

            <!--文章主体-->
            <div class="article-main" id="main">
                <h2>
                    文章推荐
                </h2>

                <div class="article-list" v-for="(article, i) in dataList" :key="i">
                    <figure><img :src="imgUrl()" class="layImg"></figure>
                    <ul>
                        <h3>
                            <router-link tag="a" :to="{path:'/yDetails',query:{msgUrl:article.msgUrl}}">
                               {{article.title}}
                            </router-link>

                        </h3>
                        <p class="autor">
                            <span class="lm f_l"><a href="https://www.yiibai.com">极客文章</a></span>
                            <span class="dtime f_l">{{article.dateStr}}</span>
                            <span class="dtime f_l">{{article.loveNum}}</span>
                        </p>
                    </ul>
                </div>
                <br>
                <br>
                <!--分页-->
                <Page :total="dataCount" :current="pageNum" :page-size="18" @on-change="load" show-total />
            </div>
            <!--侧栏-->
            <Side></Side>
        </div>
    </Card>
</template>

<script>
    import {yiBaiList} from '../../../api/data'
    import Side from '../../main/side'
    export default {
        name: "yb_list",
        components: {
            Side
        },
        data() {
            return {
                dataList: [],//数据
                dataCount: 0,//总数
                pageNum: 1,
                pageSize: 18,//条数
            }
        },
        created() {
            this.load(1);
        },
        methods: {
            load(value) {
                let pageNum = value;
                let map ={pageNum:pageNum};
                yiBaiList(map).then(res => {
                    if (res.success === false) {
                        this.error = true;
                        return;
                    }
                    let data = res.data;
                    this.dataList = res.data.records;
                    this.pageNum = pageNum;
                    this.dataCount = data.total;
                })
            },
            imgUrl(){//随机图片
                //图片引用 引发问题
                let imgArr = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","1.jpeg","2.jpeg","3.jpg","4.jpg","5.jpeg"];
                let n = Math.floor(Math.random() * (11-1));
                let imgUrl = "/static/img/"+imgArr[n];
                return imgUrl;

            }
        },
    }
</script>

<style>
    @import "../../../assets/styles/layui/global.css";
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
</style>
