<template>
    <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
            <BreadcrumbItem>前端早报</BreadcrumbItem>
        </Breadcrumb>
        <Card>
            <div style="overflow: hidden;">
                <section class="post-container" style="width:1200px;margin: auto; padding-top:24px;#fff;clear:both;">
                    <div v-html="text" class="main">{{text}}</div>
                </section>

            </div>
        </Card>
    </Content>
</template>

<script>
    import {caiBaoDetails} from '../../../api/data'
    export default {
        name: "cb_details",
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
                caiBaoDetails(map).then(res => {
                    if (res.success === false) {
                        this.error = true;
                        return;
                    }
                    let data = res.data;
                    this.text = res.data;
                })

            }
        },
    }
</script>

<style>
    @import "../../../assets/styles/zaobao/css1.css";

    .entry-meta{
        display:none;
    }
    .entry-header div:nth-child(2){
        display:none;
    }
    .entry-details{
        display:none;
    }
    .relatedposts{
        display:none;
    }
    .btn-group,.vote-group{
        display:none;
    }
    h2,h3,h4,h5,p,li{
        text-align:left;
    }
</style>
