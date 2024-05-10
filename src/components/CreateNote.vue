<template>
  <div id="container">
    <div id="content">
      <form @submit.prevent="onSubmit">
        <div>
          <legend>Cabeçalho</legend>
          <input required  type="text" v-model="costumerName" placeholder="Nome do cliente*" />
          <input required type="text" v-model="sellerName"  placeholder="Vendedor*" />
        </div>
        <div>
          <legend>Itens</legend>
          <div>
            <div id="erro">
              <ErrorMessage :erroActive="erroActive" :message="messageErro.status" @closeError="erroActive = false" />
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
import ErrorMessage from './ErrorMessage.vue';

export default {
  components:{ ErrorMessage },
  methods: {
    onSubmit() {},
    addTodo() {

      let qtdPontos = parseFloat(this.qtdPontos)
      let tipoPeca = this.typePiece
      let precoPeca = 0
      if(tipoPeca == 0){
        precoPeca = 0.45
      } else {
        precoPeca = 0.55
      }
      let unitPrice = (qtdPontos * precoPeca)/1000
      let total = parseFloat(this.qnt) * ((qtdPontos * precoPeca)/1000)
      if(this.qnt.trim() == "" || this.desc.trim() == "" ){
        this.erroActive = true
        this.messageErro = {status:"campos obrigatórioas não preenchidos"}
      }else{
        this.erroActive = false
        this.todos.push({
        qnt: this.qnt,
        desc: this.desc,
        vUnit: unitPrice.toFixed(2),
        qtdPontos: qtdPontos.toFixed(2),
        total: total.toFixed(2),
      });
      this.qnt = "";
      this.desc = "";
      this.qtdPontos = "";
      this.total = "";
      this.typePiece = 0
      }
      
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
      erroActive: false,
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
  height: 500px;
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
  height: 50px;
  width: 100%;
  padding-top: 10px;
}

#erro {
  display: flex;
  margin: 2%;
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
    background-color: lightgray;
}
#content {
  display: flex;
  padding: 3%;  
  background-color: white;
  width: 100%;
}
</style>