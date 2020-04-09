<template>
    <div class="test-case-col">
        <el-switch v-model="switch_flag" :active-text="text" @change="$emit('toggle-bool')" v-if="typeof value === 'boolean'"></el-switch>
        <div v-else>{{value}}</div>
    </div>
</template>

<script>
    export default {
        name: "TestCaseCol",
        props: ['value', 'text'],
        data(){
            return {
                switch_flag: true
            }
        }
    }
</script>

<style scoped>
    .test-case-col{
        text-align: center;
        line-height: 40px;
    }
</style>