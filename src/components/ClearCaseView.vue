<template>
    <el-row tag="div" class="test-case">
        <el-col :span="5">
            <slot name="col1">
                <Col :value="clearcase.column"/>
            </slot>
        </el-col>
        <div class="process-btn" @click="$emit('process-testcase')">
            <slot></slot>
        </div>
    </el-row>
</template>

<script>
    import Col from "./Col";
    // import ColSwitch from "./ColSwitch";
    // import ColInput from "./ColInput";

    export default {
        name: "ClearCaseView",
        props: {
            clearcase: Object
        },
        components: {
            Col,
            // ColSwitch,
            // ColInput
        }
    }
</script>

<style scoped>

</style>