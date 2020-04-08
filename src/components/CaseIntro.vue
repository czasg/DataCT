<template>
    <div class="case-intro">
        <div class="case-label">{{value}}</div>
        <transition-group name="test-cases" tag="div" class="test-cases-box">
            <TestCase
                    v-for="data_key in data_keys"
                    :data_key="data_key"
                    :key="data_key"
            />
        </transition-group>
    </div>
</template>

<script>
    import TestCase from "@/components/TestCase";

    export default {
        name: "CaseIntro",
        components: {
            TestCase
        },
        props: {
            value: String,
            data_keys: Array
        }
    }
</script>

<style scoped>
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
