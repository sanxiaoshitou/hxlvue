<template>
    <Content :style="{padding: '0 50px'}">

        <Breadcrumb :style="{margin: '20px 0'}">
            <BreadcrumbItem>Article</BreadcrumbItem>
            <!--<BreadcrumbItem>Components</BreadcrumbItem>-->
            <!--<BreadcrumbItem>Layout</BreadcrumbItem>-->
        </Breadcrumb>
        <Tabs value="name1">
            <TabPane label="前端早报" name="name1">
                <CaiBaoList></CaiBaoList>
            </TabPane>
            <TabPane label="极客文章" name="name2">
              <YiBaiList></YiBaiList>
            </TabPane>
            <!--<TabPane label="标签三" name="name3">-->

                <!--<Card>-->
                    <!--<div style="min-height: 680px;">-->
                        <!--音乐3-->
                    <!--</div>-->
                <!--</Card>-->
            <!--</TabPane>-->
        </Tabs>

    </Content>
</template>

<script>
    import YiBaiList from '../../components/article/list/yibai_list'
    import CaiBaoList from '../../components/article/list/caibao_list'
    export default {
        name: "main_article",
        data() {
            return {}
        },
        created() {
        },
        methods: {},
        components: {
            YiBaiList,
            CaiBaoList
        }
    }
</script>

<style scoped>
    @import "../../assets/styles/layui/global.css";
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
