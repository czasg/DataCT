<template>
    <div id="app">
        <HeaderRow/>
        <TestCases/>
    </div>
</template>

<script>
    import HeaderRow from "@/components/HeaderRow";
    import TestCases from "@/components/TestCases";

    export default {
        name: 'App',
        components: {
            HeaderRow,
            TestCases
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        height: 100vh;
        width: 100vw;
    }

    body {
        background-image: linear-gradient(45deg, #FFCDD2, #B3E5FC);
        background-attachment: fixed;
        overflow-x: hidden;
    }
</style>
