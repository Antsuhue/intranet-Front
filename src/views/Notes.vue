<template>
    <div id="viewNotes">
        <Header />
        <div id="content">
        <Menu />
        <ListNotes />
        </div>
    </div>    
</template>
<script>
import ListNotes from "../components/ListNotes.vue";
import Menu from "../components/Menu.vue"
import Header from "../components/Header.vue"
export default {

    components: {
        ListNotes,
        Menu,
        Header
    }

}
</script>
<style scoped>

#viewNotes{
    display: flex;
    position: fixed;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

#content{
    display: flex;
    flex-direction: row;
    padding-top: 1%;
    width: 100%;
    height: 100vh;
}

</style>