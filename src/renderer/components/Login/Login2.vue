<template>
    <div>
        <div class="title-bar">
            <span>密码登录</span>
            <div class="right">
                <img @click="close"
                     src="../../assets/icon_close_gery.png">
                <img @click="minimize" src="../../assets/icon_minimize_gery.png">
            </div>
        </div>
        <div class="main">
            <div class="avatar">
                <el-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <div class="item">
                <el-input placeholder="请输入账号" v-model="account" clearable prefix-icon="el-icon-user"></el-input>
            </div>
            <div class="item">
                <el-input placeholder="请输入密码" v-model="password" show-password prefix-icon="el-icon-lock"></el-input>
            </div>
            <div class="item">
                <el-button type="primary" round @click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    const { ipcRenderer } = require('electron')
    // let ipcRenderer = require('electron').ipcRenderer;
    export default {
        name: 'Login',
        data () {
            return {
                account: '',
                password: ''
            }
        },
        methods: {
            //最大
            // maxsize(){
            //     //发送最大化命令
            //     ipcRenderer.send('window-max');
            // },

            minimize () {
                alert('hello')
                // ipcRenderer.send('minimize')
                //发送最小化命令
                ipcRenderer.send('window-min');
            },
            close () {
                // ipcRenderer.send('close')
                //发送关闭命令
                ipcRenderer.send('window-close');
            },
            login () {
                if (this.account === 'admin' && this.password === '123456') {
                    this.$router.push('Home')
                } else {
                    this.$message.error('用户名或密码错误')
                }
            }
        }
    }
</script>

<style>


    /*html{*/
        /*-webkit-app-region: drag;*/
        /*-webkit-user-select: none;*/
    /*}*/
    .main{
        margin-left: 30px;
        margin-right: 30px;
    }

    .title-bar{
        height: 50px;
        line-height: 50px;
        background-color: #409EFF;

        -webkit-app-region: drag;
        -webkit-user-select: none;
    }

    .title-bar .right{
        position: absolute;
        top: 0;
        right: 0;
        /*-webkit-app-region: no-drag; // 不可拖动*/
        -webkit-app-region: no-drag;
    }

    .title-bar span{
        color: white;
        display: inline;
        text-align: center;
        font-size: 18px;
    }

    .title-bar .right img{
        width: 20px;
        height: 20px;
        float: right;
        margin-top: 15px;
        margin-right: 15px;
    }

    .avatar{
        margin-top: 60px;
        margin-bottom: 40px;
    }

    button{
        width: 100%;
    }

    .item{
        margin-top: 20px;
    }

</style>
