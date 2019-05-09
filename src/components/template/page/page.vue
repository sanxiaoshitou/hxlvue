<template>
    <Page :total="dataCount"  show-total />
</template>

<script>
    export default {
        name: "page",
        props:['dataCount','pageSize','dataUrl'],//总数、分页数、刷新链接地址
        data() {
            return {
                dataList:[],//数据
            }
        },
        created() {

        },
        methods:{
            handlePage(){//刷新操作

            }


        }

    }
</script>

<style scoped>

</style>
