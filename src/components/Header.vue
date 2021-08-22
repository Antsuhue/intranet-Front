<template>
  <div id="nav">
    <div id="card">
      <img id="imgPerfil" src="../assets/goku.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    changePerfil: function () {
      this.$router.push({ name: "ChangePerfil" });
    },
    index: function () {
      this.$router.push({ name: "Logado" });
    },
    newNote: function () {
      this.$router.push({ name: "NewNote" });
    },
  },
};
</script>
<style scoped>
#card {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 10%;
}

img{
  display: flex;
  width: 30%;
  border-radius: 200px;
}

#nav{
  display: flex;
  position: fixed;
  justify-content: flex-end;
  position: relative;
}

</style>


/*#contentHamburger{
  display: none;  
}

#menu1{
  background-color: black;
  padding: 5px;
  border-radius: 10px;
}

#menu{
  padding: 5px;
  cursor: pointer;
}

#menu span{
  color: white;
  text-align: center;
  margin: 10px;
  font-weight: bold;
}

.dropdown-content{
  display: none;
  
}

.dropdown-content p {
  padding: 8px;
  margin:0;
  text-align: start;
  background: #80dfff;
}
.dropdown p:hover{
  background-color: black;
  color: white;
}


.dropdown:hover .dropdown-content{
  position: fixed;
  display: flex;
  flex-direction: column;
}

#nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: -10px;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 1%;
}

#card{
  display: none;
  border-end-end-radius: 12px;
  border-end-start-radius: 12px;
  height: 13vh;
  width: 35vh;
  padding-top: 10px;
  padding-left: 10px;
  border-top: 0px;
  border-bottom: 3px solid;
  border-right: 3px solid;
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
  background: black;
  border-radius: 10px;
  list-style-type: none;
  color: white;
  padding-left: 10px;
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

.subMenu{
  display: inline-block;

}

@media only screen and ( max-height: 650px) {
    #info {font-size: 13px;
    }
    #contentHamburger{
      cursor: pointer;
      display: block;
      flex-direction: column;

    }
    #ham1, #ham2, #ham3{
      display: grid;
      width: 35px;
      height: 2px;
      background-color: black;
      margin: 8px 0;
    }

    #ham2{
      width: 24px;
    }

    #menu1{
      display: none;
    }
    #menu2 li ul{
    top: 60px;
    }
}


#changePerfil{
  cursor: pointer;
}
#changePerfil:hover{
  color: yellow ;
}*/ 