<template>
    <div id="nav">
      <div id="menu">
        <ul id="menu2">
          <li><a href="">Notas</a>
          <ul>
            <li>Nova Nota</li>
            <li>Notas Pendentes</li>
            <li>Notas Pagas</li>
          </ul>
          </li>
          <li><a href="">Cliente</a>
          <ul>
          <li>Novo Cliente</li>
          <li>Ver Clientes</li>
          <li>Excluir Clientes</li>
          </ul>
          </li>
          <li>
            Finanças
          </li>
        </ul>
      </div>
      <div id="card">
      <img id="imgPerfil" src="../assets/goku.png" alt="">
      <ul id="info">
      <li>Nome</li>
      <li id="changePerfil" v-on:click="changePerfil" >Editar Perfil</li>
      <li>Cargo</li>
      </ul>
      </div>
    </div>
</template>
<script>
export default {
  methods:{
    changePerfil: function(){
      this.$router.push({name:"ChangePerfil"})
    }
  }
}
</script>
<style scoped>
#nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
}

#card{
  display: flex;
  justify-content: space-between;
  border-end-end-radius: 12px;
  border-end-start-radius: 12px;
  height: 12vh;
  width: 35vh;
  padding-top: 5px;
  padding-left: 10px;
  border-top: 0px;
  border-style: solid;
  background-color: #99ccff;
}

#card ul{
  list-style-type: none;
}

#imgPerfil{
  border-radius: 50px;
  margin-left: 10px;
  width: 10vh;
  height: 10vh;
}

#menu2{
  position: fixed;
  display: flex;
  list-style-type: none;
  color: white;
}

#menu2 li ul{
  position: fixed;
  display: none;
}

#menu2 li a{
  padding: 5px;
  background-color: black;
  color:white;
  
}

#menu02 li a:hover {
  background-color: green;
  color:white;
  
}


#menu2 li:hover ul, #menu li.over ul{
  display: flex;
  flex-direction: column;
  }

#menu2 li ul{
  top: 64px;
  padding: 10px;
}

#menu2 li{
  background-color: black;
  padding: 5px;
  font-weight: bolder;
  cursor: pointer;
}


#info{
  display: flex;
  flex-direction: column;
  list-style-type: none;
  font-weight: bold;
  font-size: 14px;
  height: 1vh;
  width: 20vh;
}
@media only screen and (max-width: 500px) {
    #info {font-size: 13px;}
    #menu {

    }
    #menu2 li ul{
    top: 60px;
    }
}


#changePerfil{
  cursor: pointer;
}
#changePerfil:hover{
  color: greenyellow;
}
</style>