<template>
    <el-menu  mode="horizontal" background-color="#E4E7ED">
        <el-menu-item index="1">
            <router-link tag="div" to="/dataClear">
                <div >数据清洗</div>
            </router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <router-link tag="div" to="/dataTest">
                <div >数据测试</div>
            </router-link>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "HeaderRow"
    }
</script>

<style scoped>

</style>
