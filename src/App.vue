<template>
  <div id="app">
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="jump" >
      <el-submenu index="1">
        <template slot="title">中国疫情地图</template>
        <el-menu-item index="1-1">现存确诊</el-menu-item>
        <el-menu-item index="1-2">累计确诊</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">全球疫情地图</template>
        <el-menu-item index="2-1">现存确诊</el-menu-item>
        <el-menu-item index="2-2">累计确诊</el-menu-item>
      </el-submenu>
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
      if (key === '1-2'){
        this.$router.push('/chinamap')
      }else if (key === '2-2'){
        this.$router.push('/globalmap')
      }else if (key ==='1-1'){
        this.$router.push('/chinamap1')
      }else if (key ==='2-1'){
        this.$router.push('/globalmap1')
      }
    }
  }
}
</script>

<style>

</style>
