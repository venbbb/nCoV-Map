<template>
  <div id="app">
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="jump" >
      <el-menu-item index="1">中国疫情地图</el-menu-item>
      <el-menu-item index="2">全球疫情地图</el-menu-item>
      <el-menu-item index="3">中国疫情趋势</el-menu-item>
      <el-menu-item index="4">全球疫情趋势</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods:{
    jump(key){
      if (key === '1'){
        this.$router.push('/chinamap')
      }else if (key === '2'){
        this.$router.push('/chinacurrent')
      }else if (key === '3'){
        this.$router.push('/globalmap')
      }else if (key === '4'){
        this.$router.push('/globalcurrent')
      }

    }
  }
}
</script>

<style>

</style>
