<template>
  <div id="menu">
    <div id="contentHamburger">
      <div id="ham1"></div>
      <div id="ham2"></div>
      <div id="ham3"></div>
    </div>
    <div id="menu">
        <ul>
            <li class="itemMenu">
                <a v-on:click="index" href="">
                    <i class="material-icons">home</i>
                    <p class="textMenu">Home</p>
                </a>
            </li>
            <li class="itemMenu">
                <a v-on:click="newNote" href="">
                    <i class="material-icons">note_add</i>
                    <p class="textMenu">Nova Nota</p>
                </a>
            </li>
            <li class="itemMenu">
                <a v-on:click="note" href="">
                    <i class="material-icons">note</i>
                    <p class="textMenu">Notas</p>
                </a>
            </li>
            <li class="itemMenu" >
                <a href="">
                    <i class="fas fa-user-friends"></i>
                    <p class="textMenu">Clientes</p>
                </a>
            </li>
            <li class="itemMenu">
                <a href="">
                    <i class="fas fa-user-plus"></i>
                    <p class="textMenu">Novo Cliente</p>
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

a {
    display: flex;
    width: 100%;
}

.itemMenu{
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 5%;
    width: max-content;
}

.textMenu {
    margin-left: 25px;
}
i {
    font-size: 24px;
    color: black;
}

p {
    color: black;
    height: fit-content;
}

a:hover  i{
    color:white
}
a:hover  p{
    color:white
}

@media screen and (max-width : 700px) {
    li a p{
        display: none;
    }
    
}



</style>