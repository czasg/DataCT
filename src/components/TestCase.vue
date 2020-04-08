<template>
    <div class="test-case">
        <div>{{data_key}}</div>
    </div>
</template>

<script>
    export default {
        name: "TestCase",
        props: {
            data_key: String
        }
    }
</script>

<style scoped>
    .test-case {
        width: 800px;
        height: 80px;
        background-image: linear-gradient(to right, rgba(225, 245, 254, .8), rgba(243, 229, 245, .8));
        margin-bottom: 10px;
        border-radius: 10px;
    }
</style>
