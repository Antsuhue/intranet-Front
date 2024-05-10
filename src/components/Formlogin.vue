<template>
  <div class="index">
    <div class="errorContainer">
      <ErroMessage :erroActive="erroActive" :message="messageErro.status" @closeError="erroActive = false" />
    </div>
      <b-form class="formLogin">
      <h3>LOGO</h3>

      <div class="form-group">
        <b-form-group>
          <label for="user">Usuario:</label>
          <b-form-input id="user" v-model="user" class="input" :type="types[0]"  />

        </b-form-group>
      </div>
      <div>
        <label for="pass">Senha:</label>
        <b-form-input required id="pass" v-model="pass" :type="types[1]" />
      </div>

      <b-button v-on:click="search" class="buttonLogin">Login</b-button>
    </b-form>
  </div>
</template>

<script>
import api from "../services/api.js"
import ErroMessage from "@/components/ErrorMessage.vue"

export default {
  name: 'Index',
  components: {
    ErroMessage
  },
  data() {
    return {
      erroActive: false,
      messageErro: "",
      types: [
        'text',
        'password',
        'submit'
      ],
      user: "",
      pass: "",

      resposta: []
    }
  },
  mounted() {
  },
  methods: {

    showUser: function () {
    },
    search: async function () {
      const authentication = { "name": this.user.toLowerCase(), "pass": this.pass }
      try {
        const user = await api.post("/login", authentication)
        const data = user.data
        this.$cookies.set("data", data);
        this.$router.push({ name: "Logado" })
      } catch (err) {
        this.erroActive = true
        this.messageErro = err.response.data
        console.log(err.response.data);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.errorContainer{
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.input {
  align-content: center;

}

.formLogin {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  color: black;
  background-color: white;
  width: 25%;
  margin: 10px;
  height: 50vh;
  padding: 5%;
  margin-bottom: 100px;
}

.buttonLogin {
  margin-top: 10px;
  background-color: #05445E;
  width: 100%;
}

.buttonLogin:hover {
  background-color: #189AB4;
}

.form-group {
  margin-bottom: 10px;
}

h3 {
  text-align: center;
}

@media only screen and (max-width: 1200px) {
  .formLogin {
    width: 35%;
  }
}

@media only screen and (max-width: 500px) {
  .formLogin {
    width: 50%;
  }
}</style>
