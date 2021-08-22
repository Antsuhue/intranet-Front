<template>
    <div id="container">
        <div id="content">
            <div id="costumer">
                <img id="logoCostumer" src="../assets/user.png" alt="">
                <table id="userTable">
                    <thead>
                        <tr>
                            <th>Cliente</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>testeCliente</td>
                            <td data-label="Valor">-5,00</td>
                        </tr>
                        <tr>
                            <td>testeCliente2</td>
                            <td data-label="Valor">-10,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="finance">
                <img id="logoDollar" src="../assets/dollar.png" alt="">
                <table id="tableFinance">
                    <thead>
                        <tr>
                            <th>Finanças</th>
                        </tr>
                        
                        <tr>
                            <th></th>
                            <th scope="col">Faturamento</th>
                            <th scope="col">Despesas</th>
                            <th scope="col">Lucro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Janeiro</td>
                            <td data-label="Fat">100,00</td>
                            <td data-label="Desp">50,00</td>
                            <td data-label="Lucro">50,00</td>
                        </tr>
                        <tr>
                            <td>Fevereiro</td>
                            <td data-label="Fat">200,00</td>
                            <td data-label="Desp">100,00</td>
                            <td data-label="Lucro">100,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    
}
</script>
<style scoped>

table {
    border-bottom: 5px solid #cccccc;
    border-right: 5px solid #cccccc;
    border-radius: 10px;
    border-collapse: unset;
}
#finance, #costumer{
    padding-top: 20px;
    margin: 0;
    height: 60vh;
}

#userTable tr {
    text-align: left;
}

#userTable td, th {
    padding: 10px;
}

#tableFinance td, #tableFinance th {
    text-align: center;
    padding: 10px;
}


#logoDollar {
    display: flex;
    padding: 0;
    margin: 0;
    height: 10vh;
}

#costumer p{
    display: flex;
}

#logoCostumer{
    display: flex;  
}

#container{
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
}

#content{
    display: flex;
    justify-content: space-around;
    background-color: white;
    padding-top: 1%;
    height: 100%;
    width: 100%;

}

@media screen and (max-width: 767px) {
    table{
        border: 0;
    }
    table caption{
        font-size: 1.3em;
    }
    table thead{
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    table tr {
        border-bottom: 3px solid #cccccc;
        border-right: 3px solid #cccccc;
        border-radius: 10px;
        display: block;
        margin-bottom: .625em;
    }

    table td {
        display: block;
        text-align: right;
    }

    table td::before {
        content: attr(data-label);
        float: left;
        padding-right: 20px;
        font-weight: bold;
    }
    able td:last-child {
        border-bottom: 0;
  }

}

</style>