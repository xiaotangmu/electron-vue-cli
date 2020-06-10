<template>
    <div>
        <el-calendar v-model="value"></el-calendar>
    </div>
</template>

<script>
    export default {
        name: 'New',
        data () {
            return {
                value: new Date()
            }
        }
    }
</script>
