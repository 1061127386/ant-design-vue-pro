<!--
 * @Author       : 张毅哲
 * @Date         : 2020-11-07 23:09:13
 * @LastEditors  : 张毅哲
 * @FilePath     : \ant-design-vue-pro\src\components\SettingDrawer\index.vue
 * @Description  : 描述
-->
<template>
  <div>
    <a-drawer
      title="Basic Drawer --这是标题"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
      width="300px"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
          <div>
            <h2>整体风格定制</h2>
            <a-radio-group :value="$route.query.navTheme || 'dark'" @change="(e)=>handleSettingChange('navTheme',e.target.value)">
              <a-radio value="dark">
                黑色
              </a-radio>
              <a-radio value="light">
                白色
              </a-radio>
            </a-radio-group>
            <h2>导航模式</h2>
            <a-radio-group :value="$route.query.navLayout || 'left'" @change="(e)=>handleSettingChange('navLayout',e.target.value)">
              <a-radio value="left">
                左侧
              </a-radio>
              <a-radio value="top">
                顶部
              </a-radio>
            </a-radio-group>
          </div>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      navTheme: "dark",
      navLayout: "left",
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log("visible", val);
    },
    // showDrawer() {
    //   this.visible = true;
    // },
    onClose() {
      this.visible = false;
    },
    handleSettingChange(type,value){
      this.$router.push({
        query:{
          ...this.$route.query,
          [type]:value
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
.handle {
  position: absolute;
  top: 240px;
  /* 定位到盒子左边缘外 */
  right: 300px;
  width: 48px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  background-color: #1890ff;
  color: #fff;
  font-size: 20px;
  border-radius: 3px 0 0 3px;
}
</style>
