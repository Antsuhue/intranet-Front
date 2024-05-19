<template>
        <div class="overlay" v-on:click="closePopUp" v-if="showPopUp">
            <div id="popUp" :class="{ popUp: showPopUp }">
            <legend v-if="showPopUp">Atenção!</legend>
            <p v-if="showPopUp">{{message}}</p>
            <div class="buttons" v-if="showPopUp">
                <button v-on:click="removeNote">Sim</button>
                <button v-on:click="closePopUp">Não</button>
            </div>
        </div>
        </div>
</template>

<script>
import api from '../services/api';

export default {
    props: {
        showPopUp: {
            type: Boolean,
            required: true,
            default: false

        },
        message: {
            type: String,
            required: true,
        },

        note:{
            type:Object
        },
        position:{},
        total:{}

    },
    methods: {
        closePopUp() {
            console.log("Fechou!")
            //this.showPopUp = false
            this.$emit("popUp")
        },

        removeNote: async function () {
            this.total.splice(this.position, 1)
            const idNota = this.note["idNota"]
            await api.delete(`/notes/${idNota}`, (err) =>{
                if(err){console.log(err)}
                
            })
            this.$emit("popUp")
        }
    },
}

</script>

<style scoped>


.overlay {
    display: flex;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
}

.popUp {
    display: flex;
    position: fixed;
    align-self: center;
    align-content: center;
    padding: 10px;
    background-color: antiquewhite;
    border-bottom: #ff3333 solid;
    border-left: #ff3333 solid;
    flex-direction: column;
}

.buttons {
    display: flex;
    align-self: flex-end;
    align-content: space-between;
}

button {
    display: flex;
    margin-left: 10px;
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 5px;
}
</style>