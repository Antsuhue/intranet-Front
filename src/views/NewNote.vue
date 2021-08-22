<template>
    <div id="newNote">
        <Header />
        <div id="teste">
        <Menu />
        <CreateNote />
        </div>
    </div>    
</template>
<script>
    import Header from '../components/Header.vue'
    import CreateNote from '../components/CreateNote.vue'
    import Menu from '../components/Menu.vue'
export default {
    components:{
        Header,
        CreateNote,
        Menu
    }
    
}
</script>
<style scoped>
#newNote{
    display: flex;
    position: fixed;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

#teste{
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding-top: 1%;
    width: 100%;
    height: 100%;
}

</style>