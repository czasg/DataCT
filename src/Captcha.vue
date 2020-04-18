<template>
    <div id="app">
        <el-menu  mode="horizontal" background-color="#E4E7ED">
            <el-menu-item index="1">
                <router-link tag="div" to="/dataClear">
                    <div >数据清洗</div>
                </router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link tag="div" to="/dataTest">
                    <div >数据测试</div>
                </router-link>
            </el-menu-item>
        </el-menu>
        <div class="captcha-body">
            <div class="captcha-box">
                <img class="captcha-image" src="data:image/png;base64,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" alt="">
                <label>
                    <span>识别结果:</span>
                    <input type="text"/>
                </label>
                <div class="captcha-fetch">
                    test
                </div>
                <div class="captcha-process">
                    <el-button>保存</el-button>
                    <el-button>丢弃</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Captcha"
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

    .captcha-body{
        text-align: center;
        margin-top: 20px;
    }
    .captcha-box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .captcha-image{
        /*width: 200px;*/
        /*height: 60px;*/
    }
</style>