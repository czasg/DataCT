<template>
    <el-row tag="div" class="test-case" :class="[drop ? dropClass: activeClass]">
        <el-col :span="5">
            <slot name="col1">
                <Col :value="testcase.column"/>
            </slot>
        </el-col>
        <el-col :span="4">
            <slot name="col2">
                <ColSwitch
                        :value="testcase.checkNone"
                        @toggle-bool="testcase.toggleNone()"
                        text="isNone"
                />
            </slot>
        </el-col>
        <el-col :span="4">
            <slot name="col3">
                <ColSwitch
                        :value="testcase.checkRepeat"
                        @toggle-bool="testcase.toggleRepeat()"
                        text="isRepeat"
                />
            </slot>
        </el-col>
        <el-col :span="4">
            <slot name="col4">
                <ColSwitch
                        :value="testcase.checkDate"
                        @toggle-bool="testcase.toggleDate()"
                        text="isDate"
                />
            </slot>
        </el-col>
        <el-col :span="7">
            <slot name="col5">
                <ColInput
                        :values="testcase.checkContain"
                        text="in"
                        @set-rule="(args) => testcase.addContain.call(testcase, args)"
                />
            </slot>
        </el-col>
        <div class="process-btn" @click="$emit('process-testcase')">
            <slot></slot>
        </div>
    </el-row>
</template>

<script>
    import Col from "./Col";
    import ColSwitch from "./ColSwitch";
    import ColInput from "./ColInput";

    export default {
        name: "TestCase",
        props: {
            testcase: Object,
            drop: String
        },
        data() {
            return {
                dropClass: 'drop-class',
                activeClass: 'active-class'
            }
        },
        components: {
            Col,
            ColSwitch,
            ColInput
        }
    }
</script>

<style scoped>
    .test-case {
        width: 800px;
        height: 40px;
        margin-bottom: 10px;
        border-radius: 10px;
        box-sizing: border-box;
        position: relative;
        transition: all 1s;
    }

    .active-class {
        background-image: linear-gradient(to right, rgba(225, 245, 254, .8), rgba(243, 229, 245, .8));
    }

    .drop-class {
        background-color: rgba(10, 10, 10, .2);
    }

    .process-btn {
        position: absolute;
        right: -42px;
        line-height: 40px;
        height: 40px;
        width: 40px;
        text-align: center;
        border-radius: 50%;
        cursor: pointer;
    }

    .process-btn:hover {
        background-color: lightgoldenrodyellow;
    }
</style>
