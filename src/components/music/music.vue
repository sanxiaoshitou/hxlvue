<template>
  <Content :style="{padding: '0 50px'}">
    <Breadcrumb :style="{margin: '20px 0'}">
      <BreadcrumbItem>Music</BreadcrumbItem>
      <!--<BreadcrumbItem>Components</BreadcrumbItem>-->
      <!--<BreadcrumbItem>Layout</BreadcrumbItem>-->
    </Breadcrumb>

    <Tabs value="name1">
      <TabPane label="标签一" name="name1">
        <Card>
          <div style="min-height: 680px;">

            音乐
          </div>
        </Card>
      </TabPane>
      <TabPane label="标签二" name="name2">

        <Card>
          <div style="min-height: 680px;">
            音乐2
          </div>
        </Card>
      </TabPane>
      <TabPane label="标签三" name="name3">

        <Card>
          <div style="min-height: 680px;">
            音乐3
          </div>
        </Card>
      </TabPane>
    </Tabs>

  </Content>
</template>

<script>
  export default {
    name: "main_music"
  }
</script>

<style scoped>
  @import "../../assets/styles/layui/global.css";
</style>
