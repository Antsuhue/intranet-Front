<template>
    <div id="container">
        <div id="divSearch">
            <select name="" id="searchFor">
                <option value="">Buscar Por</option>
                <option value="noteCode">Código da nota</option>
                <option value="clientName">Nome do Cliente</option>
                <option value="sellerName">Nome do Vendedor</option>
            </select>
            <input type="text" />
            <img src="../assets/search.png" alt="">
        </div>
        <div id="listNotes">
            <div id="note" v-for="(note, index) in this.total.data" v-bind:key="index">
                <div>
                    <label for="">Cliente: {{ note.costumerName }}</label>
                </div>
                <div>
                    <label>Vendedor: {{note.sellerName}}</label>
                </div>
                <div>
                    <label for="">itens na nota: {{note.itens.length}}</label>
                </div>
                <div>
                    <label for="">Status: {{note.status}}</label>
                </div>
                <div id="total">
                    <label for="">R${{note.total}}</label>
                </div>
                <div id="divButton">
                    <button>Mais Detalhes</button>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import api from "../services/api";
export default {

    methods: {

    },

    computed: {

    },

    mounted (){

    },

    async created() {

        this.total = await api.get("/notes")
    },
    
    
    data(){
        return {
            total: "",
            qntItens: 0
        }
    }    
}
</script>
<style scoped>

#container{
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 25px;
    padding-bottom: 100px;
    width: 100%;
    height: 100%;
}

#divSearch{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
}

#divSearch select {
    margin-right: 5px;
}
#divSearch select, option{

    padding: 2px;
}

#divSearch input {
    height: 100%;
    width: 15%;
}

#divSearch img {
    height: 25px;
    width: 25px;
    margin: 2px;
    cursor: pointer;
}

#listNotes{
    display: flex;
    flex-wrap: wrap;
    margin-left: -8px;
    margin-right: -8px;
}

#note{
    border-right: 1px solid;
    border-left: 3px solid;
    border-top: 1px solid;
    border-bottom: 3px solid;
    flex-basis: 30%;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 3%;
    box-shadow: -5px 8px grey;
    height: fit-content;
    width: 30%;
    margin: 10px;
}

#total{
    display: flex;
    justify-content: flex-end;
}

#divButton{
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    padding-bottom: 10px;
}

#divButton button{
    background-color: white;
    box-shadow: -2px 2px ;
}

</style>