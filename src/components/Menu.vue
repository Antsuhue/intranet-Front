<template>
  <div id="menu">
    <div id="contentHamburger">
      <div id="ham1"></div>
      <div id="ham2"></div>
      <div id="ham3"></div>
    </div>
    <div id="menu">
        <ul>
            <li>
                <a v-on:click="index" href="">
                    <i class="material-icons">home</i>
                </a>
            </li>
            <li>
                <a v-on:click="newNote" href="">
                    <i class="material-icons">note_add</i>
                    <p>Nova Nota</p>
                </a>
            </li>
            <li>
                <a v-on:click="note" href="">
                    <i class="material-icons">note</i>
                    <p>Notas</p>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="fas fa-user-friends"></i>
                    <p>Cliente</p>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="fas fa-user-plus"></i>
                    <p>Novo Cliente</p>
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
    methods : {
    index: function () {
        this.$router.push({ name: "Logado" });
    },
    newNote: function (){
        this.$router.push({ name: "NewNote" })
    },
    note: function (){
        this.$router.push({ name:"Notes" })
    }
    }
}
</script>
<style scoped>

#menu{
    display: flex;
    z-index: 4;
    position: relative;
    background-color: #4d94ff;
    width: 20%;
    padding-top: 10px;
}

ul{
    display: flex;
    flex-direction: column;
    width: 10%;
}

li a {
    display: flex;
    width: 100%;
    padding-top: 2%;
}

p {
    padding-left: 2%;
}
i {
    font-size: 24px;
}

p, i {
    color: black;
}

@media screen and (max-width : 700px) {
    li a p{
        display: none;
    }
    
}



</style>