<template>
  <div id="container">
    <div id="content">
      <form @submit.prevent="onSubmit">
        <div>
          <legend>Cabeçalho</legend>
          <input type="text" v-model="costumerName" placeholder="Nome do cliente" />
          <input type="text" v-model="sellerName"  placeholder="Vendedor" />
        </div>
        <div>
          <legend>Itens</legend>
          <div>
            <div id="erro">
              <label id="erroMessage"><b>Erro!</b> TESTE</label>
            </div>
            <div id="divAddElement">
            <input
              v-model="qnt"
              id="teste"
              class="qnt"
              type="number"
              placeholder="Qnt"
            />
            <input
              v-model="desc"
              type="text"
              class="descricao"
              placeholder="Descrição"
            />
            <input
              v-model="qtdPontos  "
              type="number"
              class="vUnit"
              placeholder="Qtd.Pontos"
            />
            <input
              id="rAberto"
              name="tipoPeca"
              type="radio"
              v-model="typePiece"
              v-bind:value="0"
              class="tipoPeca"
            />
            <label for="rAberto">Aberto</label>
            <input
              id="rFechado"
              v-bind:value="1"
              v-model="typePiece"
              name="tipoPeca"
              type="radio"
              class="tipoPeca"
            />
            <label for="rFechado">Fechado</label>
            <img
              v-on:click="addTodo"
              class="addButton"
              src="../assets/add.png"
              alt="addButton"
            />
            </div>
          </div>
          <div id="qntItens">
            <div id="itens" v-for="(todo, index) in todos" v-bind:key="index">
              <div id="contentItem">
              <label for="">{{ todo.qnt }}</label>
              <label for="">{{ todo.desc }}</label>
              <label for="">R${{ todo.vUnit }}</label>
              <label for="">R${{ todo.total }}</label>              
                <img
                class="closeButton"
                v-on:click="removeItem(index)"
                src="../assets/close.png"
                alt="closeButton"
              />
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div id="divSubmit">
          <img v-on:click="submitNote" class="submitButton" src="../assets/check.png" alt="" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import api from '../services/api';
export default {
  methods: {
    onSubmit() {},
    addTodo() {

      let qtdPontos = parseFloat(this.qtdPontos)
      let tipoPeca = this.typePiece
      let precoPeca = 0
      if(tipoPeca == 0){
        precoPeca = 0.35
      } else {
        precoPeca = 0.45
      }
      let total = parseFloat(this.qnt) * ((qtdPontos * precoPeca)/1000)
      console.log(this.typePiece);
      this.todos.push({
        qnt: this.qnt,
        desc: this.desc,
        qtdPontos: qtdPontos.toFixed(2),
        total: total.toFixed(2),
      });
      this.qnt = "";
      this.desc = "";
      this.qtdPontos = "";
      this.total = "";
      this.typePiece = 0
    },
    removeItem(index) {
      this.todos.splice(index, 1);
    },
    submitNote: async function(){
      const obj = { 
      "costumerName": this.costumerName,
      "sellerName": this.sellerName,
      "itensList": this.todos,
      }
      await api.post("/createNote", obj)
      console.log("teste");
      this.todos = []
      this.costumerName = ""
      this.sellerName = ""
      this.qnt = "";
      this.desc = "";
      this.qtdPontos = "";
      this.total = "";
      this.typePiece = 0
    }
  },
  data() {
    return {
      costumerName: "",
      sellerName: "",
      todos: [],
      qnt: "",
      desc: "",
      qtdPontos: "",
      total: "",
      typePiece: 0
    };
  },
};
</script>
<style scoped>
form {
  margin: 0;
  height: 100%;
  width: 100%;
  padding-bottom: 10%;
}

#itens label {
  padding-right: 10px;
  text-align: center;
  margin-right: 10px;
  border-radius: 5px;
}

#qntItens {
  display: flexbox;
  height: 40vh;
  width: 100%;
  overflow: auto;
}

#divAddElement label, #rAberto, #rFechado {
  cursor: pointer;
}

#contentItem{
    display: flex;
    align-self: center;
    align-items: center;
    border-bottom: 3px solid #cccccc;
    border-right: 3px solid #cccccc;
    border-radius: 5px;
    margin: 0;
    padding: 0;
    width: fit-content;
}

#itens {
  height: 15%;
  width: 100%;
  padding-top: 1%;
}

#erro {
  display: flex;
  margin: 2%;
}
#erroMessage {
  background-color: #ff9999;
  padding: 1%;
  width: 45vh;
  border: none;
  margin-left: 10%;
  border-radius: 0px;
}

.closeButton {
  cursor: pointer;
  width: 25px;
  position: relative;
  left: 35px;
  top: 2px;
}
.addButton {
  cursor: pointer;
  width: 25px;
  margin: 1%;
}
.submitButton {
  display: flex;
  width: 35px;
  cursor: pointer;
}

#divSubmit {
  display: flex;
  justify-content: flex-end;
}

.tipoPeca{
  margin-left: 5px;
}

.qnt,
.vUnit,
.total {
  width: 15%;
  margin-right: 1%;
}
.descricao {
  margin-right: 1%;
}

#container {
    display: contents;
    width: 100vh;
    height: 100vh;
    background-color: lightgray;
    padding-left: 10%;
    padding-right: 10%;
}
#content {
  display: flex;
  padding: 3%;  
  background-color: white;
  height: 100vh;
  width: 100%;
}
</style>