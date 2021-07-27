<template>
    <div>
        <Header />
    </div>
</template>
<script>
import Header from '../components/Header.vue'

export default {
    components:{
        Header
    },
    data(){
        return {
        data: this.$cookies.get("data")
        }
    },
    methods: {
        usingProps(){
            this.$cookies.get("data")
        },
        clearCookies(){
            this.$cookies.remove("data")
            this.$router.push({ name:"Home"})
        }
    }
}
</script>
<style scoped>

a{
    cursor: pointer;
}

</style>