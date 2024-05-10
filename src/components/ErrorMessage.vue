<template>
    <div id="erro" :class="{ erro: erroActive }">
        <img id="imgError" v-on:click="closeErroBox" v-if="erroActive" src="../assets/close.png" alt="error">
        <p id="textError" v-if="erroActive">{{ message }}</p>
    </div>
</template>

<script>

export default {
     props:{
        erroActive: {
            type: Boolean,
            required: true,
            default: false
        },
        message: {
            type: String,
            required: true
        }
    },
    methods:{
        closeErroBox () {
        // this.erroActive = false
        this.$emit("closeError")
      }
    }
}

</script>

<style scoped>
.erro {
    display: flex;
    align-items: center;
    text-align: center;
    top: 0;
    left: 0;
    background-color: whitesmoke;
    border-bottom: red solid;
    border-radius: 10px;
    opacity: 80%;
    width: 50%;
    height: 10%;
}

#imgError {
    display: flex;
    justify-content: flex-start;
    margin: 10px;
    cursor: pointer;
}

#textError {
    margin-top: 18px;
    width: 100%;
    color: red;
    font-weight: bold;
}
</style>