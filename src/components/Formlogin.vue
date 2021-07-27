/<template>
  <div class="index">
  <div id="erro" :class="{erro:erroActive}">
    <img id="imgError" v-on:click="closeErroBox" v-if="erroActive" src="../assets/close.png" alt="error">
    <p id="textError" v-if="erroActive">{{messageErro.status}}</p>
  </div>
  <b-form class="formLogin">
    <h3>LOGO</h3>

    <div class="form-group">
        <b-form-group>
        <label for="user">Usuario:</label>
        <b-form-input required id="user" v-model="user" class="input" :type="types[0]" />
      
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

export default {
  name: 'Index',
  data(){
    return {
      erroActive: false,
      messageErro: "",
      types: [
        'text',
        'password',
        'submit'
      ],
      user : "",
      pass : "",
      
      resposta:[]
      }
    },
    mounted(){
    },
    methods:{
      closeErroBox: function() {
        this.erroActive = false
      },

      showUser: function(){
      },
      search: async function(){
      const teste = {"name":this.user.toLowerCase(), "pass":this.pass}
      try{
      const user = await api.post("/login", teste)
      const data = user.data
      this.$cookies.set("data", data);
      this.$router.push({ name:"Logado"})
      }catch(err){
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

.index{
  display: flex;
  justify-content: center;
}

.input{
  align-content: center;

}
.formLogin{
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  color: black;
  background-color: white;
  width: 35vh;
  padding: 5%;
}

.buttonLogin{
  margin-top: 10px;
  background-color: #05445E;
  width: 100%;
}
.buttonLogin:hover{
  background-color: #189AB4;
}
.form-group{
  margin-bottom: 10px;
}
.erro{
  display: flex;
  align-items: center;
  text-align: center;
  top: 0;
  left: 0;
  position: fixed;
  background-color: whitesmoke;
  border-bottom: red solid;
  border-radius: 10px;
  opacity: 80%;
  width: 100%;
  height: 10%;
}
#imgError{
  display: flex;
  justify-content: flex-start;
  margin: 10px;
  cursor: pointer;
}
#textError {
  margin-top: 18px;
  width: 100%;
  color: red;
  font-weight: bold ;
}

h3{
  text-align: center;
}

</style>
