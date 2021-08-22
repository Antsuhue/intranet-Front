<template>
    <div id="logged">
            <Header />
        <div id="teste">
            <Menu />
            <Dashboard />
        </div>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import Dashboard from '../components/Dashboard.vue'
import Menu from "@/components/Menu.vue"

export default {
    components:{
        Header,
        Dashboard,
        Menu
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
#logged{
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

a{
    cursor: pointer;
}
#teste{
    display: flex;
    flex-direction: row;
    padding-top: 1%;
    width: 100%;
    height: 100%;
}

</style>