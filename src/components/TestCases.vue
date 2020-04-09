<template>
    <div class="test-cases">
        <el-button @click="startTest" round>Start</el-button>
        <div class="case-intro">
            <div class="case-label">TestCase</div>
            <transition-group name="test-cases" tag="div" class="test-cases-box">
                <TestCaseView
                        v-for="testcase in testcases"
                        :testcase="testcase"
                        :key="testcase.key"
                />
            </transition-group>
        </div>
    </div>
</template>

<script>
    import TestCaseView from "./TestCaseView";
    import TestCase from '../js_module/testcase/testcase.js'

    export default {
        name: "TestCases",
        components: {
            TestCaseView
        },
        data() {
            return {
                testcases: []
            }
        },
        created() {
            var pool = [
                    'url',
                    'pubdate',
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
            startTest() {
                console.log(this.testcases.pop().toJSON())
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

    .test-cases-enter-active, .test-cases-leave-active {
        transition: opacity 1s;
    }

    .test-cases-enter, .test-cases-leave-to {
        opacity: 0;
    }

    .test-cases-move {
        transition: transform 1s;
    }
</style>
