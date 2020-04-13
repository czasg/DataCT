<template>
    <div>
        <div class="case-intro">
            <div class="case-label">ClearCase</div>
            <transition-group name="test-cases" tag="div" class="test-cases-box">
                <ClearCaseView
                        v-for="(clearcase, index) in clearcases"
                        :clearcase="clearcase"
                        :key="clearcase.column"
                        @process-testcase="removeClearCase(clearcase, index)"
                >
                    <i class="el-icon-remove-outline"></i>
                </ClearCaseView>
            </transition-group>
        </div>
    </div>
</template>

<script>
    import ClearCaseView from "./ClearCaseView";
    import ClearCase from '../js_module/clearcase/clearcase.js';

    export default {
        name: "ClearCases",
        components: {
            ClearCaseView
        },
        data() {
            return {
                clearcases: [],
                drop_clearcases: []
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
                this.clearcases.push(new ClearCase(key));
            }
        },
        methods: {
            removeClearCase(testcase, index) {
                this.drop_testcases.push(testcase);
                this.testcases.splice(index, 1);
            },
            addClearCase(testcase, index) {
                this.testcases.push(testcase);
                this.drop_testcases.splice(index, 1);
            }
        }
    }
</script>

<style scoped>

</style>