<template>
    <div class="col">
        <el-tooltip
                :content="value"
                effect="light"
                placement="top"
        >
            <div class="key">{{value}}</div>
        </el-tooltip>
    </div>
</template>

<script>
    export default {
        name: "Col",
        props: {
            value: String
        }
    }
</script>

<style scoped>
    .col {
        text-align: center;
        line-height: 30px;
        padding: 5px;
        box-sizing: border-box;
    }

    .key {
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>