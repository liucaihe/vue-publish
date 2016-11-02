<template>
    <div id="app">
        <el-row>
            <el-col :span="24">
                <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
                    <h2 class="el-menu-logo"><img class="el-menu-logo-img" src="./assets/logo.png"/></h2>
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-menu-item index="2">我的工作台</el-menu-item>
                    <el-menu-item index="3">订单管理</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4">
                <el-menu default-active="2" class="el-menu-vertical" theme="light">
                    <el-submenu index="1">
                        <template slot="title">导航一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">导航二</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">导航三</template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                        <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">导航四</template>
                        <el-menu-item index="4-1">选项1</el-menu-item>
                        <el-menu-item index="4-2">选项2</el-menu-item>
                        <el-menu-item index="4-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="5">导航五</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="20">333</el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style>

body {
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    overflow: auto;
}
.el-menu {
    border-radius: 0!important;
}

.el-menu-logo {
    padding: 0 20px;
    margin: 0;
    float: left;
    display: block;
    height: 60px;
}
.el-menu-logo-img {
    height: 40px;
    padding: 10px 0;
}

/*调整顶部导航*/
.el-menu--horizontal .el-menu-item{
    padding: 0 4px!important;
    margin: 0 16px!important;
    border-bottom-width: 4px !important;
}



.el-menu-vertical {
    height: 100%;
    min-height: 400px;
}
</style>
