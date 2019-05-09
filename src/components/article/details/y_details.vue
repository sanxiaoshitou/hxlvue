<template>
    <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
            <BreadcrumbItem>极客文章</BreadcrumbItem>
        </Breadcrumb>
        <Card>
            <div style="overflow: hidden;">
                <section class="post-container" style="width:1200px;margin: auto; padding-top:24px;#fff;clear:both;">
                    <div v-html="text" class="main">{{text}}</div>
                </section>

                <Side></Side>
            </div>
        </Card>
    </Content>
</template>

<script>
    import {yiBaiDetails,test} from '../../../api/data'
    import Side from '../../main/side'
    export default {
        name: "y_details",
        props:{

        },
        data() {
            return {
                msgUrl: this.$route.query.msgUrl,
                text:""
            }
        },
        created() {
            this.load();
        },
        methods: {
            load() {
                let msgUrl = this.msgUrl;
                let map ={msgUrl:msgUrl};
                console.log(map);
                yiBaiDetails(map).then(res => {
                    if (res.success === false) {
                        this.error = true;
                        return;
                    }
                    console.log(res);
                    let data = res.data;
                    this.text = data;
                })

            }
        },
        components: {
           Side
        },
    }
</script>


<style>
    /***
      获取 易百 样式 直接引用
     */
    @import "../../../assets/styles/yibai/css1.css";
    @import "../../../assets/styles/yibai/css2.css";
    @import "../../../assets/styles/yibai/css3.css";

    /**删除 不需要**/
    .right-post{
        display: none;
    }
    .article-title ~ div{
        display: none;
    }
    .post-content ~ div{
        display: none;
    }
    pre,p{
        text-align:left;
    }

</style>
