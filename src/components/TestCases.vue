<template>
    <div class="test-cases">
        <div class="case-intro">
            <div class="case-label">TestCase</div>
            <transition-group name="test-cases" tag="div" class="test-cases-box">
                <TestCaseView
                        v-for="(testcase, index) in testcases"
                        :testcase="testcase"
                        :key="testcase.column"
                        @process-testcase="removeTestCase(testcase, index)"
                >
                    <i class="el-icon-remove-outline"></i>
                </TestCaseView>
            </transition-group>
        </div>
        <div class="case-intro">
            <div class="case-label">DropCase</div>
            <transition-group name="test-cases" tag="div" class="test-cases-box">
                <TestCaseView
                        v-for="(testcase, index) in drop_testcases"
                        :testcase="testcase"
                        drop="true"
                        :key="testcase.column"
                        @process-testcase="addTestCase(testcase, index)"
                >
                    <i class="el-icon-circle-plus-outline"></i>
                </TestCaseView>
            </transition-group>
        </div>
    </div>
</template>

<script>
    import TestCaseView from "./TestCaseView";
    import TestCase from '../js_module/testcase/testcase.js';

    export default {
        name: "TestCases",
        components: {
            TestCaseView
        },
        data() {
            return {
                testcases: [],
                drop_testcases: []
            }
        },
        created() {
            var pool = [
                    'url',
                    'pubdatepubdatepubdatepubdatepubdatepubdatepubdatepubdate',
                    'name',
                    'title',
                    'text',
                    'wenshu',
                    'tset1',
                    'youhaap'
                ];
            for (let key of pool) {
                this.testcases.push(new TestCase(key));
            }
        },
        methods: {
            removeTestCase(testcase, index){
                this.drop_testcases.push(testcase);
                this.testcases.splice(index, 1);
            },
            addTestCase(testcase, index){
                this.testcases.push(testcase);
                this.drop_testcases.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
    .test-cases {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .case-intro:hover .case-label:after {
        width: 100%;
    }

    .case-label {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        position: relative;
    }

    .case-label:before {
        content: '';
        position: absolute;
        display: block;
        height: 3px;
        width: 100%;
        background-color: gray;
        bottom: -3px;
    }

    .case-label:after {
        content: '';
        position: absolute;
        display: block;
        height: 3px;
        width: 0;
        transition: width 1.5s linear;
        background-image: linear-gradient(to right, #CE93D8, #FFCA28);
    }

    .test-cases-box {
        display: flex;
        flex-direction: column;
    }

    .test-cases-leave-active {
        transition:
                height 1s,
                margin-bottom 1s,
                opacity 1s,
                transform 1s;
    }

    .test-cases-enter, .test-cases-leave-to {
        opacity: 0;
        transform: translateX(-30px);
        height: 0;
        overflow: hidden;
        margin-bottom: 0;
    }
</style>
