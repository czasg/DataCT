<template>
    <div id="app">
        <HeaderRow/>
        <router-view/>
    </div>
</template>

<script>
    import HeaderRow from "@/components/HeaderRow";

    export default {
        name: 'App',
        components: {
            HeaderRow,
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
