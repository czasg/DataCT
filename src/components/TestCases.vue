<template>
    <div class="test-cases">
        <CaseIntro value="BaseInfo" :data_keys="data_keys['base']"/>
        <CaseIntro value="OtherInfo" :data_keys="data_keys['other']"/>
    </div>
</template>

<script>
    import CaseIntro from "@/components/CaseIntro";

    export default {
        name: "TestCases",
        components: {
            CaseIntro
        },
        data() {
            return {
                data_keys: {
                    'base': [
                        'url',
                        'pubdate',
                        'name',
                        'title',
                    ],
                    'other': [
                        'text',
                        'wenshu',
                        'tset1',
                        'youhaap'
                    ]
                },
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
</style>
