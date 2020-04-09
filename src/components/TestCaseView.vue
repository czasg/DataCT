<template>
    <el-row tag="div" class="test-case">
        <el-col :span="8">
            <slot name="col1">
                <TestCaseCol :value="testcase.key"/>
            </slot>
        </el-col>
        <el-col :span="8">
            <slot name="col2">
                <TestCaseCol :value="testcase.checkNone" @toggle-bool="testcase.toggleNone()" text="checkNone"/>
            </slot>
        </el-col>
        <el-col :span="8">
            <slot name="col3">
                <TestCaseCol :value="testcase.checkRepeat" @toggle-bool="testcase.toggleRepeat()" text="checkRepeat"/>
            </slot>
        </el-col>
    </el-row>
</template>

<script>
    import TestCaseCol from "./TestCaseCol";

    export default {
        name: "TestCase",
        props: {
            testcase: Object
        },
        components: {
            TestCaseCol
        }
    }
</script>

<style scoped>
    .test-case {
        width: 800px;
        height: 40px;
        background-image: linear-gradient(to right, rgba(225, 245, 254, .8), rgba(243, 229, 245, .8));
        margin-bottom: 10px;
        border-radius: 10px;
    }
</style>
