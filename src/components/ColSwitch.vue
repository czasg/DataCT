<template>
    <div class="col-switch">
        <el-switch
                v-model="switch_flag"
                :active-text="text"
                @change="$emit('toggle-bool')"
        />
    </div>
</template>

<script>
    export default {
        name: "TestCaseColSwitch",
        props: {
            text: String,
            value: Boolean
        },
        data() {
            return {
                switch_flag: this.value
            }
        }
    }
</script>

<style scoped>
    .col-switch {
        text-align: center;
        line-height: 40px;
    }
</style>