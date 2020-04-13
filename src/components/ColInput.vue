<template>
    <div class="col-input">
        <el-tag
                class="item-tag"
                v-if="existValue"
        >
            <i @click="handleClose" class="el-tag__close el-icon-close"></i>
            {{values}}
        </el-tag>
        <div v-if="!existValue" class="item-box">
            <el-input
                    class="item-input"
                    v-model="inputText"
                    ref="saveInputRef"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                    v-if="inputVisible"
            />
            <el-button
                    class="item-btn"
                    @click="showInput"
                    size="small"
                    type="primary"
                    plain
                    v-else
            >
                {{text}}
            </el-button>
        </div>


    </div>
</template>

<script>
    export default {
        name: "ColInput",
        props: {
            values: String,
            text: String
        },
        data() {
            return {
                inputText: '',
                inputVisible: false
            }
        },
        computed: {
            existValue() {
                return this.values.trim().length
            }
        },
        methods: {
            handleInputConfirm() {
                let inputText = this.inputText;
                if (inputText) {
                    this.$emit('set-rule', inputText);
                }
                this.inputText = '';
                this.inputVisible = false;
            },
            handleClose() {
                // this.values.splice(index, 1);
                // this.values = '';
                this.$emit('add-rule', '');
            },
            showInput() {
                this.inputVisible = true;
                this.$nextTick(() => {
                    this.$refs.saveInputRef.$refs.input.focus();
                });
            }
        }
    }
</script>

<style scoped>
    .col-input {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        height: 40px;
    }

    .item-tag {
        max-width: 90%;
        text-overflow: ellipsis;
        overflow: hidden;
        position: relative;
    }

    .el-tag__close {
        right: 1px !important;
    }

    /*.item-tag:after{*/
    /*    content: 'x';*/
    /*    position: absolute;*/
    /*    height: 30px;*/
    /*    width: 30px;*/
    /*    right: -20px;*/
    /*    background-color: black;*/
    /*}*/
</style>